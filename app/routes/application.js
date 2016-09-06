import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[{
      id: 1,
      from: 'recruiter@startup.com',
      to: 'dev@me.com',
      subject: 'Opportunity',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date()//calling new on date
    },
    {
      id: 2,
      from: 'riko@startup.com',
      to: 'riko@me.com',
      subject: 'Foo',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date()//calling new on date
    }];
  }
});
