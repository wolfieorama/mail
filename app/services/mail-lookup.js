import Ember from 'ember';

const { get, set, setProperties } = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service(),

  retrieve(folderName) {
    return get(this, 'store').query('email', { folderName }).then((emails) =>{
      setProperties(this, get(emails, 'meta'));
      set(this, folderName, emails);
      set(this, 'currentFolderName', folderName);

      return emails;
    });
  }

});
