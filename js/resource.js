//预加载的图片
var loadImg = [
	{path:'img/logo.png',type:'img',name:'logo'}
];
//加载的图片
var gameImg = [
	{path:'img/answer.png',type:'img',name:'answer'},//开始答题
	{path:'img/homeBkg.jpg',type:'img',name:'homeBkg'},//首页背景
	{path:'img/bigh.png',type:'img',name:'bigh'},//大心
	{path:'img/smallh.png',type:'img',name:'smallh'},//小心
	{path:'img/homeTitle.png',type:'img',name:'homeTitle'},//首页标题
	{path:'img/questionBkg.jpg',type:'img',name:'questionBkg'},//首页标题
	{path:'img/successBkg.png',type:'img',name:'successBkg'},//答对背景
	{path:'img/woman.png',type:'img',name:'woman'},//女人
	{path:'img/share.png',type:'img',name:'share'},//分享
	{path:'img/continue.png',type:'img',name:'continue'},//继续答题
	{path:'img/prosit.png',type:'img',name:'prosit'},//恭喜您
	{path:'img/close.png',type:'img',name:'close'},//关闭
	{path:'img/volunteer.png',type:'img',name:'volunteer'},//自愿者
	{path:'img/womanh.png',type:'img',name:'womanh'},//爱心女
	{path:'img/light.png',type:'img',name:'light'},//光
	{path:'img/sogood.png',type:'img',name:'sogood'},//自愿者
	{path:'img/number1.png',type:'img',name:'number1'},//题号1
	{path:'img/number2.png',type:'img',name:'number2'},//题号2
	{path:'img/number3.png',type:'img',name:'number3'},//题号3
	{path:'img/number4.png',type:'img',name:'number4'},//题号4
	{path:'img/number5.png',type:'img',name:'number5'},//题号5
	{path:'img/number6.png',type:'img',name:'number6'},//题号6
	{path:'img/number7.png',type:'img',name:'number7'},//题号7
	{path:'img/number8.png',type:'img',name:'number8'},//题号8
	{path:'img/show1.png',type:'img',name:'show1'},//展示1
	{path:'img/show2.png',type:'img',name:'show2'},//展示2
	{path:'img/show3.png',type:'img',name:'show3'},//展示3
	{path:'img/show4.png',type:'img',name:'show4'},//展示4
	{path:'img/show5.png',type:'img',name:'show5'},//展示5
	{path:'img/show6.png',type:'img',name:'show6'},//展示6
	{path:'img/show7.png',type:'img',name:'show7'},//展示7
	{path:'img/show8.png',type:'img',name:'show8'},//展示8
	{path:'img/selecta.png',type:'img',name:'selecta'},//选项a
	{path:'img/selectb.png',type:'img',name:'selectb'},//选项b
	{path:'img/selectc.png',type:'img',name:'selectc'},//选项c
	{path:'img/questionBox.png',type:'img',name:'questionBox'},//问题框
	{path:'img/answerBox.png',type:'img',name:'answerBox'},//答案框
	{path:'img/bigBox.png',type:'img',name:'bigBox'},//大框
	{path:'img/error.png',type:'img',name:'error'},//错
	{path:'img/right.png',type:'img',name:'right'},//对
];
//全局变量
var backLayer;//背景层
var logoText;//加载文字
var loadpic;//进度条
var imgList;//图片组
var qLayer;//答题层
//题目
var qt = ["经常献血会使人更加健康、长寿，但《中华人民共和国献血法》规定，献血时两次采集间隔期不得少于多长时间？","《中华人民共和国献血法》规定，血站对公民每次采集血液量最多不得超过多少毫升？","经常献血的益处良多，但不包括","献血对心脑管系统有良好的远期影响，主要是因为献血能降低人体内","献血可预防、缓解以下哪种情况？","经常献血可以减少某些病的发病率，但不包括？","经常献血会降低人体血液中哪种元素的含量，从而降低患心脏病的危险？","公民献血后享许多优惠政策但不包括？"];
var qx = [42,42,56,42,43,42,41,42];
var qy = [22,45,83,67,83,67,45,67];
var amswerList = new Array(8); //答案组
amswerList[0] = ["3个月","6个月","血嘛，用完可以再造，没关系"];
amswerList[1] = ["200","250","400"];
amswerList[2] = ["提高造血功能","促进、改善心理健康","增高"];
amswerList[3] = ["同性恋","高粘血症","增强异性缘"];
amswerList[4] = ["“血稠”浓度","红细胞密度","搞笑细胞密度"];
amswerList[5] = ["冠心病","自恋症","癌症"];
amswerList[6] = ["铁","金","钠"];
amswerList[7] = ["献血者及其父母、配偶、子女享有在血源紧张下优先用血的权利","献血者及其父母、配偶、子女享有在别人面前吹牛的机会","献血者父母、配偶及子女发生医疗临床用血时，享有累计等量免费用血权"];
var st = ['a','b','c'];
var rs = [1,2,2,1,0,1,0,1];
//图片位置
var showx = [0,0,0,-20,-15,0,0,0];
var showy = [380,360,360,360,400,350,320,360];
var score = 0;
var scoreNumber = ["零","一","二","三","四","五","六","七"];








