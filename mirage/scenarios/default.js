export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  server.create('email', {
    id: 1,
    from: 'recruiter@startup.com',
    to: 'dev@me.com',
    subject: 'Opportunity',
    body: 'Dear {{firstName}}, ...',
    sentAt: new Date(),//calling new on date
    readDate: null,
    trashedDate: null
  });

  server.create('email', {
    id: 2,
    from: 'riko@startup.com',
    to: 'riko@me.com',
    subject: 'Foo',
    body: 'Dear {{firstName}}, ...',
    sentAt: new Date(),//calling new on date
    readDate: null,
    trashedDate: null
  });
}
