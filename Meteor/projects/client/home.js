AutoForm.hooks({
  addProject: {
    onSuccess: function(operation, result, template) {
      Router.go('projects');
    },
    onError: function(operation, error, template) {
      alert(error)
    }
  }
});