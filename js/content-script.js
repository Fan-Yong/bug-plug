current_con="";
function getDSPContent(){
	try {
		prehtml=document.getElementById("info").innerHTML;
		current_con=prehtml;
	}catch{
		
		parent.location.reload()
	}		
	
}

function  selfBackMsg(){
	  getDSPContent();	  
		chrome.runtime.sendMessage({curcon:current_con}, function(response) {	    
	  });	
	
}	
selfBackMsg();

 
