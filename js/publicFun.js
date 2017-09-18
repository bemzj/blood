//变大变小
function bigAndSmall(tween,x,y,time,scales,delayTime,loops){
	var bigBeforeX = tween.x;
	var bigBeforeY = tween.y;
	var bigAfterX = tween.x-tween.getWidth()*scales/x;
	var bigAfterY = tween.y-tween.getHeight()*scales/y;
	return LTweenLite.to(tween,time/2,{loop:loops,delay:delayTime,x:bigAfterX,y:bigAfterY,scaleX:(1+scales),scaleY:(1+scales)}).to(tween,time/2,{x:bigBeforeX,y:bigBeforeY,scaleX:1,scaleY:1});
}
//居中
function setXm(layer,index){
	return (LGlobal.width-layer.getWidth())/index;
}
//空函数
function setnull(){}
//设置文字
function setText(x,y,size,text,color,weight)
{
	base(this,LSprite,[]);
	var word = new LTextField();
	word.text = text;
	word.color = color;
	word.size = size;
	var self = this;
	self.x = x;
	self.y = y;
	if(weight==true)
	{
		word.weight ="bolder";
	}
	self.addChild(word);
}
//设置文字
function setmText(x,y,size,text,color,weight,width,height)
{
	base(this,LSprite,[]);
	var word = new LTextField();
	word.text = text;
	word.color = color;
	word.size = size;
	word.width = width;
	word.setWordWrap(true);
	word.setMultiline(true,height);
	var self = this;
	self.x = x;
	self.y = y;
	if(weight==true)
	{
		word.weight ="bolder";
	}
	self.addChild(word);
}
//生成图片
function setBitmap(x,y,name)
{
	var self = new LBitmap(new LBitmapData(imgList[name]));
	self.x = x;
	self.y = y;	
	return self;
}
//生成按钮
function setButton(x,y,name,status)
{
	var self =new LButton(new LBitmap(new LBitmapData(imgList[name])));
	self.x = x;
	self.y = y;
	self.buttonMode = status;
	return self;
}
//出现
function show(tween,time,a,delay)
{
	LTweenLite.to(tween,time,{alpha:a,delay:delay});
}
//弹窗
function popWindow(nid,word)
{
	//蒙层
	var popLayer = new LSprite();
	backLayer.addChild(popLayer);
	popLayer.graphics.drawRect(0,'#000000',[0,0,LGlobal.width,LGlobal.height],false,'rgba(0,0,0,0.75)');
	popLayer.addEventListener(LMouseEvent.MOUSE_DOWN,setnull);
	//背景
	var successBkg = setBitmap(0,0,'successBkg');
	popLayer.addChild(successBkg);
	//关闭
	var close= setButton(628,58,'close');//x=628
	popLayer.addChild(close);
	close.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		popLayer.die();		
		popLayer.removeAllChild();
		popLayer.remove();
	});
	//分享知识
	var share= setButton(0,980,'share');
	share.x = setXm(share,2)+10;
	popLayer.addChild(share);
	bigAndSmall(share,2,2,1.0,0.1,0,true);
	share.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		
	});
	if(nid==0||nid==1)
	{
		//女人
		var woman = setBitmap(0,300,'woman');
		popLayer.addChild(woman);
		woman.alpha = 0;
		show(woman,2.0,1.0,0);
		//继续答题
		var continues= setButton(0,875,'continue');
		continues.x = setXm(continues,2)+10;
		popLayer.addChild(continues);
		continues.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			popLayer.die();		
			popLayer.removeAllChild();
			popLayer.remove();
			startQuestion();
		});
		if(nid==0){
			//恭喜你
			var prosit = setBitmap(0,585,'prosit');
			prosit.x = setXm(prosit,2);
			popLayer.addChild(prosit);
			prosit.alpha = 0;
			show(prosit,2.0,1.0,0);
			//文字提示
			var text1 = new setText(0,760,36,"马上就答对了    道题。",'#171e22');
			text1.x = setXm(text1,2)+20;
			text1.alpha = 0;
			popLayer.addChild(text1);
			show(text1,1.5,1.0,1.0);
			var text2 = new setText(0,815,36,"爱心接力者，请再接再厉！",'#171e22');
			text2.x = setXm(text2,2)+20;
			text2.alpha = 0;
			popLayer.addChild(text2);
			show(text2,1.5,1.0,1.5);
			var text3 = new setText(0,760,36,word,'#a80006');
			text3.x = setXm(text1,2)+238;
			text3.alpha = 0;
			show(text3,1.5,1.0,1.0);
			popLayer.addChild(text3);
		}else{
			//恭喜你
			var volunteer = setBitmap(0,585,'volunteer');
			volunteer.x = setXm(volunteer,2);
			popLayer.addChild(volunteer);
			volunteer.alpha = 0;
			show(volunteer,2.0,1.0,0);
			//文字提示
			var text1 = new setText(0,760,36,"竟然答对了    道题！",'#171e22');
			text1.x = setXm(text1,2)+20;
			text1.alpha = 0;
			popLayer.addChild(text1);
			show(text1,1.5,1.0,1.0);
			var text2 = new setText(0,815,36,"请再接再厉，让爱心发扬光大！",'#171e22');
			text2.x = setXm(text2,2)+13;
			text2.alpha = 0;
			popLayer.addChild(text2);
			show(text2,1.5,1.0,1.5);
			var text3 = new setText(0,760,36,word,'#a80006');
			text3.x = setXm(text1,2)+200;
			text3.alpha = 0;
			show(text3,1.5,1.0,1.0);
			popLayer.addChild(text3);
		}
	}else if(nid==2){
		//背景光
		var light = setBitmap(0,290,'light');
		light.scaleX = 0.8;
		light.scaleY = 0.8;
		light.x = setXm(light,2)+10;
		popLayer.addChild(light);
		LTweenLite.to(light,8.0,{loop:true,rotate:360,onComplete:function(){
			light.rotate = 0;
		}});
		//爱心女
		var womanh = setBitmap(0,348,'womanh');
		womanh.x = setXm(womanh,2);
		popLayer.addChild(womanh);
		//很棒
		var sogood = setBitmap(0,585,'sogood');
		sogood.x = setXm(sogood,2);
		popLayer.addChild(sogood);
		bigAndSmall(sogood,2,2,1.0,0.05,0,true);
		//文字提示
		var text1 = new setText(0,735,36,"您全答对了！",'#171e22');
		text1.x = setXm(text1,2)+20;
		popLayer.addChild(text1);
		text1.alpha = 0;
		var text2 = new setText(0,795,36,"最美爱心使者，非你莫属！",'#171e22');
		text2.x = setXm(text2,2)+20;
		popLayer.addChild(text2);
		text2.alpha = 0;
		var text3 = new setText(0,855,36,"你的一次，他的一生！",'#171e22');
		text3.x = setXm(text3,2)+20;
		popLayer.addChild(text3);
		text3.alpha = 0;
		var text4 = new setText(0,915,36,"欢迎加入完美的献血队伍！",'#171e22');
		text4.x = setXm(text4,2)+20;
		popLayer.addChild(text4);
		text4.alpha = 0;
		LTweenLite.to(text1,0.7,{alpha:1.0,delay:0,onComplete:function(){
			LTweenLite.to(text2,0.7,{alpha:1.0,delay:0,onComplete:function(){
				LTweenLite.to(text3,0.7,{alpha:1.0,delay:0,onComplete:function(){
					LTweenLite.to(text4,0.7,{alpha:1.0});
				}});
			}});
		}});
	}
}
//答案类
function answer(x,y,text,sname,q,n,tx=95,ty=23)
{
	base(this,LSprite,[]);
	var self = this;
	self.x = x;
	self.y = y;
	if(n==7)
	{
		self.box = setBitmap(0,0,'bigBox');			
		self.word = new setmText(95,12,24,text,"272626",false,420,36);
	}else{
		self.box = setBitmap(0,0,'answerBox');
		self.word = new setmText(tx,ty,30,text,"272626",false,320,36);
	}	
	self.addChild(self.box);
	self.selecting = setBitmap(16,11,'select'+sname);
	self.addChild(self.selecting);
	self.addChild(self.word);
	self.q = q;
	self.sound = new LSound();
	if(q==false)
	{
		self.sound.load('music/error.mp3');
		self.result = setBitmap(12,6,'error');
	}else{
		self.sound.load('music/right.mp3');
		self.result = setBitmap(7,-19,'right');
	}	
	self.addChild(self.sound);
	self.addChild(self.result);
	self.result.visible=false;
}

//题目类
function question(x,y,text,tx,ty)
{
	base(this,LSprite,[]);
	var self = this;
	self.x = x;
	self.y = y;
	self.box = setBitmap(0,0,'questionBox');
	self.addChild(self.box);
	self.word = new setmText(tx,ty,30,text,"272626",false,450,40);
	self.addChild(self.word);
}
