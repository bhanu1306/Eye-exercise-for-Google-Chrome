'use strict';

var tt=0;
var myTab = null;
var myRef = null;
var dd = null;
function myChecker()
{
	var nd = new Date();
	var ntt = nd.getTime();
	if((ntt-tt)>=3600000) //check.. if 1 hour has passed then alert with the badge text
	{
		chrome.browserAction.setBadgeText({text: "Eye!"});
		clearInterval(myRef);
	}
}


dd = new Date();
tt = dd.getTime();
myRef = window.setInterval(myChecker, 5000); //check after every 60 seconds

chrome.idle.onStateChanged.addListener(function(newState){
	if(newState=="active")
	{
		if(myRef==null){
		var d = new Date();
		tt = d.getTime();
		myRef = window.setInterval(myChecker, 5000); //check after every 60 seconds
		}
	}
	else
	{
	    if(myTab!=null)
		{  
			chrome.tabs.get(myTab, function(tttt){
				chrome.windows.get(tttt.windowId, function(win){
					if(win.focused==false||tttt.active==false)
					{
						chrome.tabs.remove(myTab);
					    myTab = null;
					}
				});
			});
		}
		if(myRef!=null)			
		window.clearInterval(ref); //clear interval in idle or locked state 
	}
});


chrome.browserAction.onClicked.addListener(function(){
	chrome.browserAction.setBadgeText({text: ""});
	chrome.tabs.create({url: 'MainTab.html'}, function(tabb){
		myTab = tabb.id;
	});
});