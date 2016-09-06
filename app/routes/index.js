import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[{
      from: 'recruiter@startup.com',
      to: 'dev@me.com',
      subject: 'Opportunity',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date()//calling new on date
    },
    {
      from: 'riko@startup.com',
      to: 'riko@me.com',
      subject: 'Foo',
      body: 'Dear {{firstName}}, ...',
      sentAt: new Date()//calling new on date
    }];
  }
});
