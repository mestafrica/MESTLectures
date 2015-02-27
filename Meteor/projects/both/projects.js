Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000,
        autoform: {
            rows: 5
        }
    },
    category: {
        type: String,
        autoform: {
            options: function() {
                return [{
                    value: 'html',
                    label: 'HTML'
                }, {
                    value: 'javascript',
                    label: 'JavaScript'
                }, {
                    value: 'css',
                    label: 'CSS'
                }]
            }
        }
    },
    picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        },
        label: 'Choose file'
    },
    owner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.userId();
            }
        }
    }
}));