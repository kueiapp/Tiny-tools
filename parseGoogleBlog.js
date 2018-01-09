var allResults = '<hr>\
     <div>\
         <div class="lr">\
             <div class="rl" style="text-align:left">\
                 <a id="empty-result" href="#" class="btn">Close results</a>\
             </div>\
         </div>\
     </div>';
for (var i=0; i < contentArray.length; i++)
{
// console.log(contentArray[i].categories[0]);
if (contentArray[i].categories[0]== "product_app")
{
 var _content = contentArray[i].content.replace(/\\\"/g,'"') ;
 var _tag = _content.match(/<img .*? src=\"(.*?)\">/);
 var _imgsrc = $(_tag[0]).attr("src") ;
 var _time = new Date(contentArray[i].publishedDate);

 var block = '\
 <div class="col-md-4 col-sm-6 portfolio-item " style="height:400px; background-color:white; border:1px solid #ddd; margin: 0; padding:0;">\
     <div style="overflow-x:hidden">\
         <center>\
             <img src="'+_imgsrc+'" style="max-height:300px"/>\
         </center>\
     </div>\
     <div class="portfolio-caption" style="overflow-y:auto">\
         <h3><a href="#portfolio-modal" tabindex="'+ contentArray[i].id +'" data-toggle="modal" class="portfolio-link">'+contentArray[i].title+'</a></h3>\
         <h6 style="color:#bbb">published @'+_time.getFullYear()+'/'+(_time.getMonth()+1)+'/'+_time.getDate()+'</h6>\
     </div>\
 </div>';
 allResults += block;
}
 }