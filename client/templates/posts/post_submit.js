/**
 * Created by thangdx on 01/04/2015.
 */
Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function (error, result) {
            if(error)
                return alert(error.reason);
            if(result.postExits)
                alert('This link has alread been posted');

            Router.go('postPage', {_id: result._id});
        });
    }
});