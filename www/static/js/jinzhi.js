
function pxparseFloat(x,y){
	x=x.toString();
	var num=x;
	var data=num.split(".");
	var you=data[1].split(""); //将右边转换为数组 得到类似 [1,0,1]
	var sum=0;  //小数部分的和
	for(var i=0;i<data[1].length;i++){
		sum+=you[i]*Math.pow(y,-1*(i+1))
	}
	return parseInt(data[0],y)+sum;
}
function zhengze(x){
	var str;
	x=parseInt(x);
	if(x<=10){
		str=new RegExp("^[+\\-]?[0-"+(x-1)+"]*[.]?[0-"+(x-1)+"]*$","gi");
	}else{
		var letter="";
		switch(x){
			case 11:letter="a";break;
			case 12:letter="b";break;
			case 13:letter="c";break;
			case 14:letter="d";break;
			case 15:letter="e";break;
			case 16:letter="f";break;	
			case 17:letter="g";break;
			case 18:letter="h";break;
			case 19:letter="i";break;
			case 20:letter="j";break;
			case 21:letter="k";break;
			case 22:letter="l";break;
			case 23:letter="m";break;
			case 24:letter="n";break;
			case 25:letter="o";break;
			case 26:letter="p";break;	
			case 27:letter="q";break;
			case 28:letter="r";break;
			case 29:letter="s";break;
			case 30:letter="t";break;
			case 31:letter="u";break;
			case 32:letter="v";break;
			case 33:letter="w";break;
			case 34:letter="x";break;
			case 35:letter="y";break;
			case 36:letter="z";break;	
		}
		str=new RegExp("^[+\\-]?[0-9a-"+letter+"]*[.]?[0-9a-"+letter+"]*$","gi");
	}		
	return str;
}
//进制转换，y数值，min 2，max 36
function szjzzh(y,min,max){

			var px00=y;
			var px0=px00.match(zhengze(min));
				if(px0[0].indexOf(".")==-1){
					var px1=parseInt(px0,min);
				}else{
					var px1=pxparseFloat(px0,min);
				}
				px1=px1.toString(max);
				return px1;
}
