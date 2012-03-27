
var masuW	= 64;
var masuH	= 32;

var charas	= [];		//表示中の　キャラ格納

var COUNT = 0;			//ターンカウンタ
var hero_flag = false;  //勇者の侵入用フラグ

//位置　
var ENT		= 1;
var SHOP_B	= 2;
var SHOP_F	= 3
var BOX		= 4;
var SORD	= 5;
var SHOP 	= 6;
var MEAT	= 7;
var SRIME 	= 8;
var BORN	= 9;
var MAOU	= 10;

var SX		= 224;
var SY		= 0;

//イベントフラグ
var E_FLAG	= false;		//処理中フラグ　アイコン無効用
var EVEN	= 0;
var NOT_DO	= 0;
//オブジェクト配置
var SET_BORN	= 1;
var SET_BOX		= 2;
var SET_MEAT	= 3;
var SET_SHOP	= 4;
var SET_SORD	= 5;
var SET_SRIME	= 6;
//イベント


//マップデータ　主要ポイントの座標
var point_ 	= [];
point_[ENT]		= [9, 13];
point_[MAOU] 	= [3, 0];
point_[BOX]		= [9, 5];
point_[SHOP_B]	= [7, 10];
point_[SHOP_F]	= [8, 10];
point_[SORD]	= [3, 4];
point_[SHOP]	= [6, 10];
point_[MEAT]	= [5, 6];
point_[SRIME]	= [3, 6];
point_[BORN]	= [1, 6];

//ルート配列
//14			-その場　ジャンプ
//0,1,2,3 		-右上・右下・左下・左上
//40,41,42,43	-その場　向き変更
var route_ = function(NUM){
	if(NUM==SHOP_B*11)		{return [44];}
	if(NUM==BOX*11)			{return [44];}
	if(NUM==MEAT*11)		{return [44];}
	if(NUM==SRIME*11)		{return [44];}
	if(NUM==BORN*11)		{return [44];}
	if(NUM==SORD*11)		{return [44];}
	
	
	if(NUM==ENT*10 + SHOP_F)	{return [0,0,0,3];}
	if(NUM==ENT*10 + SHOP_B)	{return [0,0,0,3,3];}
	if(NUM==ENT*10 + BOX)		{return [0,0,0,0,0,0,0,0];}
	if(NUM==ENT*10 + MEAT)		{return [0,0,0,0,0,0,0,3,3,3,3];}
	if(NUM==ENT*10 + SRIME)		{return [0,0,0,0,0,0,0,3,3,3,3,3,3];}
	if(NUM==ENT*10 + BORN)		{return [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3];}
	if(NUM==ENT*10 + SORD)		{return [0,0,0,0,0,0,0,3,3,3,3,3,3,0,0];}
	if(NUM==ENT*10 + MAOU)		{return [0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0];}
	
	if(NUM==SHOP_F*10 + SHOP_B)	{return [0,3,2];}
	if(NUM==SHOP_F*10 + BOX)	{return [1,0,0,0,0,0];}
	if(NUM==SHOP_F*10 + MEAT)	{return [1,0,0,0,0,3,3,3,3];}
	if(NUM==SHOP_F*10 + SRIME)	{return [1,0,0,0,0,3,3,3,3,3,3];}
	if(NUM==SHOP_F*10 + BORN)	{return [1,0,0,0,0,3,3,3,3,3,3,3,3];}
	if(NUM==SHOP_F*10 + SORD)	{return [1,0,0,0,0,3,3,3,3,3,3,0,0];}
	if(NUM==SHOP_F*10 + MAOU)	{return [1,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0];}
	
	if(NUM==SHOP_B*10 + ENT)    {return [0,1,1,2,2,2,2];}
	if(NUM==SHOP_B*10 + SHOP_F)	{return [0,1,2];}
	if(NUM==SHOP_B*10 + BOX)	{return [0,1,1,0,0,0,0,0];}
	if(NUM==SHOP_B*10 + MEAT)	{return [0,1,1,0,0,0,0,3,3,3,3];}
	if(NUM==SHOP_B*10 + SRIME)	{return [0,1,1,0,0,0,0,3,3,3,3,3,3];}
	if(NUM==SHOP_B*10 + BORN)	{return [0,1,1,0,0,0,0,3,3,3,3,3,3,3,3];}
	if(NUM==SHOP_B*10 + SORD)	{return [0,1,1,0,0,0,3,3,3,3,3,3,0,0];}
	if(NUM==SHOP_B*10 + MAOU)	{return [0,1,1,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0];}
	
	if(NUM==BOX*10 + SHOP_F)	{return [2,2,2,2,2,3];}
	if(NUM==BOX*10 + SHOP_B)	{return [2,2,2,2,3,3,2];}
	if(NUM==BOX*10 + MEAT)		{return [2,3,3,3,3];}
	if(NUM==BOX*10 + SRIME)		{return [2,3,3,3,3,3,3];}
	if(NUM==BOX*10 + BORN)		{return [2,3,3,3,3,3,3,3,3];}
	if(NUM==BOX*10 + SORD)		{return [2,3,3,3,3,3,3,0,0];}
	if(NUM==BOX*10 + MAOU)		{return [2,3,3,3,3,3,3,0,0,0,0,0,0];}
	
	if(NUM==MEAT*10 + SHOP_F)	{return [1,1,1,1,2,2,2,2,3];}
	if(NUM==MEAT*10 + SHOP_B)	{return [1,1,1,1,2,2,2,3,3,2];}
	if(NUM==MEAT*10 + BOX)		{return [1,1,1,1,0];}
	if(NUM==MEAT*10 + SRIME)	{return [3,3];}
	if(NUM==MEAT*10 + BORN)		{return [3,3,3,3];}
	if(NUM==MEAT*10 + SORD)		{return [3,3,0,0];}
	if(NUM==MEAT*10 + MAOU)		{return [3,3,0,0,0,0,0,0];}
	
	if(NUM==SRIME*10 + SHOP_F)	{return [1,1,1,1,1,1,2,2,2,2,3];}
	if(NUM==SRIME*10 + SHOP_B)	{return [1,1,1,1,1,1,2,2,2,3,3,2];}
	if(NUM==SRIME*10 + BOX)		{return [1,1,1,1,1,1,0];}
	if(NUM==SRIME*10 + MEAT)	{return [1,1];}
	if(NUM==SRIME*10 + BORN)	{return [3,3];}
	if(NUM==SRIME*10 + SORD)	{return [0,0];}
	if(NUM==SRIME*10 + MAOU)	{return [0,0,0,0,0,0];}
	
	if(NUM==BORN*10 + SHOP_F)	{return [1,1,1,1,1,1,1,1,2,2,2,2,3];}
	if(NUM==BORN*10 + SHOP_B)	{return [1,1,1,1,1,1,1,1,2,2,2,3,3,2];}
	if(NUM==BORN*10 + BOX)		{return [1,1,1,1,1,1,1,1,0];}
	if(NUM==BORN*10 + MEAT)		{return [1,1,1,1];}
	if(NUM==BORN*10 + SRIME)	{return [1,1];}
	if(NUM==BORN*10 + SORD)		{return [1,1,0,0];}
	if(NUM==BORN*10 + MAOU)		{return [1,1,0,0,0,0,0,0];}
	
	if(NUM==SORD*10 + SHOP_F)	{return [2,2,1,1,1,1,1,1,2,2,2,2,3];}
	if(NUM==SORD*10 + SHOP_B)	{return [2,2,1,1,1,1,1,1,2,2,2,3,3,2];}
	if(NUM==SORD*10 + BOX)		{return [2,2,1,1,1,1,1,1,0];}
	if(NUM==SORD*10 + MEAT)		{return [2,2,1,1];}
	if(NUM==SORD*10 + SRIME)	{return [2,2,];}
	if(NUM==SORD*10 + BORN)		{return [2,2,3,3];}
	if(NUM==SORD*10 + MAOU)		{return [0,0,0,0];}
}


//移動方向
var r_Up	= 0;
var r_Down	= 1;
var l_Down	= 2;
var l_Up	= 3;
var NON		= 4;
var AT		= 5;
//移動量
var VX 		= 4;
var VY		= 2;

//キャラメイク
var　create_chara = function(image, point, width){
	var chara  	= new Sprite(width, width);
	chara.lv	= 0;
	chara.image	= image;
	chara.direction = l_Down;
	chara.qx	= point_[point][0];
	chara.qy	= point_[point][1];
	chara.x		= SX + masuW/2*chara.qx - masuW/2*chara.qy;
	chara.y		= SY + masuW/4*chara.qy + masuW/4*chara.qx - width/2;
	chara.route	= [];			//移動方向の列
	chara.point	= point;
	chara.isMoving = false;
	chara.jumping	= false;
	chara.jumpCount	= 0;
	chara.EVEN		= false;		//キャラの移動　終了フラグ
	chara.ini		= false;		//イベントの初期設定完了フラグ
	chara.EV_END	= false;		//イベントを実行したか
	chara.wd		= width;
	chara.set		= false;
	chara.attack	= false;		//攻撃完了フラグ
	chara.attacking	= false;		//攻撃フラグ
	chara.attack_count = 0;
	
	chara.addEventListener('enterframe', function(e){
		//移動先が指定してある場合
		move_chara(this);
		this.frame = this.direction;
	});
	
	return chara;
}

//キャラ位置セット
var chara_point = function(chara, point){
	chara.qx	= point_[point][0];
	chara.qy	= point_[point][1];
	chara.x		= SX + masuW/2*chara.qx - masuW/2*chara.qy;
	chara.y		= SY + masuW/4*chara.qy + masuW/4*chara.qx - masuH;
	chara.point = point;
	chara.set 	= true;
}

//移動
var move_chara = function(chara){
	//キャラが動いているとき
	if(chara.isMoving){	
		chara.moveBy(chara.vx, chara.vy);
		//ジャンプしているとき	
		if(chara.jumping){
			if(chara.jumpCount<6){
				chara.vy += 4;
				chara.jumpCount++;
			}else if(chara.jumpCount==6){
				chara.vy -= 12;
			}
			//this.walk = (this.walk+1) % 3;
			//その場ジャンプ　が完了した場合
			if(chara.vx==0 && (chara.y-SY)%(masuH/2)==0){
				chara.isMoving = false;
				//this.walk = 1;
				chara.vx = chara.vy = 0;
				chara.jumping = false;
				chara.jumpCount = 0;
				//イベントが完了したとき	
				if(chara.route.length<=0){
					chara.EVEN = false;
				}
			}
		}
		//攻撃しているとき
		if(chara.attacking){
			chara.attack_count++;
			if(chara.attack_count==4){
				chara.vx = -1*chara.vx;
				chara.vy = -1*chara.vy;
			}
			//攻撃終了した場合
			if(chara.attack_count==8){
				chara.isMoving = false;
				//this.walk = 1;
				chara.vx = chara.vy = 0;
				chara.jumping = false;
				chara.jumpCount = 0;
				chara.attack_count = 0;
				chara.attack = true;
				chara.attacking = false;
				chara.atack_count = 0;
				//イベントが完了したとき	
				if(chara.route.length<=0){
					chara.EVEN = false;
			}}
		}
		//隣のマスに移動完了した場合
		if((chara.vx && (chara.x-SX)%(masuW/2)==0) && !chara.attacking){
			chara.isMoving = false;
			//this.walk = 1;
			chara.vx = chara.vy = 0;
			chara.jumping = false;
			chara.jumpCount = 0;
			//イベントが完了したとき	
			if(chara.route.length<=0){
				chara.EVEN = false;
		}}
	//動いていないとき	
	}else{
		if(chara.route.length>0){
			var move = chara.route.shift();
			switch(move){
				case r_Up:
				case 10+r_Up:
					rUp(chara);
					break;
				case r_Down:
				case 10+r_Down:
					rDown(chara);
					break;
				case l_Down:
				case 10+l_Down:
					lDown(chara);
					break;
				case l_Up:
				case 10+l_Up:
					lUp(chara);
					break;
				case 10+NON:
					chara.isMoving = true;
					chara.vx = 0;
					chara.vy = 0;
					break;
					
				//向き変更　移動はしない
				case 10*NON + r_Up:
				case 10*NON + r_Down:
				case 10*NON + l_Down:
				case 10*NON + l_Up:
					chara.vx = 0;
					chara.vy = 0;
					chara.isMoving = false;
					chara.direction = move-10*NON;
					chara.jumping = false;
					chara.jumpCount = 0;
					if(chara.route.length<=0){
						chara.EVEN = false;
					}
					break;
				//その場　待機
				case 10*NON + NON:
					chara.vx = 0;
					chara.vy = 0;
					chara.isMoving = false;
					chara.jumpCount = 0;
					if(chara.route.length<=0){
						chara.EVEN = false;
					}
					break;
				//攻撃
				case 10*AT + r_Up:
				case 10*AT + r_Down:
				case 10*AT + l_Down:
				case 10*AT + l_Up:
					chara.isMoving = true;
					chara.attack = false;
					chara.attacking = true;
					chara.direction = move-10*AT;
					if(chara.direction==0){chara.vx=4;chara.vy=-2}
					else if(chara.direction==1){chara.vx=4;chara.vy=2}
					else if(chara.direction==2){chara.vx=-4;chara.vy=2}
					else if(chara.direction==3){chara.vx=-4;chara.vy=-2}
					else if(chara.direction==5){chara.vx=-4;chara.vy=2}
					else if(chara.direction==6){chara.vx=-4;chara.vy=2}
					else if(chara.direction==7){chara.vx=-4;chara.vy=2}
					else if(chara.direction==8){chara.vx=-4;chara.vy=2}
					break;

				default:
					chara.isMoving = false;
					chara.vx = 0;
					chara.vy = 0;
					break;
			}
			//ジャンプしていれば
			if(10<=move && move<20){
				chara.vy -= 12;
				chara.jumping = true;
			}
	}}
}

//右上移動
var rUp = function(chara){
			chara.isMoving = true;
			chara.direction = r_Up;
			chara.vx = VX;
			chara.vy = -1* VY;
			chara.qy--;
}
//右下移動
var rDown = function(chara){
			chara.isMoving = true;
			chara.direction = r_Down;
			chara.vx = VX;
			chara.vy = VY;
			chara.qx++;
}
//左下移動
var lDown = function(chara){
			chara.isMoving = true;
			chara.direction = l_Down;
			chara.vx = -1*VX;
			chara.vy = VY;
			chara.qy++;
}
//左上移動
var lUp = function(chara){
			chara.isMoving = true;
			chara.direction = l_Up;
			chara.vx = -1*VX;
			chara.vy = -1*VY;
			chara.qx--;
}
//攻撃
var attack = function(chara1, chara2, sound){
	sound.stop();
	sound.play();
	//右上
	if(chara1.qx-chara2.qx==0 && chara1.qy-chara2.qy>0){
		chara1.route.push(AT*10+r_Up);
	}
	//右下
	else if(chara1.qx-chara2.qx<0 && chara1.qy-chara2.qy==0){
		chara1.route.push(AT*10+r_Down);
	}
	//左下
	else if(chara1.qx-chara2.qx==0 && chara1.qy-chara2.qy<0){
		chara1.route.push(AT*10+l_Down);
	}
	//左上
	else if(chara1.qx-chara2.qx>0 && chara1.qy-chara2.qy==0){
		chara1.route.push(AT*10+l_Up);
	}
}

//キャラがイベントを終了したか判定
var search_flag = function(){
	for(var i=0; i<charas.length; i++){
		if(charas[i].EVEN){
			return false;
	}}
	return true;
}
//キャラの列から　キャラを消去
var clear_chara = function(chara){
	var re_charas = [];
	for(var i=0; i<charas.length; i++){
		if(charas[i] != chara){
			re_charas.push(charas[i]);
		}
	}
	charas = re_charas;
}


//オブジェクト　作成
var create_obj = function(image, point, width){
	var obj 	= new Sprite(width, width);
	obj.lv		= 0;
	obj.image	= image;
	obj.qx		= point_[point][0];
	obj.qy		= point_[point][1];
	obj.x		= SX + masuW/2*obj.qx - masuW/2*obj.qy;
	obj.y		= SY + masuW/4*obj.qy + masuW/4*obj.qx - width/2;
	obj.wd		= width;
	obj.set		= false;
	obj.point 	= point;
	return obj;
}

//キャラ　レベルアップ処理　(画像切り替え)
var cLv_Up = function(chara, image, lvup, stage, sound){
	if(image){
		chara.image = image;
	}
	chara.lv	+= 1;
	sound.stop();
	sound.play();
	level_up(lvup, chara.qx, chara.qy, chara.wd, stage)
}
//オブジェクト　レベルアップ処理　
var oLv_Up = function(obj, lvup, stage, sound){
	obj.direction += 1;
	obj.frame 	+= 1;
	obj.lv		+= 1;
	sound.stop();
	sound.play();
	level_up(lvup, obj.qx, obj.qy, obj.wd, stage)
}

//重なり順変更 　（配列の順で奥から描画）
var re_stage = function(objs, stage){
	for(var i=0; i<objs.length; i++){
		stage.removeChild(objs[i]);
		stage.addChild(objs[i]);
	}
}

//レベルアップ　画像表示
var level_up = function(image, qx, qy, width, stage){
	var levelUp = new Sprite(128, 64);
	levelUp.image = image;
	levelUp.x		= SX + masuW/2*qx - masuW/2*qy -32;
	levelUp.y		= SY + masuW/4*qy + masuW/4*qx - width/2;
	levelUp.count	= 0;
	
	stage.addChild(levelUp);
	
	levelUp.addEventListener('enterframe', function(e){
		if(this.count>8){
			stage.removeChild(this);
		}
		this.count++;
	});
}

//アイコン作成
var create_icon = function(image, x, y, stage, stage1, chara, SET_NO, sound2){
	var icon = new Sprite(64, 64);
	icon.image = image;
	icon.x = x;
	icon.y = y;
	stage.addChild(icon);
	icon.addEventListener('touchstart', function(e) {
		if(!E_FLAG){
			sound2.play();
			EVEN = SET_NO;
			chara.set = true;
			charas.push(chara);
			stage1.addChild(chara);
			stage.removeChild(this);
			COUNT++;
			//hero_flag = true;
		}
	});
}
//ウィンドウ表示
var popup = function(text, stage, count){
	var ctx = new Surface(200, 100);
	var pop = new Sprite(200, 100);
	ctx.context.fillStyle = 'rgba(255,100,255, 0.5)';
	ctx.context.beginPath();
	ctx.context.fillRect(4, 4, 196, 96);
	ctx.context.fillStyle = 'rgb(0, 0, 0)'; //黒色
	ctx.context.font = "20px 'メイリオ'";
    ctx.context.fillText(text, 10, 30);
	
	pop.image = ctx;
	pop.x = 120;
	pop.y = 200;
	pop.count = 0;
	stage.addChild(pop);
	
	pop.addEventListener('enterframe', function(e){
		if(this.count>count && count>=0){
			stage.removeChild(this);
		}
		this.count++;
	});
}
