define(function (require) {
       
       "use strict";
       
       var $       = require('jquery'),
       Backbone    = require('backbone'),
       
       Story = Backbone.Model.extend({
                                        
                                        urlRoot: "http://localhost:3000/stories",
                                        
                                        initialize: function () {
                                        this.reports = new StoryCollection();
                                        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
                                        }
                                        
                                        }),
       
       StoryCollection = Backbone.Collection.extend({
                                                       
                                                       model: Story,
                                                       
                                                       url: "http://localhost:3000/stories"
                                                       
                                                       });
       
       return {
       Story: Story,
       StoryCollection: StoryCollection
       };
       
       });