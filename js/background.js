
pachong=false 
if(confirm("确定开始爬虫吗？")){	
	pachong=true;
}

if(pachong){
//初始化工作 
	
var keyword="中国古代文学考研";
var hashs=new Array('41de8be1fcba5d6d34dcf67a7ab81180','07b2ac52bd024e43f7b8abac2b88f44e','75a52ebe9b5ae4dd37de7e4d287083b9','40cbd5b23e054cabdfe56286977ffca9','e1e0128cf36a1a378fb4c0a759c5b160','3f9c0276beb4ab6f6d07cec42f1d9c51','5ae6e3782f57e94f70b7733cc3c36ce2','fc87574785501326697d6b43fb9b7bfe','87366ca479a5b0aecd0a86cd98ff6bb5','72a948b6892f9e7c7be7d9647931ed33','c6dc10a229600a85f7fbe87e875ccd53','814089d0bc7c6f2cd0b918836e4c7bef','dff01f570cd70ad606b3cfbb3d32ddd6','acc562671f49c5228920663585468a4b','4b9ff78bcfc868e65f62590652ee748f','12dd9363127cc2c997a247a99fe90246','26227118a414d8b01723b9e45591f937','af38192abf1e38e6072db18882c84e99','77f717db0db8a0522462e2fe367fabee','ba766eb27778a443068091cdbf80c686','598c79957b76c0adb24cc1ac98253314','faf0f4726cd2e917f58b9a0c3f15c896','c8aa876916ba78156715c8d16a8071a3','1e5d036b1a62da59aaea220d34c7bc93','7a97cd5445f21cadad28b2f35a9d8587','77930eb50b8b0e38086f7ff59bdc3ca5','881cc606283fc4345137630c351f73b6','0a2bf4811e65cfa85d7904be9f708be3','df15064fb19a2a0d6a7334329230948c','11afa41d2eed82a97496c6d851bb1a1e','eee4bafffeec8d3397025c376274bd41','6a8ccb195e6e105c2c91ac2871beec78','17849c1a427b9334a3c77ae49275da6b','b393e527af00d3bd0bc293cf2d63f6ba','78c1d24ae6d7f516cb0d7aae9693dd08','cf3876d91939299cc71cb2ec778b2e1f','4028e96efa21bc60a25e06736d2405c2','3209af603e04a772a0e4b062f18147b6','c308edb9d73be7d073bb0b49a8c77ce6');
var hashi=0;
	
////开始执行
openNewPage(hashi);
	
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	
	//console.log(	request.curcon)	
	$.post("http://www.datun.com.cn/dashengpan/setmsg.php",{id:getUrl(hashs[hashi],keyword),msg:request.curcon},function(result){
		 if(result=='1'){
		 	  
		 		
		 	  console.log(	request.curcon);
		 	  console.log(	"---------------------------------------------");		 	  
      	hashi++;    
      	if(hashi>=hashs.length)  {
      		alert("共完成"+hashi+"条记录");
      		return;
      	}	   	
      	chrome.tabs.remove(sender.tab.id);
				openNewPage(hashi);
      }else{
        alert(hashi+"存储到db错误,第"+(hashi+1)+"条:"+getUrl(hashs[hashi],keyword));
      }
		
		
	})	
	
	
})	
	
//拼接地址
function getUrl(hash_v,kw){
	return "https://www.dashengpan.com/detail/"+hash_v+"&keyword="+kw;
}	
	
	
//打开新的chrome页面
function openNewPage(i){
	url=getUrl(hashs[i],keyword);
	console.log("正在访问:"+url);
	console.log(	"*******************************************");
	setTimeout(function () {
		chrome.tabs.create({url:url,active:true}, function (tab){});
		
	}, 200);  
}



}//if pachong