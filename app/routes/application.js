import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const fixtures = [{
      id: 1,
      from: 'recruiter@startup.com',
      to: 'dev@me.com',
      subject: 'Opportunity',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date(),//calling new on date
      readDate: null,
      trashedDate: null
    },
    {
      id: 2,
      from: 'riko@startup.com',
      to: 'riko@me.com',
      subject: 'Foo',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date(),//calling new on date
      readDate: null,
      trashedDate: null
    }];

    const { get } = Ember;
    return fixtures.filter(function(email) {
      return !get(email, 'trashedDate');
    });
  }
});
