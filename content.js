console.log("Loaded");
	// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
 //    /* If the received message has the expected format... */
	//     console.log(msg.text);
	//     console.log(msg.element);
	//     if (msg.text && (msg.text == "report_back")) {
	//         /* Call the specified callback, passing 
	//            the web-pages DOM content as argument */
	//            console.log(msg.element);
	//     sendResponse(document.getElementById(msg.element).innerHTML);
	//     $("#"+msg.element).remove();
	//     }
	// });

	var siteUrl=document.URL;
    chrome.storage.local.get('urls', function (result) {
    	if(result.urls)
    	{
    		result.urls.forEach(function(entry){    	
        	if (siteUrl == entry.url)
            	{
            		$("#"+entry.id).remove();
            	}
			});
    	}
        
    });

 //    $(document).on('click', 'div',  function () {
 //    	var divs= this;
    	
	// });


    