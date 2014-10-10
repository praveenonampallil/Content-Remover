
$(function() {
	console.log("loaded");
	var insertElement="";
	chrome.storage.local.get('urls', function (result) {
    	if(result.urls)
    	{
    		result.urls.forEach(function(entry){  
	        	insertElement+="<tr><td><strong>"+entry.url+"</strong></td><td>"+entry.id+"</td><td><input class='button btn btn-info' type='button'  value='Remove' id='"+entry.url+" "+entry.id+"' /></td> </tr>";
			});
    	}
        $("tbody").append(insertElement);
        $('.button').click(function() {
            var id = this.id;  
            var res = id.split(" ");
            
                if(result.urls)
                {
                    result.urls.forEach(function(entry){        
                        if (res[0] == entry.url && res[1] == entry.id)
                        {
                            var urls = result.urls;
                            console.log(urls.indexOf(entry));
                            urls.splice(1,urls.indexOf(entry));
                            console.log(urls);

                           chrome.storage.local.set({urls: urls}, function () {});
                           location.reload(true);
                        }
                    });
                }
        
           

        });
    });	
	 
});







