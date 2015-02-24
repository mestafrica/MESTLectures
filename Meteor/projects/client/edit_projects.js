AutoForm.hooks({
  editProject: {
    onSuccess: function(operation, result, template) {
      Router.go('projects');
    }
  }
});