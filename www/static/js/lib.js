/*
时间操作类
*/
//获取时间戳13，10，默认13
function timestamp(time){
	if(time){
		return new Date(time).getTime();
	}
	return new Date().getTime();
}

function timestamp13(time){
	if(time){
		return new Date(time).getTime();
	}
	return new Date().getTime();
}
function timestamp10(time){
	if(time){
return Date.parse(new Date(time))/1000;
	}
	return Date.parse(new Date())/1000;
}
function times13(time){
	if(time){return new Date(time).getTime();}
	return new Date().getTime();
}
function times10(time){
	if(time){return Date.parse(new Date(time))/1000;}
	return Date.parse(new Date())/1000;
}

//获取年
function timeyear(time){
	if(time){return new Date(time).getFullYear();}
	return new Date().getFullYear();
}
function timey(time){
	if(time){return new Date(time).getFullYear();}
	return new Date().getFullYear();
}

//获取月份
function timemonth(time){
	if(time){return new Date(time).getMonth()+1;}
	return new Date().getMonth()+1;
}
function timem(time){
	if(time){return new Date(time).getMonth()+1;}
	return new Date().getMonth()+1;
}

//获取日
function timedate(time){
	if(time){return new Date(time).getDate();}
	return new Date().getDate();
}
function timed(time){
	if(time){return new Date(time).getDate();}
	return new Date().getDate();
}

//获取时
function timehours(time){
	if(time){return new Date(time).getHours();}
	return new Date().getHours();
}
function timeh(time){
	if(time){return new Date(time).getHours();}
	return new Date().getHours();
}

//获取分
function timetminutes(time){
	if(time){return new Date(time).gettMinutes();}
	return new Date().gettMinutes();
}
function timem(time){
	if(time){return new Date(time).gettMinutes();}
	return new Date().gettMinutes();
}

//获取秒
function timeseconds(time){
	if(time){return new Date(time).getSeconds();}
	return new Date().getSeconds();
}
function times(time){
	if(time){return new Date(time).getSeconds();}
	return new Date().getSeconds();
}

//获取毫秒
function timemilliseconds(time){
	if(time){return new Date(time).getMilliseconds()();}
	return new Date().getMilliseconds()();
}
function timems(time){
	if(time){return new Date(time).getMilliseconds()();}
	return new Date().getMilliseconds()();
}

//当前时间转gmt
function timeGMT(time){
	if(time){return new Date(time).toGMTString();}
	return new Date().toGMTString();
}
function timegmt(time){
	if(time){return new Date(time).toGMTString();}
	return new Date().toGMTString();
}


//时间到json
function timeJSON(time){
	if (time){return new Date(time).toJSON();}
	return new Date().toJSON();
}
function timejson(time){
	if (time){return new Date(time).toJSON();}
	return new Date().toJSON();
}


//默认获取完整时间，1当前日期，2当前时间
function timeget(time){
	if (time){return new Date(time).toLocaleString();}
	return new Date().toLocaleString();
}
//1当前日期
function timeget1(time){
	if (time){return new Date(time).toLocaleDateString();}
	return new Date().toLocaleDateString();
}
//2当前时间
function timeget2(time){
	if (time){return new Date(time).toLocaleTimeString();}
	return new Date().toLocaleTimeString();
}






/*
//临时储存sessionStorage，定义为ram
*/
//写
function ramset(name,str){
sessionStorage.setItem(name,str);
}
//读
function ramget(name){
return sessionStorage.getItem(name);
}
//删
function ramdel(name){
sessionStorage.removeItem(name);
}
function ramremove(name){
sessionStorage.removeItem(name);
}
//全部清空
function ramclear(){
sessionStorage.clear();
}

/*
//永久储存localStorage,定义为rom
*/
//写
function romset(name,str){
localStorage.setItem(name,str);
}
//读
function romget(name){
return localStorage.getItem(name);
}
//删
function romdel(name){
localStorage.removeItem(name);
}
function romremove(name){
localStorage.removeItem(name);
}
//全部清空
function romclear(){
localStorage.clear();
}






/*
cookie操作类
*/

//获取cookie的值	
function cookieget(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
}
/*
 功能：保存cookies函数 
 参数：name，cookie名字；value，值
 */
function cookieset(name,str){
   var Days = 30*12;  //cookie 将被保存一年
   var exp = new Date(); //获得当前时间
   exp.setTime(exp.getTime() + Days*24*60*60*1000); //换成毫秒
   document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

 /*
 功能：删除cookies函数 
 参数：name，cookie名字
 */
 function cookiedel(name){
   var exp = new Date(); //当前时间
   exp.setTime(exp.getTime() - 1);
   var cval=getCookie(name);
   if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
 }
 function cookieremove(name){
   var exp = new Date(); //当前时间
   exp.setTime(exp.getTime() - 1);
   var cval=getCookie(name);
   if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
 }





/*

URL操作类

*/

/*
* urlupdate 修改地址栏URL参数 不跳转
*   @param name 参数名
*   @param value 参数值
* */
function urlupdate(name, value) {
    let url = window.location.href;
    let reg = eval('/([\?|&]'+name+'=)[^&]*/gi');
    let url2 = '';
    value = value.toString().replace(/(^\s*)|(\s*$)/g,"");  //移除首尾空格
    if(!value){
        url2 = url.replace(reg , '');  //正则替换
       
    }else{
        if(url.match(reg)){
            url2 = url.replace(reg , '$1' + value);  //正则替换
        }else{
            url2 = url + (url.indexOf('?') > -1 ? '&' : '?') + name + '=' +value;  //没有参数添加参数
        }
    }
 
    history.replaceState(null,null, url2);  //替换地址栏
}

	//URL取get参数
	function urlget(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return unescape(r[2]); return null;
	}
	//跳转指定页面
	function urljump(url){
		window.location.href = url;
	}
	//获取域名
	function urlhost(){
	return window.location.host;
	}
	//获取完整url
	function geturl(){
	return window.location.href;
	}
	//取当前路径
	function urlpath(){
		return  window.location.pathname;
	}
	//获取url端口
	function urlport(){
		return window.location.port;
	}
	//获取url协议类型
	function urltype(){
		return window.location.protocol;
	}


/*
模板操作类
*/
//str to json 字符串转row对象
function strtorow($row){
	if(typeof($row)=='string'){
			return eval('(' + $row + ')');
	}
}
	//document.getElementById的缩写
	function getbyid($a){
		return document.getElementById($a);
	}
	//置参数，id，参数名，参数值
	function setbyidhtml($id,$name,$str){
		getbyid($id).innerHTML=getbyid($id).innerHTML.replace('{' + $name + '}',$str);
	}
	//置数组，id，数组：｛参数名:参数值｝，{'name':'Mr WANG',"age":8}
	function setbyidhtmlrow($id,$row){
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
		Object.keys($row).forEach(function($a){
			setbyidhtml($id,$a,$row[$a])
		})
	}
	//置数组列表，id，数组，：[｛参数名:参数值｝,｛参数名:参数值｝]，[{'name':'Mr WANG',"age":8},{'name':'Mr Amay',"age":11}]
	function setbyidhtmlrows($id,$row){
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
		var $tmp =getbyid($id).innerHTML;
		var tmp2=$tmp;
		var html='';
		for (var $i = 0; $i < $row.length ; $i++) {
			Object.keys($row[$i]).forEach(function($a,$tmp){
				tmp2=tmp2.replace('{' + $a + '}',$row[$i][$a]);
			});
			html+=tmp2;
			tmp2=$tmp;
		}
		//console.log(html);
		getbyid($id).innerHTML=html;		
	}





	/*
GET,POST操作类
	*/
	//get：地址，json或者数组
	function httpget(URL,PARAMS){
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
		// 初始化XMLHttpRequest对象
		var xmlrequest = new XMLHttpRequest();
		var text='';
		for (var x in PARAMS) {
			text+=x + '=' + PARAMS[x]+'&';
		}
		// 设置以POST方式发送请求，false是同步,true为异步
		xmlrequest.open("GET", URL+'?'+text.substring(text,text.length-1), false); 
		// 设置POST请求的请求头
		xmlrequest.setRequestHeader("Content-Type"
			, "application/x-www-form-urlencoded");
		xmlrequest.send('a=1&b=1');
		//异步消息处理
		/*xmlrequest.onreadystatechange = function(){
	        if (this.readyState == 4)
        {
            if(this.status == 200)
            {
            	return this.responseText;

            }
        }

		};*/
		return xmlrequest.responseText;
	}
	//post，地址，json或者数组
	function httppost(URL,PARAMS){
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
		// 初始化XMLHttpRequest对象
		var xmlrequest = new XMLHttpRequest();
		var text='';
		
		for (var x in PARAMS) {
			text+=x + '=' + PARAMS[x]+'&';
		}
		
		// 设置以POST方式发送请求，false是同步,true为异步
		xmlrequest.open("POST", URL, false); 
		// 设置POST请求的请求头
		xmlrequest.setRequestHeader("Content-Type"
			, "application/x-www-form-urlencoded");
		xmlrequest.send(text.substring(text,text.length-1));
		//异步消息处理
		/*xmlrequest.onreadystatechange = function(){
	        if (this.readyState == 4)
        {
            if(this.status == 200)
            {
            	return this.responseText;

            }
        }

		};*/
		return xmlrequest.responseText;
	}
	//模拟表单提交post
	function formpost(URL, PARAMS) {
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
	  var temp = document.createElement("form");
	  temp.action = URL;
	  temp.method = "POST";
	  temp.style.display = "none";
	  for (var x in PARAMS) {
	    var opt = document.createElement("textarea");
	    opt.name = x;
	    opt.value = PARAMS[x];
	    temp.appendChild(opt);
	  }
	  document.body.appendChild(temp);
	  temp.submit();
	  return temp;
	}
	//模拟表单提交GET
	function formget(URL, PARAMS) {
		if(typeof($row)=='string'){
			$row=eval('(' + $row + ')');
		}
	  var temp = document.createElement("form");
	  temp.action = URL;
	  temp.method = "GET";
	  temp.style.display = "none";
	  for (var x in PARAMS) {
	    var opt = document.createElement("textarea");
	    opt.name = x;
	    opt.value = PARAMS[x];
	    // alert(opt.name)
	    temp.appendChild(opt);
	  }
	  document.body.appendChild(temp);
	  temp.submit();
	  return temp;
	}


/*

H5 APP事件操作类

*/
//立即退出
function appexit(){
	plus.runtime.quit();
}
//H5 首页双击退出
function exitapp(){
document.addEventListener('plusready', function () {
          var first = null;
          var webview = plus.webview.currentWebview();
          plus.key.addEventListener('backbutton', function () {
              webview.canBack(function (e) {
                  if (e.canBack) {
                    webview.back(); //这里不建议修改自己跳转的路径  
                  } else {
                    //首次按键，提示‘再按一次退出应用’  
                    if (!first) {
                      first = new Date().getTime(); //获取第一次点击的时间戳  
                      plus.nativeUI.toast("再按一次退出应用", {
                        duration: 'short'
                      }); //通过H5+ API 调用Android 上的toast 提示框  
                      setTimeout(function () {
                        first = null;
                      }, 1000);
                    } else {
                        // 获取第二次点击的时间戳, 两次之差 小于 1000ms 说明1s点击了两次, 
                      if (new Date().getTime() - first < 1000) {  
                        plus.runtime.quit(); //退出应用  
              }
            }
          }
        })
      });
    });
}

//APP返回上一页
function appgoback(){
// android点击手机物理返回键退出app bug解决
document.addEventListener("plusready", function() {
	plus.key.addEventListener('backbutton', function() {
		window.history.go(-1);
	}, false);
}) 
}

//app提示框
function appalert(a){
      plus.nativeUI.toast(a, {
                        duration: 'short'
                      }); //通过H5+ API 调用Android 上的toast 提示框  
}

/*
环境操作类
*/
//复制到剪辑版
function copyhandle(content,no){
  let copy = (e)=>{
      e.preventDefault();
      e.clipboardData.setData('text/plain',content);
      if(no){
		      if(ismobile()){
			appalert("复制成功");
		  	}else{alert('复制成功');}
		      document.removeEventListener('copy',copy);
		  }
      }

  document.addEventListener('copy',copy);
  document.execCommand("Copy");
}
function strcopy(content,no){
  let copy = (e)=>{
      e.preventDefault();
      e.clipboardData.setData('text/plain',content);
      if(no){
		      if(ismobile()){
			appalert("复制成功");
		  	}else{alert('复制成功');}
		      document.removeEventListener('copy',copy);
		  }
      }

  document.addEventListener('copy',copy);
  document.execCommand("Copy");
}
//是否手机
function ismobile(){
	return /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent));

}
//刷新页面
function reload(){
	window.location.reload();
}
//函数是否存在
function isFUN(funcName) {
  try {
    if (typeof(eval(funcName)) == "function") {
      return true;
    }
  } catch(e) {}
 return false;
}

function isfun(funcName) {
  try {
    if (typeof(eval(funcName)) == "function") {
      return true;
    }
  } catch(e) {}
  return false;
}

/*
哈希编码类
*/
//获取md5
function md5(a){
	return md5get(a);
}
//获取sha1
/*
Fun sha1();
sha1.js
*/

//获取sha256
function sha256(a){
	return SHA256(a);
}
//获取sha224
function sha224(a){
return CryptoJS.SHA224(a);
}
//获取sha384
function sha384(a){
return CryptoJS.SHA384(a);
}
//获取sha512
function sha512(a){
return CryptoJS.SHA512(a);
}
//base64加密
function base64e(a){
 return Base.encode(a);
}
//base64解密
function base64d(a){
 return Base.decode(a);
}
//base64加密
function b64e(a){
 return Base.encode(a);
}
//base64解密
function b64d(a){
 return Base.decode(a);
}

//unicode编码
function unicode(a){
	return escape(a).replace(/%u/g, '\\u');
}
function unie(a){
	return escape(a).replace(/%u/g, '\\u');
}

//unicode解码
function nounicode(a){
	return unescape(a.replace(/\\u/g, '%u'));
}
function unid(a){
	return unescape(a.replace(/\\u/g, '%u'));
}


// hex转str互转字符串,16进制ASCII
var hextostr = function (hex) {
    var arr = hex.split("")
    var out = ""
    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
        var charValue = String.fromCharCode(tmp);
        out += charValue
    }
    return out
};
var hex2str = function (hex) {
    var arr = hex.split("")
    var out = ""
    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
        var charValue = String.fromCharCode(tmp);
        out += charValue
    }
    return out
};
// str字符串转hex
var strtohex = function (str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += str.charCodeAt(i).toString(16);
    }
    val += "0a"
    return val
}
var str2hex = function (str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += str.charCodeAt(i).toString(16);
    }
    val += "0a"
    return val
}

//url hex 加密工具，连接加密后任然可以打开
    function urlhex(a){
        var str2='';
        str = a;
        str3 = str.substring(0,7);
        if(str3 == 'http://'){
            str2 = 'http://';
            str = str.substring(7,str.length);
        }
        if(str3 == 'https:/'){
        	str2 = 'https://';
        	str = str.substring(8,str.length);
        }
        for(i=0;i<str.length;i++){
            if(str.charCodeAt(i) == '47') str2 += '/';
            else if(str.charCodeAt(i) == '63') str2 += '?';
            else if(str.charCodeAt(i) == '38') str2 += '&';		
            else if(str.charCodeAt(i) == '61') str2 += '='; 
            else if(str.charCodeAt(i) == '58') str2 += ':'; 
            else str2 += '%'+str.charCodeAt(i).toString(16);
        }
        return str2;
    }

//莫斯密码加密解密
function mosie(a){
return MOSIGO(a);
}
function mosid(a){
return MOSIUNGO(a);
}

/*HMAC 哈西散列*/
function hmacsha1(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacSHA1(str,pwd);
}
function hmacsha224(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacSHA224(str,pwd);
}
function hmacsha256(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacSHA256(str,pwd);
}
function hmacsha384(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacSHA384(str,pwd);
}
function hmacsha512(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacSHA512(str,pwd);
}
function hmacmd5(str,pwd){
	if(pwd=='' || str==''){
		return '';
	}
	return CryptoJS.HmacMD5(str,pwd);
}

//PBKDF2签名
		//是否为数字
		function isnum(NAN)  
        {  
            var temp,reg;  
            reg= /\d*/i;        //\d表示数字,*表示匹配多个数字  
            temp = NAN.match(reg);  
            return (temp==NAN)?true:false;  
        }
        //PBKDF2签名
function hmacpbkdf2(str,salt,size,zhudai){
	if(salt=='' || str=='' || size=='' || zhudai==''){
		return '';
	}
	if(!isnum(zhudai)){
		return '迭代必须为数字！';

	}
	var salt=CryptoJS.enc.Utf8.parse(salt);
	var hash_str_pbkdf2=CryptoJS.PBKDF2(str, salt,
	{ keySize: parseInt(size),
	iterations: parseInt(zhudai) 
}
	);
	return hash_str_pbkdf2;
}
//ripemd-160
function ripemd160(aa){
 return CryptoJS.RIPEMD160(aa);
}

/*

加密算法

*/
//aes加密
function aese(str,key){
return CryptoJS.AES.encrypt(str,key);
}
//aes解密
function aesd(str,key){
return CryptoJS.AES.decrypt(str,key).toString(CryptoJS.enc.Utf8);
}

//des加密
function dese(str,key){
return CryptoJS.DES.encrypt(str,key);
}
//des解密
function desd(str,key){
return CryptoJS.DES.decrypt(str,key).toString(CryptoJS.enc.Utf8);
}

//rc4加密
function rc4e(str,key){
return CryptoJS.RC4.encrypt(str,key);
}
//rc4解密
function rc4d(str,key){
return CryptoJS.RC4.decrypt(str,key).toString(CryptoJS.enc.Utf8);
}


//Rabbit加密
function rabbite(str,key){
return CryptoJS.Rabbit.encrypt(str,key);
}
//Rabbit解密
function rabbitd(str,key){
return CryptoJS.Rabbit.decrypt(str,key).toString(CryptoJS.enc.Utf8);
}


//TripleDES加密
function tdese(str,key){
return CryptoJS.TripleDES.encrypt(str,key);
}
//TripleDES解密
function tdesd(str,key){
return CryptoJS.TripleDES.decrypt(str,key).toString(CryptoJS.enc.Utf8);
}


//汉字转拼音
function hanzitopinyin(cc){
	var str='';
	var s;
	for(var i=0;i<cc.length;i++){
	//alert(cc.charAt(i)+" = "+cc.charCodeAt(i));
		if(icibahy.indexOf(cc.charAt(i))!=-1&&cc.charCodeAt(i)>200){
			s=1;
			while(icibahy.charAt(icibahy.indexOf(cc.charAt(i))+s)!=","){
				str+=icibahy.charAt(icibahy.indexOf(cc.charAt(i))+s);
				s++;
			}

			str+=" ";
		}
		else{
			str+=cc.charAt(i);
		}
	}
	return str;
}

/*
//莫斯中文加解密
//mositext= function mosizhe(txt)
//text= function mosizhd(mositext)
*/

/*
//进制转换，y数值，min 2，max 36
//function szjzzh(y,min,max)
*/

//图片转base64
        function filebase64run(input_file,bbb){

            /*input_file：文件按钮对象*/
            /*get_data: 转换成功后执行的方法*/
            if ( typeof(FileReader) === 'undefined' ){
                bbb("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");
            } else {
                try{
                    /*图片转Base64 核心代码*/
                    var file = input_file.files[0];
                    //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
                    if(!/image\/\w+/.test(file.type)){
                        bbb("请确保文件为图像类型");
                        return false;
                    }
                    var reader = new FileReader();
                    reader.onload = function(){

                        bbb(this.result);
                    }
                    reader.readAsDataURL(file);
                }catch (e){
                    bbb('图片转Base64出错啦！'+ e.toString())
                }
            }
        }
//关闭当前页面
function windowclose() {
	if(!isPc()){
		plus.runtime.quit();
		return;
	}
            var userAgent = navigator.userAgent;
            if(isWeiXin()) {
                WeixinJSBridge.call('closeWindow');
            }
            if(!isPc()){
				
                window.opener=null;window.open('about:blank','_self','').close();
            
            }
            if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
                window.location.href="about:blank";
            }
            else {
                window.opener = null;
                window.open("about:blank", "_self");
                window.close();
            }
        }
    
     //判断是不是wechat
  function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    //判断是不是电脑
    function isPc() {
        var userAgent = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag=true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgent.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
//判断字符串是不是json
function isJSON(str) {
	if (typeof str == 'string') {
	    try {
	        var obj=JSON.parse(str);
	        if(typeof obj == 'object' && obj ){
	            return true;
	        }else{
	            return false;
	        }
	
	    } catch(e) {
	        console.log('error：'+str+'!!!'+e);
	        return false;
	    }
	}
	console.log('It is not a string!')
}

document.write('<script type="text/javascript" src="static/js/md5.js"></script>');
document.write('<script type="text/javascript" src="static/js/sha1.js"></script>');
document.write('<script type="text/javascript" src="static/js/sha256.js"></script>');
document.write('<script type="text/javascript" src="static/js/base64.js"></script>');
document.write('<script type="text/javascript" src="static/js/sha224.js"></script>');
document.write('<script type="text/javascript" src="static/js/sha384.js"></script>');
document.write('<script type="text/javascript" src="static/js/sha512.js"></script>');
document.write('<script type="text/javascript" src="static/js/ripemd160.js"></script>');

document.write('<script type="text/javascript" src="static/js/mosi.js"></script>');
document.write('<script type="text/javascript" src="static/js/mosizh.js"></script>');

document.write('<script type="text/javascript" src="static/js/jsed.js"></script>');

document.write('<script type="text/javascript" src="static/js/hmac-sha1.js"></script>');
document.write('<script type="text/javascript" src="static/js/hmac-sha224.js"></script>');
document.write('<script type="text/javascript" src="static/js/hmac-sha256.js"></script>');
document.write('<script type="text/javascript" src="static/js/hmac-sha384.js"></script>');
document.write('<script type="text/javascript" src="static/js/hmac-sha512.js"></script>');
document.write('<script type="text/javascript" src="static/js/hmac-md5.js"></script>');
document.write('<script type="text/javascript" src="static/js/pbkdf2.js"></script>');

document.write('<script type="text/javascript" src="static/js/core-min.js"></script>');
document.write('<script type="text/javascript" src="static/js/aes.js"></script>');
document.write('<script type="text/javascript" src="static/js/rabbit.js"></script>');
document.write('<script type="text/javascript" src="static/js/rc4.js"></script>');
document.write('<script type="text/javascript" src="static/js/tripledes.js"></script>');
document.write('<script type="text/javascript" src="static/js/hz.js"></script>');
document.write('<script type="text/javascript" src="static/js/jinzhi.js"></script>');
document.write('<script type="text/javascript" src="static/js/jquery.min.js"></script>');
