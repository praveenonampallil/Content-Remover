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
			    var urls = result.urls;
			    urls.push({url: url, id: element});
			    chrome.storage.local.set({urls: urls}, function () {    
			        var opt = {
                    type: "basic",
                    title: "Added",
                    message: "Element was added",
                    iconUrl: "icon.png"
                	}
            		chrome.notifications.create('added', opt, function () { });
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