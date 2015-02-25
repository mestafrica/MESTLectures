AutoForm.hooks({
  insertApplication: {
    formToDoc: function(doc, ss, formId) {
      console.log(doc);
      doc.project = Router.current().params._id;
      console.log(doc);
      return doc;
    }
  }
});