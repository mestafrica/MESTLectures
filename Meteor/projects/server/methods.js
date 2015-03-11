Meteor.methods({
    sendApplicationNotification: function(_id) {
    	// _id is _id of application

    	var application = Applications.findOne(_id);
    	var applicant = Meteor.users.findOne(application.owner);

    	var project = Projects.findOne(application.project);
    	var projectOwner = Meteor.users.findOne(project.owner);

    	console.log(application);
    	console.log(applicant);
    	console.log(project);
    	console.log(projectOwner);

    	var to = projectOwner.emails[0].address;
    	var html = 'New application for job: ' + application.description;

        Email.send({
            to: to,
            from: 'applications@myapp.com',
            subject: 'New Application',
            html: html
        });
    }
})