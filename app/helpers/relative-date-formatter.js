import Ember from 'ember';
import moment from 'moment';

export function relativeDateFormatter([date]/*, hash*/) {
  return `${formatTime(date)} (1 hour ago)`;
}

function formatTime(date){
  return moment(date).format('h:mm A');
}

export default Ember.Helper.helper(relativeDateFormatter);
