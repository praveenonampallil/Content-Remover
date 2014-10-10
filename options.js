
$(function() {
	$('.button').click(function() {
				console.log("hai");
    			var id = this.id;  // or e.target.id;
    			console.log(id);
    });

	console.log("loaded");
	var insertElement="<br>";
	chrome.storage.local.get('urls', function (result) {
    	if(result.urls)
    	{
    		result.urls.forEach(function(entry){  
	        	insertElement+=entry.url+"&nbsp&nbsp&nbsp&nbsp&nbsp"+entry.id+"&nbsp&nbsp&nbsp&nbsp&nbsp<input class='button' type='button'  value='remove' id='"+entry.url+" "+entry.id+"' /> <br>";
			});
    	}
      $("div").append(insertElement);
    });	
	 
});







