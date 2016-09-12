import { relativeDateFormatter } from 'mail/helpers/relative-date-formatter';
import { module, test } from 'qunit';
import moment from 'moment';

module('Unit | Helper | relative date formatter', {
  afterEach(){ // resets timekeeper incase we are simulating time elsewhere
    timekeeper.reset();
  }
});

const date = moment("07/27/2016 1:00 PM", "MM/DD/YYYY h:mm:ss A").toDate(); //moment lib to work with dates

test('show relative time for date\'s that are less than 24 hours old', function(assert){
  const laterDate = moment(date).add(1, 'hour').toDate();
  timekeeper.freeze(laterDate); //timekeeper lib to freeze time
  const actual = relativeDateFormatter([date], { relative: true });
  assert.equal(actual, '1:00 PM (1 hour ago)');
});

test('show just date when relative is false', function(assert){
  const laterDate = moment(date).add(2, 'day').toDate();
  timekeeper.freeze(laterDate); //timekeeper lib to freeze time
  const actual = relativeDateFormatter([date], { relative: false });
  assert.equal(actual, 'Jul 27');
});
