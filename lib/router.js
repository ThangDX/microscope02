/**
 * Created by thangdx on 30/03/2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function () {return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});