AutoForm.hooks({
  insertApplication: {
    formToDoc: function(doc, ss, formId) {
      doc.project = Router.current().params._id;
      return doc;
    },
    onSuccess: function(operation, result, template) {
    	//_id of newly created Applications document
    	var _id = result;
    	Meteor.call('sendApplicationNotification',_id);
    }
  }
});