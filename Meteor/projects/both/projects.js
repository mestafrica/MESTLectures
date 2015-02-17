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
    contact: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Contact Email"
    },
    payment: {
        type: Number,
        label: "Payment",
        min: 0
    },
    paymentType: {
        type: String,
        label: "Payment Type",
        autoform: {
            options: [{
                label: "Hourly",
                value: "hourly"
            }, {
                label: "Whole thing",
                value: "project"
            }]
        }
    },
    dueDate: {
        type: Date,
        label: "Due by",
        optional: true
    }
}));