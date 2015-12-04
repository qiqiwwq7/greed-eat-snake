window.onload=function(){
  var audio=document.getElementById('audio');
  setInterval(function(){
    // audio.src='./musics/1.mp3'
  },18000);
  var musicskai=true;
var text=document.getElementById('text'),
    div=document.createElement('div'),
    row=20;
var sen=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
var RIGHT=39,LEFT=37,TOP=38,BOTTOM=40;
var dd=RIGHT;
    for(var i=0;i<row;i++){
    	for(var j=0;j<row;j++){
        var div=document.createElement('div');
    		div.style.width=(600-row)/row+'px';
    		div.style.height=(600-row)/row+'px';
    		div.style.marginRight='1px';
    		div.style.marginBottom='1px';
    		var red=Math.floor(Math.random()*255);
		  	var green=Math.floor(Math.random()*255);
		  	var blue=Math.floor(Math.random()*255);
			  var opacite=Math.random()*0.2;
    		div.style.background='rgba('+red+','+green+','+blue+','+opacite+')';
    		div.style.float='left';
    		div.setAttribute('id',i+'_'+j);
    		text.appendChild(div);
    	}
    }
var boxS=document.getElementById('dabox'),
    go=document.getElementById('go'),
    fast=document.getElementById('fast'),
    menium=document.getElementById('menium'),
    LowSpeedt=document.getElementById('Low-speed'),
    kaishi=document.getElementById('kaishi'),
    box2=document.getElementById('box2');
go.onclick=function(){//首页面
  box2.style.display='block';
  boxS.setAttribute('class','animated bounceOut')
   setTimeout(function(){
     boxS.style.display='none';
  },800);
   audio.src='';
   kaishi.setAttribute('class','animated infinite pulse');
   // fast.setAttribute('class','animated infinite pulse');
   // menium.setAttribute('class','animated infinite pulse');
   // LowSpeedt.setAttribute('class','animated infinite pulse');

};
kaishi.onclick=function(){
  kaishi.setAttribute('class','');
  fast.setAttribute('class','animated infinite pulse');
   menium.setAttribute('class','animated infinite pulse');
   LowSpeedt.setAttribute('class','animated infinite pulse'),
   jishuqi=document.getElementById('jishuqi'),
   biaoyangkuang=document.getElementById('biaoyangkuang'),
   kuang=document.getElementById('kuang'),
   shibai=document.getElementById('yihan');
   shibai2=document.getElementById('qiedingshibai');
var panduan=function(cc,dd){
	for(var i=0;i<sen.length;i++){
  if(sen[i].x==cc&&sen[i].y==dd){
  	 return true;
     }
   }
     return false;
}
var shiwu=function(){
	var x=Math.floor(Math.random()*row);
	var y=Math.floor(Math.random()*row);
	while(panduan(x,y)){
		x=Math.floor(Math.random()*row);
		y=Math.floor(Math.random()*row);
	}
	document.getElementById(x+'_'+y).style.backgroundImage='url(./images/1.jpg)';
  document.getElementById(x+'_'+y).style.backgroundSize='100%';
	return{ff:x,gg:y};
}
var fond=shiwu();
var she=function(){
   for(var i=0;i<sen.length;i++){
   	  sen[i].index=i;
   	  document.getElementById(sen[i].x+'_'+sen[i].y).style.background='#81FC03';

   }
}
she();
var kai=true;
var zou=function(){
  if(kai){
    // dd=dis;
    var last=sen.length-1,newHead;
    if(dd==RIGHT){
       newHead={x:sen[last].x,y:sen[last].y+1}
    }
    if(dd==LEFT){
    	newHead={x:sen[last].x,y:sen[last].y-1};
    }
    if(dd==TOP){
    	newHead={x:sen[last].x-1,y:sen[last].y};
    }
    if(dd==BOTTOM){
    	newHead={x:sen[last].x+1,y:sen[last].y};
    }
    if(newHead.x>row-1||newHead.x<0||newHead.y>row-1||newHead.y<0){
    	shibai.style.display='block';
      shibai.setAttribute('class','animated fadeInDown');
      biaoyangkuang.style.display='none';
    	return;
    }
    if(panduan(newHead.x,newHead.y)){
      shibai.style.display='block';
      shibai.setAttribute('class','animated fadeInDown')
      biaoyangkuang.style.display='none';
    	return;
    }
    if(newHead.x==fond.ff&&newHead.y==fond.gg){
       sen.push(newHead);
      document.getElementById(fond.ff+'_'+fond.gg).style.background='#81FC03';
      fond=shiwu();
      return;
    }
	var red=Math.floor(Math.random()*255);
	var green=Math.floor(Math.random()*255);
	var blue=Math.floor(Math.random()*255);
	var opacite=Math.random()*0.2;
    var weiba=sen.shift();
    var t=document.getElementById(weiba.x+'_'+weiba.y);
        t.style.background='rgba('+red+','+green+','+blue+','+opacite+')';
    var h=document.getElementById(newHead.x+'_'+newHead.y);
        h.style.background='#81FC03';
    sen.push(newHead);
     jishuqi.innerHTML='吃掉: '+(sen.length-3)+'个果果';
     if((sen.length-3)>=10){
         biaoyangkuang.style.display='block';
         kuang.innerHTML='不错！加油喽~';
         
     }
     if((sen.length-3)>=30){
         biaoyangkuang.style.display='block';
         kuang.innerHTML='太棒了！！';
         
     }
     if((sen.length-3)>=100){
         biaoyangkuang.style.display='block';
         kuang.innerHTML='太棒了，亚当决定送你一个么么哒~';
         
     }
     if((sen.length-3)>=300){
         biaoyangkuang.style.display='block';
         kuang.innerHTML='超神了~~~';
         
     }
}
};//开关
document.onkeydown=function(e){
	e.preventDefault();
	var d=e.keyCode;
    // if(d==RIGHT||d==LEFT||d==TOP||d==BOTTOM){
    	if(Math.abs(d-dd)!==2){
    		dd=d;
    		// zou(d);
    	// }
    }
 };
 var zailai=document.getElementById('chonglai');
 var shijian1,shijian2,shijian3;
zailai.onclick=function(){
  location.reload();
}
var zhezhao=document.getElementById('zhezhao');
var fass=function(){
   fast.setAttribute('class','');
   menium.setAttribute('class','');
   LowSpeedt.setAttribute('class','');
}

fast.onclick=function(){
   shijian1=setInterval(zou,500);
   zhezhao.style.display='block';
  fass();
}
menium.onclick=function(){
  shijian2=setInterval(zou,300);
   zhezhao.style.display='block';
  fass();
}
LowSpeedt.onclick=function(){
  shijian3=setInterval(zou,200);
   zhezhao.style.display='block';
  fass();
}
shibai2.onclick=function(){
   shibai.style.display='none';
   shibai.setAttribute('class','');
   zailai.setAttribute('class','animated infinite pulse');
   kai=false;
   zhezhao.style.display='none';
 }
}

};