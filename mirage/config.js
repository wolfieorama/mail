const { get } = Ember;

function getEmailMetaCounts(emails){
  const results = {};
  results.inbox = emails.where(i => !get(i, 'trashedDate'));
  results.trash = emails.where(i => get(i, 'trashedDate'));
  // results['starred'] = emails.where(i => get(i, 'starred'));

  const meta = {
   inboxCount: results.inbox.models.length,
   trashCount: results.trash.models.length
  //  starredCount: results['starred'].models.length
  };

  return [meta, results];
}

export default function() {

  this.namespace = 'api/v1';

  this.get('/emails', function({ emails }, request){
    const folderName = request.queryParams.folderName;
    const [meta,results] = getEmailMetaCounts(emails);
    const json = this.serialize(results[folderName], 'email');

    json.meta = meta;

    return json;
  });
}
