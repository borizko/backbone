var Person = Backbone.Model.extend({
  defaults: {
    name: "Dima", 
    age: "25",
    job: "Web"
  },

  walk: function(){
    return this.get("name")+ ' is walking'
  }

})