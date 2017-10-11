//游戏初始化
LInit(1000/40,"perfect",750,1334,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    LGlobal.webAudio = true;
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}
//预加载页面
function loadImging(result){
	//logo
	var logo = new LBitmap(new LBitmapData(result['logo']));
	logo.x = (LGlobal.width-logo.getWidth())/2;
	logo.y = 500;
	//text
	logoText = new LTextField();
	logoText.size = 22;
	logoText.color = '#9d223e';
	logoText.text = '100%';
	logoText.x = (LGlobal.width-logoText.getWidth()+300)/2;
	logoText.y = 500+logo.getHeight()+43;
	
	//loadpic
	loadpic = new LSprite();
	loadpic.x = (LGlobal.width-loadpic.getWidth()-280-logoText.getWidth())/2;
	loadpic.y = 500+logo.getHeight()+50;
	loadpic.graphics.drawRect(0,'#9d223e',[0,0,0,10],true,'#9d223e');
	//loadpicr
	var loadpicr = new LSprite();
	loadpicr.x = (LGlobal.width-loadpic.getWidth()-280-logoText.getWidth())/2;
	loadpicr.y = 500+logo.getHeight()+50;
	loadpicr.graphics.drawRect(0,'#999999',[0,0,280,10],true,'#999999');
	
	backLayer.graphics.drawRect(0,'#000000',[0,0,LGlobal.width,LGlobal.height],true,'#ffffff');
	backLayer.addChild(logo);
	logoText.text = '0%';
	backLayer.addChild(logoText);
	backLayer.addChild(loadpicr);
	backLayer.addChild(loadpic);
	LLoadManage.load(gameImg,loading,gameStart);//读取加载页面背景图片
}
//加载页面
function loading(progress){
	logoText.text = parseInt(progress)+'%';
	loadpic.graphics.drawRect(0,'#9d223e',[0,0,280*progress/100,10],true,'#9d223e');
}
//开始答题
function gameStart(result){
	imgList = result;
	homepage();
//	shareToFriend();
//	startQuestion();
//	popWindow(3);
}
//首页
function homepage(){
	//清除背景层
	backLayer.die();
	backLayer.removeAllChild();
	backLayer.removeAllEventListener();
	//背景
	var homeBkg = new LBitmap(new LBitmapData(imgList['homeBkg']));
	backLayer.addChild(homeBkg);
	//小心
	var smallh = new LBitmap(new LBitmapData(imgList['smallh']));
	smallh.x = 495;
	smallh.y = 140;
	backLayer.addChild(smallh);
	bigAndSmall(smallh,2,2,1.0,0.2,0,true);
	//大心
	var bigh = new LBitmap(new LBitmapData(imgList['bigh']));
	bigh.x = 335;
	bigh.y = 340;
	backLayer.addChild(bigh);
	bigAndSmall(bigh,2,2,1.0,0.2,0,true);
	//大心
	var homeTitle = new LBitmap(new LBitmapData(imgList['homeTitle']));
	homeTitle.x = setXm(homeTitle,2);
	homeTitle.y = 990;
	backLayer.addChild(homeTitle);
	bigAndSmall(homeTitle,2,2,1.0,0.05,0,true);
	//答题
	var answer = new LButton(new LBitmap(new LBitmapData(imgList['answer'])));
	answer.x = setXm(answer,2);
	answer.y = 1215;
	backLayer.addChild(answer);
	bigAndSmall(answer,2,2,1.0,0.05,0,true);
	answer.addEventListener(LMouseEvent.MOUSE_DOWN,startQuestion);
}
//答题页面
function startQuestion(){
	//清除背景层
	backLayer.die();
	backLayer.removeAllChild();
	backLayer.removeAllEventListener();
	//背景
	var questionBkg = new LBitmap(new LBitmapData(imgList['questionBkg']));
	backLayer.addChild(questionBkg);
	//答题层
	qLayer = new LSprite();
	backLayer.addChild(qLayer);
	answerQuestion(0);
	//飞心层
	var flyLayer = new LSprite();
	backLayer.addChild(flyLayer);
	//飞心组
	var fly = new Array();
	fly[0] = new flyheart(760,1100,'flyh2');
	flyLayer.addChild(fly[0]);
	fly[0].move(7);
	
	fly[1] = new flyheart(760,800,'flyh2');
	flyLayer.addChild(fly[1]);
	fly[1].move(7);
	
	fly[2] = new flyheart(400,1400,'flyh2');
	flyLayer.addChild(fly[2]);
	fly[2].move(4);
	
	fly[3] = new flyheart(600,1400,'flyh2');
	flyLayer.addChild(fly[3]);
	fly[3].move(5);
	
	fly[4] = new flyheart(760,600,'flyh2');
	flyLayer.addChild(fly[4]);
	fly[4].move(8);
	
	fly[5] = new flyheart(700,1400,'flyh2');
	flyLayer.addChild(fly[5]);
	fly[5].move(7);
	
	fly[6] = new flyheart(760,700,'flyh2');
	flyLayer.addChild(fly[6]);
	fly[6].move(6,3);
	
	fly[7] = new flyheart(760,900,'flyh2');
	flyLayer.addChild(fly[7]);
	fly[7].move(7,3);
	
	fly[8] = new flyheart(760,300,'flyh2');
	flyLayer.addChild(fly[8]);
	fly[8].move(8,3);
}
function  answerQuestion(number)
{
	//题号
	var qNumber = setBitmap(60,136,'number'+(number+1));
	qLayer.addChild(qNumber);
	//题目
	var questionTitle = new question(146,126,qt[number],qx[number],qy[number]);
	qLayer.addChild(questionTitle);
	//图片显示
	var showpic = setBitmap(0,showy[number]-10,'show'+(number+1));
	showpic.x = setXm(showpic,2)+showx[number];
	qLayer.addChild(showpic);
	//可以答题
	var canAnswer = false;
	//答案
	var answeres = [];	
	for(var i=0;i<3;i++)
	{
		var ranswer = false;
		if(rs[number] == i)
		{
			ranswer = true;
		}
		if(number==0)
		{
			if(i==2)
			{
				answeres[i] = new answer(170,913+100*i,amswerList[number][i],st[i],ranswer,number,95,5);
			}else{
				answeres[i] = new answer(170,913+100*i,amswerList[number][i],st[i],ranswer,number);
			}
		}else if(number==7)
		{
			answeres[i] = new answer(110,913+100*i,amswerList[number][i],st[i],ranswer,number);
		}else{
			answeres[i] = new answer(170,913+100*i,amswerList[number][i],st[i],ranswer,number);
		}
		answeres[i].addEventListener(LMouseEvent.MOUSE_DOWN,function(){
			if(canAnswer==true)
			{
				canAnswer = false;
				this.sp.result.visible =true;
				this.sp.sound.play();
				if(this.sp.q==true)
				{
					score+=1;
					if(number != 7) {
						LTweenLite.to(qNumber, 0.5, {
							x: qNumber.x - LGlobal.width,
							delay: 1.0
						});
						LTweenLite.to(questionTitle, 0.5, {
							x: questionTitle.x - LGlobal.width,
							delay: 1.0
						});
						LTweenLite.to(showpic, 0.5, {
							x: showpic.x - LGlobal.width,
							delay: 1.1
						});
						LTweenLite.to(answeres[0], 0.5, {
							x: answeres[0].x - LGlobal.width,
							delay: 1.2
						});
						LTweenLite.to(answeres[1], 0.5, {
							x: answeres[1].x - LGlobal.width,
							delay: 1.3
						});
						LTweenLite.to(answeres[2], 0.5, {
							x: answeres[2].x - LGlobal.width,
							delay: 1.4,
							onComplete: function() {
								qLayer.removeAllChild();
								qLayer.die();
								answerQuestion(++number);
							}
						});
					} else {
						switch(score) {
							case 0:
								popWindow(3);
								break;
							case 1:
							case 2:
							case 3:
								popWindow(0, scoreNumber[score]);
								break;
							case 4:
							case 5:
							case 6:
							case 7:
								popWindow(1, scoreNumber[score]);
								break;
							case 8:
								popWindow(2);
								break;
						}
					}
				}else{
					setTimeout(function(){
						answeres[rs[number]].result.visible = true;
					},1000);					
					setTimeout(function(){
						if(number != 7) {
							LTweenLite.to(qNumber, 0.5, {
								x: qNumber.x - LGlobal.width,
								delay: 1.0
							});
							LTweenLite.to(questionTitle, 0.5, {
								x: questionTitle.x - LGlobal.width,
								delay: 1.0
							});
							LTweenLite.to(showpic, 0.5, {
								x: showpic.x - LGlobal.width,
								delay: 1.1
							});
							LTweenLite.to(answeres[0], 0.5, {
								x: answeres[0].x - LGlobal.width,
								delay: 1.2
							});
							LTweenLite.to(answeres[1], 0.5, {
								x: answeres[1].x - LGlobal.width,
								delay: 1.3
							});
							LTweenLite.to(answeres[2], 0.5, {
								x: answeres[2].x - LGlobal.width,
								delay: 1.4,
								onComplete: function() {
									qLayer.removeAllChild();
									qLayer.die();
									answerQuestion(++number);
								}
							});
						} else {
							switch(score) {
								case 0:
									popWindow(3);
									break;
								case 1:
								case 2:
								case 3:
									popWindow(0, scoreNumber[score]);
									break;
								case 4:
								case 5:
								case 6:
								case 7:
									popWindow(1, scoreNumber[score]);
									break;
								case 8:
									popWindow(2);
									break;
							}
						}
					},1500);
						
				}
				
				
				
			}	
		});
		answeres[i].alpha = 0;
		qLayer.addChild(answeres[i]);
	}
	//动态交互
	qNumber.x = LGlobal.width;
	questionTitle.alpha = 0;
	showpic.alpha = 0;
	LTweenLite.to(qNumber,0.45,{x:60,onComplete:function(){
		LTweenLite.to(questionTitle,1.5,{alpha:1.0,delay:0.3});
		LTweenLite.to(showpic,1.5,{alpha:1.0,delay:0.6});
		LTweenLite.to(answeres[0],1.5,{alpha:1.0,delay:0.8});
		LTweenLite.to(answeres[1],1.5,{alpha:1.0,delay:1.0});
		LTweenLite.to(answeres[2],1.5,{alpha:1.0,delay:1.2,onComplete:function(){
			canAnswer = true;
		}});
	}});
}
//分享页面
function shareToFriend(){
	var shareLayer = new LSprite();
	backLayer.addChild(shareLayer);
	shareLayer.graphics.drawRect(0,"#000000",[0,0,LGlobal.width,LGlobal.height],true,'rgba(0,0,0,0.5)');
	//背景
	var sharing = setBitmap(30,0,'sharing');
	shareLayer.addChild(sharing);
	shareLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		shareLayer.remove();
		shareLayer.removeAllChild();
	});
}
