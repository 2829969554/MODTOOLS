function shadx(a){
getbyid('y101').value=md5(a).toUpperCase();
getbyid('y102').value=sha1(a).toUpperCase();
getbyid('y103').value=sha256(a).toUpperCase();

getbyid('y111').value=sha224(a);
getbyid('y111').value=getbyid('y111').value.toUpperCase();

getbyid('y112').value=sha384(a);
getbyid('y112').value=getbyid('y112').value.toUpperCase();

getbyid('y113').value=sha512(a);
getbyid('y113').value=getbyid('y113').value.toUpperCase();

getbyid('y114').value=ripemd160(a);
getbyid('y114').value=getbyid('y114').value.toUpperCase();
}
function shaxx(a){
getbyid('y101').value=md5(a);
getbyid('y102').value=sha1(a);
getbyid('y103').value=sha256(a);
getbyid('y111').value=sha224(a);
getbyid('y112').value=sha384(a);
getbyid('y113').value=sha512(a);
getbyid('y114').value=ripemd160(a);
}
function shakaishi(a){
	var aaa=document.getElementsByTagName('input');
	if(romget('shadxk')=='dx'){
		shadx(a);
	}else{
		shaxx(a);
	}

}




//HMAC
function hmacshadx(str,key){
getbyid('y101').value=hmacmd5(str,key);
getbyid('y101').value=getbyid('y101').value.toUpperCase();

getbyid('y102').value=hmacsha1(str,key);
getbyid('y102').value=getbyid('y102').value.toUpperCase();

getbyid('y103').value=hmacsha256(str,key);
getbyid('y103').value=getbyid('y103').value.toUpperCase();

getbyid('y111').value=hmacsha224(str,key);
getbyid('y111').value=getbyid('y111').value.toUpperCase();

getbyid('y112').value=hmacsha384(str,key);
getbyid('y112').value=getbyid('y112').value.toUpperCase();

getbyid('y113').value=hmacsha512(str,key);
getbyid('y113').value=getbyid('y113').value.toUpperCase();
}
function hmacshaxx(str,key){
getbyid('y101').value=hmacmd5(str,key);
getbyid('y102').value=hmacsha1(str,key);
getbyid('y103').value=hmacsha256(str,key);
getbyid('y111').value=hmacsha224(str,key);
getbyid('y112').value=hmacsha384(str,key);
getbyid('y113').value=hmacsha512(str,key);
}
function hmacshakaishi(str,key){
	var aaa=document.getElementsByTagName('input');
	if(romget('shadxk')=='dx'){
		hmacshadx(str,key);
	}else{
		hmacshaxx(str,key);
	}

}



function shatobig(){
getbyid('y101').value=getbyid('y101').value.toUpperCase();
getbyid('y102').value=getbyid('y102').value.toUpperCase();
getbyid('y103').value=getbyid('y103').value.toUpperCase();
getbyid('y111').value=getbyid('y111').value.toUpperCase();
getbyid('y112').value=getbyid('y112').value.toUpperCase();
getbyid('y113').value=getbyid('y113').value.toUpperCase();
}
function shatosmall(){
getbyid('y101').value=getbyid('y101').value.toLowerCase();
getbyid('y102').value=getbyid('y102').value.toLowerCase();
getbyid('y103').value=getbyid('y103').value.toLowerCase();
getbyid('y111').value=getbyid('y111').value.toLowerCase();
getbyid('y112').value=getbyid('y112').value.toLowerCase();
getbyid('y113').value=getbyid('y113').value.toLowerCase();
}

//本工具可实现针对AES、DES、RC4、Rabbit、TripleDes等多种算法的密钥加密。
function kaishijiami(str,type,key){
	if(str=='' || type=='' || key==''){
		return '';
	}
switch(type){
	case "1":
		return aese(str,key);
	break;
	case "2":
	return dese(str,key);
	
	break;
	case "3":
		return rc4e(str,key);
	break;
	case "4":
		return rabbite(str,key);
	
	break;
	case "5":
		return tdese(str,key);
	break;
}
}

function kaishijiemi(str,type,key){
	if(str=='' || type=='' || key==''){
		return '';
	}
switch(type){
	case "1":
		return aesd(str,key);
	break;
	case "2":
	return desd(str,key);
	
	break;
	case "3":
		return rc4d(str,key);
	break;
	case "4":
		return rabbitd(str,key);
	
	break;
	case "5":
		return tdesd(str,key);
	break;
}
}

function kaishijinzhi(a,dq){
	if(romget('aaajsdx')=='dx'){
	for (var i =2; i <=36; i++) {

		getbyid('shou'+i).value=szjzzh(a,dq,i).toUpperCase();

	}
	}else{
	for (var i =2; i <=36; i++) {
		getbyid('shou'+i).value=szjzzh(a,dq,i);

	}		
	}


}



//短视频解析
function dxpjiexi(url){
	if(!navigator.onLine){
		alert('网络已断开，请稍后尝试！');
		return;
	}
	if(url==''){
		appalert('请输入视频链接地址~');
		return;
	}
	var a = httppost('http://api.srvv.cn/jiexi.html',{'url':url});
	a=strtorow(a);
	if(a['code']==200 || a['code']=='200'){
		
		
		//alert(getbyid('y107').src);
		//getbyid('hrefaa').src=a['data']['video'];
		getbyid('y155').value=a['data']['video'];
		//getbyid('y107a').src=getbyid('y155').value;
		getbyid('hrefaa').innerHTML=a['data']['author']+'点击这里下载.';
		getbyid('hrefaa').style.display='';
		//alert(getbyid('y107a').src);
		var video = document.getElementById("myvideo");  
		    video.style.display='';
            video.src = getbyid('y155').value;//更改视频路径
			video.poster=a['data']['cover'];
            video.load();   //加载视频
            video.play();  //视频播放
            appalert('解析成功');
	}else{
		alert('错误，请联系开发者QQ：2829969554。');
	}
	//getbyid('y106').value=a['code'];
	//var b= a.match(/免费去水印接口：(\S*)\<\/p\>/)[1];
	//alert(b);
}
//***************
/*
HTTP请求调试工具
*/
function kaishipush(){
	
var url = getbyid('qingqiuurl');
var fangshi = getbyid('qingqiufangshi');
var leixing = getbyid('qingqiuleixing');
var ua = getbyid('qingqiuua');
//var ua2 = getbyid('qingqiuua2');
//if(ua.value==''){
	//ua.value=ua2.value;
//}
	if(!navigator.onLine){
		alert('网络已断开，请稍后尝试！');
		return;
	}
	if(url.value==''){
		appalert('请输入请求目标地址URL~');
		return;
	}
var host = getbyid('qingqiuhost');
var referer = getbyid('qingqiureferer');
var head = getbyid('qingqiuhead');
var cookies = getbyid('qingqiucookies');
var text = getbyid('qingqiutext');

var outhead=getbyid('xiangyinhead');
var outtext=getbyid('xiangyingtext');

/*
url.value='http://192.168.1.100/login.html';
host.value='127.0.0.1';
referer.value='http://127.0.0.1';
head.value='abc:123\nbcd:456';
cookies.value='tc=123456;tc=123456;';*/
//text.value='checkid=admin&checkid=admin';
//text.value='{"checkid":"admin"}';

//outhead.value='ohead';
//outtext.value='otext';
console.log(leixing.value,fangshi.value);
//eval('(' + text.value + ')');
var xtjnr=text.value;
var xtjnrlx=leixing.value;
if(xtjnrlx=='application/json2'){
	if(isJSON(text.value)){
		xtjnr=eval('(' + text.value + ')');
		xtjnrlx='application/x-www-form-urlencoded';
	}else{
		alert('json转表单失败：json不规范！');
		return;
	}
	

}

$.ajax({
  type: fangshi.value,
  url: url.value,
  contentType:xtjnrlx,
  data: xtjnr,
  success: function(data,status){
  	//outtext.value=JSON.stringify(data);
  	console.log('yes',typeof(data),data,status);

  	switch (typeof(data)){
  		case 'object':
  			outtext.value=JSON.stringify(data);
  		break;
  		case 'string':
  			outtext.value=data;
  		break;
  	}

  },
  error:function(a,b){
  	console.log('错误');
  	//outhead.value='错误:'+b;
  },
  processData:true,
  complete:function(xml,status){
  	console.log('com',xml,status,xml.getAllResponseHeaders());
	if(plus.navigator.getCookie(url.value)!=null){
		outhead.value=xml.getAllResponseHeaders()+"Set-Cookie:"+plus.navigator.getCookie(url.value)+"\n";
		
	}else{
		outhead.value=xml.getAllResponseHeaders();
	}
  	getbyid("zhuangtaima").innerHTML=xml.status+"("+xml.statusText+")";
  	getbyid("zhuangtai").innerHTML=status;
  	if(xml.responseXML){
  		getbyid("zhuangtaileixing").innerHTML='XML对象';
  	}

  	if(xml.responseJSON){
  		getbyid("zhuangtaileixing").innerHTML='JSON对象';
  	}else{
  		getbyid("zhuangtaileixing").innerHTML='Text';
  	}
  	getbyid("yanshifu").style.display='none';
  },
  beforeSend:function(xhr){
  	//xhr.withCredential=true;
	//plus.android.setRequestHeader('referer',referer.value);
	
	plus.navigator.setCookie(url.value,cookies.value);
  	getbyid("yanshifu").style.display='';
  	if(head.value !='' ){
	  	let row =head.value.split("\n");
	  	for (var i = 0; i < row.length; i++) {
	  		let str=row[i].split(":");

	  		xhr.setRequestHeader(str[0], str[1]);
	  	}
  	}

  }
});

}
function kaishiqingchu(){
var url = getbyid('qingqiuurl');
plus.navigator.removeAllCookie();
var fangshi = getbyid('qingqiufangshi');
var leixing = getbyid('qingqiuleixing');
var ua = getbyid('qingqiuua');
var host = getbyid('qingqiuhost');
var referer = getbyid('qingqiureferer');
var head = getbyid('qingqiuhead');
var cookies = getbyid('qingqiucookies');
var text = getbyid('qingqiutext');

var outhead=getbyid('xiangyinhead');
var outtext=getbyid('xiangyingtext');

url.value='';
host.value='';
referer.value='';
head.value='';
cookies.value='';
text.value='';
romset('dqurl','');
romset('dqxyt','');
romset('dqcookie','');
romset('dqtext','');
outhead.value='';
outtext.value='';

}

//保存视频到本地
function appdownload(imgUrl){
	if(imgUrl !=''){
                //imgUrl 图片网络路径
				var timestamp = (new Date()).valueOf();
				var downLoader = plus.downloader.createDownload(imgUrl, {
				    method: 'GET',
				    filename: '_downloads/image/' + timestamp + '.mp4'
				}, function(download, status) {
					if(status==200){
						var fileName = download.filename;
						/**
						 * 保存至本地相册
						 */
						plus.gallery.save(fileName, function() {
						   alert("下载成功，已保存~");	
						},function(){
							 alert("保存失败，请重试");	
						});
					}else{
						 alert("下载失败，请重试");	
					}
				});
				 downLoader.start();			
		
	}else{
		appalert("下载地址为空,请先解析~");	
	}

	
}