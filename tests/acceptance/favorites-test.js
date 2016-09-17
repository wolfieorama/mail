import { test } from 'qunit';
import moduleForAcceptance from 'mail/tests/helpers/module-for-acceptance';

import folderPage from 'mail/tests/pages/folder';

moduleForAcceptance('Acceptance | favorites');

test('visiting /favorites', function(assert) {
  folderPage.visit();
  folderPage.emails(0).star();//with paren is doing
  // folderPage.emails(0).starred; without parens checks if the thing happened
  andThen(function() {
    // return pauseTest();
    assert.ok(folderPage.emails(0).starred, 'wasn\'t starred');
  });
});
