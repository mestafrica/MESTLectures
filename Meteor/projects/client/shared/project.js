Template.project.events({
	'click .btn-delete': function (e,t) {
		var _id = this._id;
		Projects.remove(_id);
	}
});