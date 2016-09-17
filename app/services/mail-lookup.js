import Ember from 'ember';

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

const { get, set} = Ember;

export default Ember.Service.extend({

  lookupFilters: {
    inbox: i => !get(i, 'trashedDate'),
    trash: i => get(i, 'trashedDate'),
  },
  retrieve(folderName) {
    return new Ember.RSVP.Promise((resolve) => {
      const lookupFilters = get(this, 'lookupFilters');

      for(var fn in lookupFilters) {
        const filter = lookupFilters[fn];
        const result = fixtures.filter(filter);

        set(this, `${fn}Count`, result.length);
        set(this, fn, result);
      }
      this.set('currentFolderName', folderName);
      resolve(get(this, folderName));
    });
  }

});
