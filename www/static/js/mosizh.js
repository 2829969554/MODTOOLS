!function(a){"use strict";var b="L",c="S",d=a.morjs,e=function(a,b){if(a)for(var c=a.length,d=0;c>d;d++)b(a[d],d,a)},f=function(a){a=a.toLocaleUpperCase();var b;for(var c in m)if(m.hasOwnProperty(c)&&m[c]===a){b=c;break}return b},g=function(a){return n[a]},h=function(a,b){a=a||{};for(var c in b)"undefined"==typeof a[c]&&(a[c]=b[c]);return a},i=function(a){return m[a.toLocaleUpperCase()]},j=function(a,b,c,d,f,g){var h="string"==typeof g,i=new RegExp("("+b+"|"+d+")","g"),j="";return e(a.match(i),function(a,e){h&&e>0&&(j+=g),a===b?j+=c:a===d&&(j+=f)}),j},k=function(a,b,c,d){if("string"!=typeof a)throw new TypeError("Invalid value type: "+typeof a);var f="undefined"!=typeof d,g=new RegExp(b+"|[\\n\\r]+","g"),h=a.trim().split(g);return e(h,function(a,b){h[b]=a=a.split(c),f&&e(a,function(a,c){h[b][c]=a.split(d).join("")})}),h},l=function(a,b){if(!a)return a;for(var c=0,d="";b>c;c++)d+=a;return d},m={A:"SL",B:"LSSS",C:"LSLS",D:"LSS",E:"S",F:"SSLS",G:"LLS",H:"SSSS",I:"SS",J:"SLLL",K:"LSL",L:"SLSS",M:"LL",N:"LS",O:"LLL",P:"SLLS",Q:"LLSL",R:"SLS",S:"SSS",T:"L",U:"SSL",V:"SSSL",W:"SLL",X:"LSSL",Y:"LSLL",Z:"LLSS",0:"LLLLL",1:"SLLLL",2:"SSLLL",3:"SSSLL",4:"SSSSL",5:"SSSSS",6:"LSSSS",7:"LLSSS",8:"LLLSS",9:"LLLLS",".":"SLSLSL",",":"LLSSLL","?":"SSLLSS","'":"SLLLLS","!":"LSLSLL","/":"LSSLS","(":"LSLLS",")":"LSLLSL","&":"SLSSS",":":"LLLSSS",";":"LSLSLS","=":"LSSSL","+":"SLSLS","-":"LSSSSL",_:"SSLLSL",'"':"SLSSLS",$:"SSSLSSL","@":"SLLSLS","Ä":"SLSL","Æ":"SLSL","Ą":"SLSL","À":"SLLSL","Å":"SLLSL","Ç":"LSLSS","Ĉ":"LSLSS","Ć":"LSLSS","Š":"LLLL","Ð":"SSLLS","Ś":"SSSLSSS","È":"SLSSL","Ł":"SLSSL","É":"SSLSS","Đ":"SSLSS","Ę":"SSLSS","Ĝ":"LLSLS","Ĥ":"LLLL","Ĵ":"SLLLS","Ź":"LLSSLS","Ñ":"LLSLL","Ń":"LLSLL","Ö":"LLLS","Ø":"LLLS","Ó":"LLLS","Ŝ":"SSSLS","Þ":"SLLSS","Ü":"SSLL","Ŭ":"SSLL","Ż":"LLSSL"},n={classic:{charSpacer:" ",letterSpacer:l(" ",3),longString:"-",shortString:"·",wordSpacer:l(" ",7)},classicEntities:{charSpacer:"&nbsp;",letterSpacer:l("&nbsp;",3),longString:"&#45;",shortString:"&middot;",wordSpacer:l("&nbsp;",7)},compact:{charSpacer:"",letterSpacer:" ",longString:"-",shortString:"·",wordSpacer:l(" ",3)},compactEntities:{charSpacer:"",letterSpacer:"&nbsp;",longString:"&#45;",shortString:"&middot;",wordSpacer:l("&nbsp;",3)},simple:{charSpacer:"",letterSpacer:" ",longString:"-",shortString:".",wordSpacer:l(" ",3)}},o={VERSION:"1.1.0",chars:m,defaults:{mode:"compact"},modes:n,decode:function(a,d){a=a||"",d=h(d,o.defaults);var i=g(d.mode),l="",m=k(a,i.wordSpacer,i.letterSpacer,i.charSpacer);return m?(e(m,function(a,d){d>0&&(l+=" "),e(a,function(a){var d,e=j(a,i.shortString,c,i.longString,b);e&&(d=f(e),"string"==typeof d&&(l+=d))})}),l):l},encode:function(a,d){a=a||"",d=h(d,o.defaults);var f=g(d.mode),l="",m=k(a,"\\s+","");return m?(e(m,function(a,d){d>0&&(l+=f.wordSpacer),e(a,function(a,d){d>0&&(l+=f.letterSpacer);var e=i(a);"string"==typeof e&&(l+=j(e,c,f.shortString,b,f.longString,f.charSpacer))})}),l):l},noConflict:function(){return a.morjs=d,this}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=o),exports.morjs=o):"function"==typeof define&&define.amd?define(function(){return o}):a.morjs=o}(this);

var decToHex = function(str) {
var res=[];
for(var i=0;i < str.length;i++)
    res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
return "\\u"+res.join("\\u");
}
var hexToDec = function(str) {
str=str.replace(/\\/g,"%");
return unescape(str);
}
//console.log(decToHex("decToHex unicode 编码转换"));
morjs.modes.custom = { 
  charSpacer: '', 
  letterSpacer: '/', 
  longString: '-', 
  shortString: '.', 
  wordSpacer: '/'
}; 
var options = {mode: 'custom'};

var ss = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@";
function v10toX(n,m){m=String(m).replace(/ /gi,"");if(m=="")return"";if(parseInt(m)!=m){/*M("输入的摩尔斯码不符合要求！");*/return false;}var t="";var a=ss.substr(0,n);while(m!=0){var b=m%n;t=a.charAt(b)+t;m=(m-b)/n}return t}
function vXto10(n,m){m=String(m).replace(/ /gi,"");if(m=="")return"";var a=ss.substr(0,n);if(eval("m.replace(/["+a+"]/gi,'')")!=""){/*M("输入的摩尔斯码不符合要求！");*/return false;}var t=0,c=1;for(var x=m.length-1;x>-1;x--){t+=c*(a.indexOf(m.charAt(x)));c*=n}return t}
function vXtoY(n,m,y){a=vXto10(n*1,m);if(a=="")return"";a=v10toX(y,a);return a}
function M(str){alert(str)}
function convert(hex_input,id_input,hex_output,id_output){var input_v=document.getElementById(id_input).value;var outputEle=document.getElementById(id_output);var hex_in_v=document.getElementById(hex_input).value;var hex_out_v=document.getElementById(hex_output).value;outputEle.value=vXtoY(hex_in_v,input_v,hex_out_v)}
function convert_c(hex_input_v,id_input,hex_output_v,id_output){var input_v=document.getElementById(id_input).value;var outputEle=document.getElementById(id_output);outputEle.value=vXtoY(hex_input_v,input_v,hex_output_v)}

var morse_char_re = /[a-zA-Z0-9.:,;?=\'\/\!_\"()$&@]/;
function mosizhe(aa) {
  var input = aa;
  var matchs = input.match (/[\u0000-\uffff]/g);
  var out = "";
  if (matchs != null) {
    for (var i = 0; i < matchs.length; i++) {
      var match = matchs[i];
      if (match.trim() != '') {
        if (morse_char_re.test(match)) {
          //使用morse处理
          out = out + morjs.encode(match, options) + morjs.modes.custom.letterSpacer;
        }
        else {
          //中文morse处理
          var unicode = decToHex(match);
          if (unicode && unicode.substring(0,2) == '\\u') {
            unicode = unicode.substring(2, unicode.length);
            unicode = vXtoY(16, unicode, 2);
            //将1替换为长，0替换为短str = str.replace(/word/g,"Excel")
            unicode = unicode.replace(/1/g, morjs.modes.custom.longString);
            unicode = unicode.replace(/0/g, morjs.modes.custom.shortString);
            out = out + unicode + morjs.modes.custom.letterSpacer;
          }
        }
      }
      else{
        //不处理空字符串
      }
    };
  }
  //去掉末尾的/
  if (out != null && out.length > 0 && out.substring(out.length - 1, out.length)) {
    out = out.substring(0, out.length - 1);
  }
  return out;
}

function mosizhd(aa) {
  var input = aa;
  out = '';
  if (input != null) {
    input_array = input.split(morjs.modes.custom.letterSpacer);
    eval("var re_1 = /\\" + morjs.modes.custom.longString + "/g;"); 
    eval("var re_0 = /\\" + morjs.modes.custom.shortString + "/g;"); 
    for (var i = 0; i < input_array.length; i++) {
      input = input_array[i];
      if (input != null && input.length >= 1) {
        if (input.length <= 5) {
          //morse最长5位
          out = out + morjs.decode(input, options) + '';
        }
        else {
          //汉字
          input = input.replace(re_1, '1');
          input = input.replace(re_0, '0');
          input = vXtoY(2, input, 16);
          if (input === false || input === '') {
            out = "输入的摩尔斯码不符合要求！";
          }
          else {
            input = '\\u' + input;
            input = hexToDec(input);
            out = out + input + '';
          }
        }
      }
    }
  }
  return out;
}

/*
function mosizhe(aa) {
  return morjs.encode(aa, options);
}
function mosizhd(aa) {
  return morjs.decode(aa, options);
}
*/