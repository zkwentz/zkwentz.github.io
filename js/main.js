require(["jquery"], function($) {

    $(document).ready(function() {

        // set your twitter id
        var user = 'wentz__';

        $.ajax({
            url: 'https://api.twitter.com/1/statuses/user_timeline.json',
            contentType: "application/json",
            dataType: 'jsonp',
            data: {
                'screen_name':'wentz__',
                'count':1
            },
            success: function(data) {
                // result returned
                var tweet = data[0].text;

                // process links and reply
                tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
                    return ''+url+'';
                }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
                    return  reply.charAt(0)+''+reply.substring(1)+'';
                });

                // output the result
                $(".latest-tweet").html(tweet);
            },
            error: function(e) {
               console.log(e.message);
            }
        });

    });
    
});
