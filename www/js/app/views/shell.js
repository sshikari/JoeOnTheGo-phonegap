define(function (require) {
       
       "use strict";
       
       var $               = require('jquery'),
       _                   = require('underscore'),
       Backbone            = require('backbone'),
       StoryListView       = require('app/views/StoryList'),
       models              = require('app/models/story'),
       tpl                 = require('text!tpl/Shell.html'),
       
       template = _.template(tpl),
       $menuItems;
       
       return Backbone.View.extend({
                                   
                                   initialize: function () {
                                   this.storyList = new models.StoryCollection();
                                   },
                                   
                                   render: function () {
                                   this.$el.html(template());
                                   var listView = new StoryListView({collection: this.storyList, el: $(".story-list", this.el)});
                                   listView.render();
                                   $menuItems = $('.navbar .nav li', this.el);
                                   return this;
                                   },
                                   
                                   events: {
                                   "keyup .search-query": "search",
                                   "keypress .search-query": "onkeypress"
                                   },
                                   
                                   search: function (event) {
                                   var key = $('#searchText').val();
                                   this.storyList.fetch({reset: true, data: {name: key}, success: function () {
                                                           setTimeout(function () {
                                                                      $('.dropdown').addClass('open');
                                                                      });
                                                           }});
                                   },
                                   
                                   onkeypress: function (event) {
                                   if (event.keyCode === 13) { // enter key pressed
                                   event.preventDefault();
                                   }
                                   },
                                   
                                   selectMenuItem: function (menuItem) {
                                   $menuItems.removeClass('active');
                                   if (menuItem) {
                                   $('.' + menuItem).addClass('active');
                                   }
                                   }
                                   
                                   });
       
       });