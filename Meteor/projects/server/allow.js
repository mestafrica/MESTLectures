Projects.allow({
	insert: function (userId, doc) {
		//is signed in
		if (userId){
			return true;
		}
	},
	update: function (userId, doc, fields, modifier) {
		// is signed in
		// is owner of document
		if (userId && (userId === doc.owner)){
			return true;
		}
	},
	remove: function (userId, doc) {
		//Users can only remove their own docs
		if (userId === doc.owner){
			return true;
		}
	}
});