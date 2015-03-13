@Projects = new (Mongo.Collection)('projects')

Projects.attachSchema new SimpleSchema(
  title:
    type: String
    label: 'Title'
    max: 200
  summary:
    type: String
    label: 'Brief summary'
    optional: true
    max: 1000
    autoform: rows: 5
  category:
    type: String
    autoform: options: ->
      Config.categories
  owner:
    type: String
    autoform: omit: true
    autoValue: ->
      if @isInsert
        return Meteor.userId()
      return

)
