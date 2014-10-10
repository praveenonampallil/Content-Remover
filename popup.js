$(function (){
	var globalTab;
	chrome.tabs.getSelected(null,function(tab){
	globalTab=tab;
	var url=tab.url;
	if(url)
	{
		$('#url').val(url);
	}
	});


	$('#addException').click(function () {
		
		url=$('#url').val();
		var element=$('#element').val();
		if(url&&element)
		{
	      	chrome.storage.local.get({urls: []}, function (result) {
			    // the input argument is ALWAYS an object containing the queried keys
			    // so we select the key we need
			    var urls = result.urls;
			    urls.push({url: url, id: element});
			    // set the new array value to the same key
			    chrome.storage.local.set({urls: urls}, function () {
			        // you can use strings instead of objects
			        // if you don't  want to define default values
			        chrome.storage.local.get('urls', function (result) {
			            console.log(result.urls);
			        });
			    });
			});
  		}
  		else
  		{
  			var opt = {
                    type: "basic",
                    title: "No URL or Element",
                    message: "There were no url or element",
                    iconUrl: "icon.png"
                }
            chrome.notifications.create('validationError', opt, function () { });
  		}

	});

	function doStuffWithDOM(element) {
    console.log("I received the following DOM content:\n" + element);
	}

});