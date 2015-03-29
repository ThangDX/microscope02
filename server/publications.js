/**
 * Created by thangdx on 29/03/2015.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});