
function funcaaaa(property) {//property:根据什么属性排序
 return function(a,b){
  var value1 = a[property];
  var value2 = b[property];
  /*
  * value2 - value1; ——> 降序
  * value1 - value2; ——> 升序
  */
  return value2 - value1;//升序排序
 }
}
	
function 初始化(){
	$list=httpget('notline/list.txt',{'get':'list'});
	$rows=strtorow($list);
	for (var i = 0; i < $rows.length; i++) {
		xb='ph'+$rows[i]['id'];
		dex=romget(xb);
		if(dex==null){
			romset(xb,0);
		}
		$rows[i]['veiws']=dex;
		//console.log(romget('ph'+$rows[i]['id']));
	}
	$rows=$rows.sort(funcaaaa('veiws'));
	setbyidhtmlrows('bloglist',$rows);
	console.log('你好啊同行，手下留情，在下QQ2829969554~~');
}
debug =false;
	if(!debug){
		window.onload = 初始化;
	}