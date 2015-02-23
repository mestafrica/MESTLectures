AutoForm.hooks({
  addProject: {
    onSuccess: function(operation, result, template) {
      Router.go('projects');
    },
    onError: function(operation, error, template) {
      alert(error)
    },
    formToDoc: function(doc, ss, formId) {
      console.log(doc);
      doc.owner = Meteor.userId();
      console.log(doc);
      return doc;
    }
  }
});