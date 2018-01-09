// Parse RSS
// by Kuei App
contentArray = [];
$.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=?&q=' + encodeURIComponent('http://kueiapp.blogspot.tw//feeds/posts/default'),
    dataType: 'json',
    success: function(data) {
        var obj = data.responseData.feed;
        var objs = obj['entries'];
        for (var i=0; i < objs.length; i++){
            var block = '\
            <div class="col-md-4 col-sm-6 portfolio-item" style="height:300px">\
                <a href="#" class="portfolio-link" data-toggle="modal">\
                </a>\
                <div class="portfolio-caption">\
                    <h4>'+objs[i].title+'</h4>\
                    <p class="text-muted">'+ objs[i].contentSnippet.substring(0,100) +'.....</p>\
                </div>\
            </div>';
            // console.log(JSON.stringify(objs[i]));                        
            contentArray[i] = {
                id: i,
                title: objs[i].title, 
                content:objs[i].content, 
                categories: objs[i].categories,
                contentSnippet: objs[i].contentSnippet,
                publishedDate: objs[i].publishedDate
            };
             
            getLatestArticles(); 
        }
    }
});