
function loadBlog(e){
	if(document.readyState !="complete")
	return ;
	var blog_article = document.getElementById("blog-post");

	blog_article.addEventListener("click",function(e){
                var element = document.getElementById("slider");
                
                element.parentNode.removeChild(element);
                var text=document.getElementById("blog-text");
                jQuery.get('/blog/test.txt', function(data) {
                    //process text file line by line
                    text.innerHTML = "";
                    var node =document.createTextNode(data.replace('\n',"<br>"));
                    text.appendChild(node);
}); 
				});
}
document.addEventListener("readystatechange",loadBlog);

/*$(document).ready(function(){
    console.log("tttt");
   $("#blog-title").click(function(){
       console.log("test");
    //  obj=$.ajax({url:"/blog/test.txt",async:false});
//       $("#blog-post").html(obj.responseText);
   });
});
*/