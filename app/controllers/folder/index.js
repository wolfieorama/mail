import Ember from 'ember';

const { get, set} = Ember;

export default Ember.Controller.extend({
  mailLookup: Ember.inject.service(),
  actions: {
    showEmail(email){
      this.transitionToRoute('folder.mail', email);
      // this is the controller context ref transitionToRoute
    },
    trashBulk(){
      const results = get(this, 'model').filter((item) => {
        return get(item, 'checked');
      });

      results.forEach((result) => {
        set(result, 'trashedDate', new Date());
        set(result, 'checked', false);
      });
      this.transitionToRoute('application');
    }
  }
});
