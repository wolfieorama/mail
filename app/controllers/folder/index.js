import Ember from 'ember';

const { get, set} = Ember;

export default Ember.Controller.extend({
  mailLookup: Ember.inject.service(),
  currentFolderName: Ember.computed.alias('mailLookup.currentFolderName'),

  actions: {
    showEmail(email){
      this.transitionToRoute('folder.mail', email);
      // this is the controller context ref transitionToRoute
    },
    trashBulk(){
      const results = get(this, 'model').filter(i => get(i, 'checked'));
      get(this, 'mailLookup').removeItems(results);
    },
    starEmail(email){
      set(email, 'starred', !get(email, 'starred'));
    }
  }
});
