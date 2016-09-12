import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  model({ mailId }){
    return this.modelFor('application')[mailId-1];
  },
  serialize(model){
    return { mailId: model.id };
  },
  afterModel(model){
    set(model, 'readDate', new Date());
  }
});
