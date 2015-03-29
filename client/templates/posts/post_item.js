/**
 * Created by thangdx on 29/03/2015.
 */
Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});