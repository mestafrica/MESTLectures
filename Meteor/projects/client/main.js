  AutoForm.addHooks(null, {
    onError: function (operation, error, template) {
      console.log('Error: ' + error);
    }
  });