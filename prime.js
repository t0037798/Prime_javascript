document.getElementById('prime').onclick=function(){//讀取n後後開始製作質數表
	var max=parseInt(document.getElementById('num').value); //讀取n
 	if(n>=2){//n>=2才做質數表
  	for (var i = 2; i <= max; i++) {
    	var flag=true;//預設任何數為質數
      for (var j = 2; j <= Math.sqrt(i); j++) {//判斷<=(根號n)的數若皆無法整除即為質數
      	if(i%j==0){//若出現可整除的數表示為和數
        	flag=false;
        }    	
      }
      if(flag){//只印出質數在log
      	console.log(i);
      }
    }
  }
}