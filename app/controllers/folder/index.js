import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showEmail(email){
      this.transitionToRoute('folder.mail', email);
      // this is the controller context ref transitionToRoute
    },
    trashBulk(){
      console.log("Fired");
    }
  }
});
