enchant.Sound.enabledInMobileSafari = true;
enchant();
window.onload = function() {

    var game = new Game(480,480);
    //game.scale = 1;
    game.fps = 18;
    var WIDTH = game.width;
	var HEIGHT = game.height;
	
	//ゲームオーバー　フラグ
	var OVER = false;
	//ゲームクリア　フラグ
	var CLEAR = false;
	
    game.preload('http://tukushimbo.web.fc2.com/sample3/images/hero01.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/born01.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/born02.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/born20_t.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/born30_t.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/born40_t.png',
    			 'http://tukushimbo.web.fc2.com/sample3/images/born50_t.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/coin.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/cort.png',
    			 'http://tukushimbo.web.fc2.com/sample3/images/map2.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/srime01.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/srime02.png',
    			 'http://tukushimbo.web.fc2.com/sample3/images/srime03.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/srime04.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/shop1_t.png', 
    			 'http://tukushimbo.web.fc2.com/sample3/images/level.png',
    			  'http://tukushimbo.web.fc2.com/sample3/images/box_1_t.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/sord.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/meat.png',
    			  'http://tukushimbo.web.fc2.com/sample3/images/born_i.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/box_i.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/shop_i.png',
    			  'http://tukushimbo.web.fc2.com/sample3/images/sord_i.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/srime_i.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/meat_i.png',
    			  'http://tukushimbo.web.fc2.com/sample3/images/maou.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/question.png', 
    			  'http://tukushimbo.web.fc2.com/sample3/images/2012_03_25.png');
    
    //game.se		= Sound.load('BGM/old_Gold.mp3');
    //game.se1	= Sound.load('BGM/Lvup_1.mp3');
    //game.se	= Sound.load('BGM/bug_and_boy.mp3');
    //ＢＧＭ
   	var sound_m 	= Sound.load('http://tukushimbo.web.fc2.com/sample3/BGM/old_Gold.mp3');
   	var sound_lv 	= Sound.load('http://tukushimbo.web.fc2.com/sample3/BGM/Lvup_1.mp3');
   	//var sound_b		= Sound.load('BGM/button1.mp3');
   	var sound_set 	= Sound.load('http://tukushimbo.web.fc2.com/sample3/BGM/set.mp3');
   	var sound_at 	= Sound.load('http://tukushimbo.web.fc2.com/sample3/BGM/attack.mp3');
   	var sound_dd 	= Sound.load('http://tukushimbo.web.fc2.com/sample3/BGM/dead.mp3');

    
    game.onload = function() {
    	game.rootScene.backgroundColor = 'rgb(240,240,240)';
    	//画像
    	var image_map	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/map2.png'];		//背景
    	var image_back	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/2012_03_25.png'];	//背景
    	//var image_c1	= game.assets['images/hero01.png'];		//魔王
    	var image_b1	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born01.png'];		//ガイコツ１
    	var image_b2	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born02.png'];		//ガイコツ 　コート
    	var image_b3	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born50_t.png'];	//ガイコツ　剣
    	var image_b4 	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born20_t.png'];	//ガイコツ  コート＋剣
    	var image_b5	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born30_t.png'];	//ガイコツ　コート＋盾
    	var image_b6	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born40_t.png'];	//ガイコツ　コート＋剣＋盾
    	var image_h1	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/hero01.png'];		//勇者1
    	var image_h2	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/hero01.png'];		//勇者2
    	var image_h3	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/hero01.png'];		//勇者3
    	var image_s1	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/srime01.png'];	//スライム１
    	var image_s2	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/srime02.png'];	//スライム2
    	var image_s3	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/srime03.png'];	//スライム3
    	
    	var image_s4	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/srime04.png'];	//スライム4
    	var image_sh	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/shop1_t.png'];	//ショップ
    	var image_sd	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/sord.png'];		//剣
    	var image_bx	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/box_1_t.png'];	//ボックス
    	var image_lv	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/level.png'];		//レベルアップ
    	var image_mt	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/meat.png'];		//エサ
    	var image_coin	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/coin.png'];		//コイン
    	var image_cort	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/cort.png'];		//コート
    	var image_maou	= game.assets['http://tukushimbo.web.fc2.com/sample3/images/maou.png'];		//まおう
    	var image_q		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/question.png'];	//？
    	
    	//アイコン画像
    	var icon_bn		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/born_i.png'];
    	var icon_bx		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/box_i.png'];
    	var icon_mt		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/meat_i.png'];
    	var icon_sh		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/shop_i.png'];
    	var icon_sd		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/sord_i.png'];
    	var icon_sm		= game.assets['http://tukushimbo.web.fc2.com/sample3/images/srime_i.png'];
   
    	//シーン
    	var main = new Scene();				//メインのシーン
    	game.rootScene.addChild(main);
    	
    	//グループ
		var stage = new Group();			//キャラ表示用
		var stage0 = new Group();			//マップ表示用
		var stage1 = new Group();			//アイコン表示用
		var stage2 = new Group();			//レベルアップ
		main.addChild(stage0);
		main.addChild(stage);
		main.addChild(stage2);
		main.addChild(stage1);
		
		

		
    	
    	//デバッグ用
		//var text2 = new MutableText(5, 20, game.width, "", 1);
		//game.rootScene.addChild(text2);
    	//var t2 ="";
    	//var text3 = new MutableText(5, 40, game.width, "", 1);
		//game.rootScene.addChild(text3);
    	//var t1 ="";
    	//text3.setText(t1);

    	
    	//マップ初期化----------------------------------------------------
    	var back = new Sprite(480, 480);
    	var map = new Sprite(480, 480);
    	back.image = image_back;
    	map.image = image_map;
    	stage0.addChild(back);
    	stage0.addChild(map);
    	//----------------------------------------------------
    	
    	
	 	//キャラ初期化----------------------------------------------
	 	var maou	= create_chara(image_maou, MAOU, 64);
	 	var hero1 	= create_chara(image_h1, ENT, 64);	
	 	var hero2 	= create_chara(image_h2, ENT, 64);	
	 	var hero3 	= create_chara(image_h3, ENT, 64);	
	 	var born 	= create_chara(image_b1, BORN, 64);
	 	var srime1	= create_chara(image_s1, SRIME, 64);
	 	var srime2	= create_chara(image_s2, SRIME, 64);
	 	var srime3	= create_chara(image_s3, SRIME, 64);
	 	var srime4	= create_chara(image_s4, SRIME ,64);
	 	var box		= create_obj(image_bx, BOX, 128);
	 	var shop	= create_obj(image_sh, SHOP, 128);
	 	var sord	= create_obj(image_sd, SORD, 64);
	 	var meat	= create_obj(image_mt, MEAT, 64);
	 	var cort	= create_obj(image_cort, MEAT, 64);
	 	var coin	= create_obj(image_coin, SHOP_F, 64);
	 	var qu		= create_obj(image_q, SHOP_F, 64);
	 	
	 	stage.addChild(maou);
	 	
	 	born.direction	= l_Down;
	 	srime1.direction = l_Down;
	 	
	 	shop.frame = 0;
	 	shop.x +=10;
	 	shop.scaleX = 1.2;
	 	shop.scaleY = 1.2;
	 	box.direction = 0;
	 	box.scaleX = 0.7;
	 	box.scaleY = 0.7;
	 	box.frame = 0;
	 	box.x -= 16;
	 	box.y -= 10;
	 	box.count = 0;
	 	meat.scaleX = -1;
	 	
	 	born.cort = false;
	 	born.sord = false;
	 	born.coin = false;
	 	born.tate = false;
	 	born.count = 0;
	 	
	 	coin.count = 0;
	 	qu.count = 0;
	 	
	 	//勇者のオブジェクトに対する　フラグ
	 	hero1.shop	=hero2.shop	=hero3.shop	=false;
	 	hero1.born 	=hero2.born	=hero3.born	=false;
	 	hero1.box  	=hero2.box	=hero3.box	=false;
	 	hero1.srime	=hero2.srime=hero3.srime=false;
	 	hero1.sord	=hero2.sord	=hero3.sord	=false;
	 	hero1.meat	=hero2.meat	=hero3.meat	=false;
	 	
	 	//----------------------------------------------------
	 	
	 	//アイコン表示--------------------------------------------
    	create_icon(icon_bn, 30, 250, game.rootScene, stage, born, SET_BORN, sound_set);
    	create_icon(icon_bx, 30, 320, game.rootScene, stage, box, SET_BOX, sound_set);
    	create_icon(icon_mt, 30, 390, game.rootScene, stage, meat, SET_MEAT, sound_set);
    	create_icon(icon_sh, 380, 250, game.rootScene, stage, shop, SET_SHOP, sound_set);
    	create_icon(icon_sd, 380, 320, game.rootScene, stage, sord, SET_SORD, sound_set);
    	create_icon(icon_sm, 380, 390, game.rootScene, stage, srime1, SET_SRIME, sound_set);
	 	//----------------------------------------------------
	 	
	 	//BGM----------------------------------------------------
	 	sound_m.volume = 0.3;
	 	//sound_m.play();
	 	//ＢＧＭの有無ボタン
	 	var volume = new Sprite(64, 64);		
	 	volume.image = image_lv;
	 	volume.x = 200;
	 	volume.y = 400;
	 	volume.value = true;
	 	game.rootScene.addChild(volume);
	 	volume.addEventListener('touchstart',function(e){
	 		if(this.value){
	 			sound_m.volume = 0;
	 			this.value = false;
	 		}else{
	 			sound_m.volume = 0.3;
	 			this.value = true;
	 		}
	 	})
	 	//----------------------------------------------------
	 	
	 	//イベント------------------------------------------------------
		game.rootScene.addEventListener('enterframe', function(e){	
			sound_m.play();

			if(!OVER){
				//キャラのイベント実行--------------------------------------------------
				if(EVEN!=NOT_DO  &&!hero1.set&&!hero2.set&&!hero3.set){
					//スライム＋エサ---------------------------------------------
					if(srime1.set && meat.set && !srime1.EV_END){
						if(!srime1.EVEN && !srime1.ini){
							re_stage([srime1, meat], stage);
							srime1.route = route_(srime1.point*10+MEAT);
							srime1.EVEN = true;
							srime1.ini = true;
							E_FLAG = true;
						}else{
							if(!srime1.EVEN){
								if(!srime2.set){
									stage.removeChild(meat);
									srime1.point = MEAT;
									cLv_Up(srime1, '', image_lv, stage2, sound_lv);
									srime2.set = true;
									chara_point(srime2, MEAT);
									srime2.EVEN = true;
									srime2.route = [12];
									stage.addChild(srime2);
								}else if(!srime2.EVEN){
									meat.set = false;
									srime1.EV_END = true;
									srime2.EV_END = true;
									//EVEN = NOT_DO;
									//E_FLAG = false;
					}}}}
					//--------------------------------------------------
					//スライム＋ボックス----------------------------------------
					else if(!(srime1.EV_END || srime2.EV_END || srime3.EV_END || srime4.EV_END)
								&& box.set && (srime1.set||srime2.set||srime3.set||srime4.set)){
						if(!srime1.EVEN && !srime2.EVEN && !srime3.EVEN && !srime4.EVEN
							&& !srime1.ini && !srime2.ini && !srime3.ini && !srime4.ini){
							var list = [box];
							
							if(srime4.set){ 
								srime4.ini = true;
								srime4.route = [42,44,44,44,44,44,44,44,44,44,44,44,44,44,2].concat(route_(srime1.point*10+BOX));
								srime4.route.pop(); 
								srime4.route.push(10); 
								srime4.EVEN = true; list.push(srime4);
							}
							if(srime3.set){ 
								srime3.ini = true;
								srime3.route = [41,44,44,44,44,44,44,44,44,44,1].concat(route_(srime1.point*10+BOX)); 
								srime3.route.pop(); 
								srime3.route.push(10); 
								srime3.EVEN = true; list.push(srime3);
							}
							srime1.ini = true;
							srime1.EVEN = true;
							srime1.route = route_(srime1.point*10+BOX);
							srime1.route.pop(); 
							srime1.route.push(10); 
							list.push(srime1);
							if(srime2.set){ 
								srime2.ini = true;
								srime2.route = [40,44,44,0].concat(route_(srime1.point*10+BOX)); 
								srime2.route.pop(); 
								srime2.route.push(10); 
								srime2.EVEN = true; list.push(srime2);
							}
							
							re_stage(list, stage);
	
							E_FLAG = true;
						}else{
							if(srime1.set){if(!srime1.EVEN){
								srime1.set = false;
								stage.removeChild(srime1);
								oLv_Up(box,image_lv, stage2, sound_lv);
							}}
							if(srime2.set){if(!srime2.EVEN){
								srime2.set = false;
								stage.removeChild(srime2);
								oLv_Up(box, image_lv, stage2, sound_lv);
							}}
							if(srime3.set){if(!srime3.EVEN){
								srime3.set = false;
								stage.removeChild(srime3);
								oLv_Up(box, image_lv, stage2, sound_lv);
							}}
							if(srime4.set){ if(!srime4.EVEN){
								srime4.set = false;
								stage.removeChild(srime4);
								oLv_Up(box, image_lv, stage2, sound_lv);
							}}
							
							if(srime1.lv==3){
								if(!srime4.EVEN){
									clear_chara(srime1);clear_chara(srime2);
									clear_chara(srime3);clear_chara(srime4);
									srime1.EV_END = true;srime2.EV_END = true;
									srime3.EV_END = true;srime4.EV_END = true;
							}}
							else if(srime1.lv==2){
								if(!srime3.EVEN){
									clear_chara(srime1);clear_chara(srime2);
									clear_chara(srime3);
									srime1.EV_END = true;srime2.EV_END = true;
									srime3.EV_END = true;
							}}
							else if(srime1.lv==1){
								if(!srime2.EVEN){
									clear_chara(srime1);clear_chara(srime2);
									srime1.EV_END = true;srime2.EV_END = true;
							}}
							else if(srime1.lv==0){
								if(!srime1.EVEN){
									clear_chara(srime1);
									srime1.EV_END = true;
							}}
					}}
					//---------------------------------------------////////////
					//ガイコツ＋コイン　=>　盾--------------------------------------------
					if(born.set && born.coin && !born.EV_END){
						if(!born.EVEN && !born.ini && born.count==0){
							born.route = route_(SHOP_B*10 + ENT);
							born.EVEN = true;
							born.ini = true;
							E_FLAG = true;
							born.count = 1;
						}
						if(!born.EVEN && born.count==1){
							stage.removeChild(born);
							born.ini = false;
							born.EV_END = true;
							born.count = 2;
							born.EV_END = true;
						}
						if(!born.EVEN && !born.ini && born.count==2 && !born.EV_END){
							born.image = image_b5;
							stage.addChild(born);
							cLv_Up(born, '', image_lv, stage2, sound_lv);
							born.coin = false;
							born.ini = false;
							born.point = ENT;
							born.route = [42,44,44,44,44,44,44,44];
							//born.EV_END = true;
						}
					}
					//---------------------------------------------////////////
					//ガイコツ＋コート--------------------------------------------
					if(born.set && cort.set && !born.EV_END){
						if(!born.EVEN && !born.ini){
							born.route = route_(born.point*10+cort.point);
							born.EVEN = true;
							born.ini = true;
							E_FLAG = true;
						}else if(!born.EVEN){
							if(!born.sord){
								cort.set = false;
								born.point = cort.point;
								stage.removeChild(cort);
								cLv_Up(born, image_b2, image_lv, stage2, sound_lv);
								born.EV_END = true;
								born.cort = true;
							}else if(born.sord){
								cort.set = false;
								born.point = cort.point;
								stage.removeChild(cort);
								cLv_Up(born, image_b4, image_lv, stage2, sound_lv);
								born.EV_END = true;
								born.cort = true;
							}
					}}
					//---------------------------------------------////////////
					//ガイコツ＋剣
					if(born.set && sord.set && !born.EV_END){
						if(!born.EVEN && !born.ini){
							re_stage([sord, born], stage);
							born.route = route_(born.point*10+SORD);
							born.route.push(42);
							born.ini = true;
							born.EVEN = true;
							E_FLAG = true;
						}else{
							if(!born.EVEN){
								//初期
								if(born.lv == 0){
									born.point = SORD;
									sord.set = false;
									clear_chara(sord);
									stage.removeChild(sord);
									cLv_Up(born, image_b3, image_lv, stage2, sound_lv);
									born.EV_END = true;
									born.sord = true;
									//EVEN = NOT_DO;
									//E_FLAG = false;
								//盾持ち
								}else if(born.lv==2){
									born.point = SORD;
									sord.set = false;
									clear_chara(sord);
									stage.removeChild(sord);
									cLv_Up(born, image_b6, image_lv, stage2, sound_lv);
									born.EV_END = true;
									born.sord = true;
								//コートだけ
								}else if(born.cort && born.lv==1){
									born.point = SORD;
									sord.set = false;
									clear_chara(sord);
									stage.removeChild(sord);
									cLv_Up(born, image_b4, image_lv, stage2, sound_lv);
									born.EV_END = true;
									born.sord = true;
								}
					}}}
					//ガイコツ＋ショップ
					else if(born.set && shop.set && shop.lv==0 && !born.EV_END &&!born.coin){
						if(!born.EVEN && !born.ini){
							re_stage([born,shop], stage);
							born.route = route_(born.point*10+SHOP_B);
							born.route.push(41);
							born.ini = true;
							born.EVEN = true;
							E_FLAG = true;
						}else if(!born.EVEN && born.ini){
							born.point = SHOP_B;
							oLv_Up(shop, image_lv, stage2, sound_lv);
							shop.frame = 3;
							shop.lv = 1;
							born.EV_END = true;
							//EVEN = NOT_DO;
							//E_FLAG = false;
					}}
				}
				//-----------------------------------------------------------------
				//キャラの実行が終わっていれば
				if(!srime1.EVEN && !srime2.EVEN && !srime3.EVEN && !srime4.EVEN && !born.EVEN){
					if(EVEN != NOT_DO){
						//勇者が出ないとき　イベント終了 
						if(COUNT%2 != 0){
							E_FLAG = false;
							EVEN = NOT_DO;
							FLAG2=false;
						}
						//カウント２　勇者１
						if(COUNT==2 && !hero1.EV_END){
							//勇者表示------------------------
							if(!hero1.set){
								popup("侵入者が来ました！！", stage2, 20);
								stage.addChild(hero1);
								hero1.set = true;
								srime1.EV_END = false; srime1.ini = false;
								srime2.EV_END = false; srime2.ini = false;
								srime3.EV_END = false; srime3.ini = false;
								srime4.EV_END = false; srime4.ini = false;
								born.EV_END = false;   born.ini = false;
								box.EV_END = false;		box.ini = false;
							}
							//-------------------------------////////////
							//ショップ(ガイコツなし)-------------------------------------------
							if(shop.set && born.point!=SHOP_B && !hero1.shop){
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10+SHOP_F);
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else if(!hero1.EVEN){
									if(qu.count==0){
										qu.count++;
										stage.addChild(qu);
									}
									else if(qu.count<10){
										qu.count++;
									}
									if(!hero1.EVEN && qu.count==10){
										stage.removeChild(qu);
										qu.count=0;
										hero1.point = SHOP_F;
										hero1.shop = true;
										hero1.ini = false;
							}}}
							//----------------------------------------------------/////////
							//ショップ（ガイコツあり）-------------------------------------------
							else if(shop.set && born.set && !hero1.born &&!hero1.shop){
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10+born.point);
									hero1.route.pop();
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else{
									if(!hero1.EVEN && !hero1.attacking && !hero1.attack){
										attack(hero1, born, sound_at);
										//born.attack = true;
									}else if(!hero1.EVEN && hero1.attack){
										if(!born.EVEN && !born.attacking && !born.attack){
											attack(born, hero1, sound_at);
										}else if(!born.EVEN && born.attack){
											hero1.point = SHOP_F;
											hero1.shop = true;
											hero1.born = true;
											hero1.ini = false;
											hero1.set = false;
											hero1.attack = false;
											sound_dd.stop();
											sound_dd.play();
											hero1.EV_END = true;
											E_FLAG = false;
											stage.removeChild(hero1);
											//コート設置
											chara_point(cort, born.point);
											re_stage([born,cort,shop],stage);
							}}}}
							//----------------------------------------------------/////////
							//スライム-------------------------------------------
							else if(srime1.set && !hero1.srime){
								if(srime1.lv==0){
									if(!hero1.EVEN && !hero1.ini){
										hero1.route = route_(hero1.point*10+srime1.point);
										hero1.route.pop();
										hero1.EVEN = true;
										hero1.ini = true;
										E_FLAG = true;
									}else{
										if(!hero1.EVEN && !hero1.attacking && !hero1.attack){
											hero1.point = srime1.point;
											attack(hero1, srime1, sound_at);
										}else if(!hero1.EVEN && hero1.attack){
											hero1.srime = true;
											srime1.set = false;
											hero1.attack = false;
											stage.removeChild(srime1);
											sound_dd.stop();
											sound_dd.play();
											hero1.ini = false;
											hero1.route = [3];
									}}
									
								}else if(srime1.lv==1){
									if(!hero1.EVEN && !hero1.ini){
										hero1.route = route_(hero1.point*10+srime1.point);
										hero1.route.pop();
										hero1.EVEN = true;
										hero1.ini = true;
										E_FLAG = true;
									}else{
										if(!hero1.EVEN && !hero1.attacking && !hero1.attack){
											hero1.point = srime1.point;
											attack(hero1, srime1, sound_at);
										}else if(!hero1.EVEN && hero1.attack){
											if(!srime1.EVEN&&!srime1.attack&&!srime1.attacking){
												attack(srime1, hero1, sound_at);
											}else if(!srime1.EVEN&&srime1.attack){
												if(!srime2.ini){
													srime2.route=[0];
													srime2.ini = true;
												}
												if(!srime2.EVEN&&!srime2.attack&&!srime2.attacking){
													attack(srime2, hero1, sound_at);
												}else if(!srime2.EVEN&&srime2.attack&&!srime3.set){
													srime3.set = true;
													chara_point(srime3, srime1.point);
													srime2.route = [2];
													srime3.route = [3];
													cLv_Up(srime1, '', image_lv, stage2, sound_lv);
													stage.addChild(srime3);
													hero1.set = false;
													stage.removeChild(hero1);
													sound_dd.stop();
													sound_dd.play();
													hero1.EV_END = true;
													E_FLAG = false;
													stage.removeChild(hero1);
													//コート設置
													chara_point(cort, srime1.point);
													re_stage([srime1,srime2,cort],stage);
												}
											}
									}}
								}
							}
							//----------------------------------------------------/////////
							//ミミック（srime+box）----------------------------------------------------
							else if(box.set && box.lv>0 && !hero1.box){
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10 + BOX);
									hero1.route.pop();
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else if(!hero1.EVEN){
									if(!box.EVEN && !box.attack){
										if(box.count == 0){
											box.frame += 4;
											sound_at.play();
										}else if(box.count >6){
											box.attack = true;
										}
										box.count++;
									}else if(!box.EVEN && box.attack){
										hero1.point = BOX;
										box.frame -= 4;
										hero1.box = true;
										hero1.ini = false;
										hero1.set = false;
										sound_dd.stop();
										sound_dd.play();
										hero1.EV_END = true;
										E_FLAG = false;
										stage.removeChild(hero1);
										//コート設置
										chara_point(cort, BOX);
										re_stage([box,cort],stage);
							}}}
							//----------------------------------------------------////////
							//ガイコツ-------------------------------------------
							else if(born.set && !hero1.born){
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10+born.point);
									hero1.route.pop();
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else{
									if(!hero1.EVEN && !hero1.attacking && !hero1.attack){
										hero1.point = born.point;
										attack(hero1, born, sound_at);
										//born.attack = true;
									}else if(!hero1.EVEN && hero1.attack){
										if(!born.EVEN && !born.attacking && !born.attack){
											attack(born, hero1, sound_at);
										}else if(!born.EVEN && born.attack){
											hero1.point = SHOP_F;
											hero1.shop = true;
											hero1.born = true;
											hero1.ini = false;
											hero1.set = false;
											sound_dd.stop();
											sound_dd.play();
											hero1.EV_END = true;
											E_FLAG = false;
											stage.removeChild(hero1);
											//コート設置
											chara_point(cort, born.point);
											re_stage([born,cort],stage);
							}}}}
							//----------------------------------------------------/////////
							//剣----------------------------------------------------
							else if(sord.set && !hero1.sord){
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10 + SORD);
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else{
									if(!hero1.EVEN){
										sord.set = false;
										hero1.sord = true;
										stage.removeChild(sord);
										hero1.point = SORD;
										cLv_Up(hero1, '', image_lv, stage2, sound_lv);
										hero1.ini = false;
									}
								}
							}
							//----------------------------------------------------///////////
							//魔王のとこ----------------------------------------------------
							else{
								if(!hero1.EVEN && !hero1.ini){
									hero1.route = route_(hero1.point*10+MAOU);
									hero1.route.pop();
									hero1.EVEN = true;
									hero1.ini = true;
									E_FLAG = true;
								}else{
									if(!hero1.EVEN){
										if(!hero1.attack&&!hero1.attacking){
											hero1.point = MAOU;
											attack(hero1, maou, sound_at);
										}else if(hero1.attack){
											hero1.EV_END = true;
											hero1.ini = false;
											E_FLAG = false;
											EVEN = NOT_DO;
											OVER = true;
										}
							}}}
							//----------------------------------------------------/////////
						}
						
						//カウント4　勇者2---------------------------------------------------
						if(COUNT==4){
							//勇者表示------------------------
							if(!hero2.set){
								popup("侵入者が来ました！！", stage2, 20);
								hero2.set = true;
								hero1.point = ENT;
								stage.addChild(hero2);
								hero1.EVEN = false;
								srime1.EV_END = false; srime1.ini = false;
								srime2.EV_END = false; srime2.ini = false;
								srime3.EV_END = false; srime3.ini = false;
								srime4.EV_END = false; srime4.ini = false;
								born.EV_END = false;   born.ini = false;
								box.EV_END = false;		box.ini = false;
							}
							//-------------------------------////////////
							//ショップ(ガイコツなし)-------------------------------------------
							if(shop.set && born.point!=SHOP_B && !hero2.shop){
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10+SHOP_F);
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else{
									if(!hero2.EVEN){
										if(shop.lv==0){
											if(qu.count==0){
												qu.count++;
												stage.addChild(qu);
											}
											else if(qu.count<10){
												qu.count++;
											}
											if(!hero2.EVEN && qu.count==10){
												stage.removeChild(qu);
												qu.count=0;
												hero2.point = SHOP_F;
												hero2.shop = true;
												hero2.ini = false;
											}
										}
										if(shop.lv==1){
											cLv_Up(hero2, '', image_lv, stage, sound_lv);
											shop.frame = 1;
											shop.lv--;
											hero2.point = SHOP_F;
											hero2.shop = true;
											hero2.ini = false;
										}
							}}}
							//----------------------------------------------------/////////
							//ショップ（ガイコツあり）-------------------------------------------
							else if(shop.set && born.set && !hero2.born &&!hero2.shop){
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10+SHOP_F);
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else if(!hero2.EVEN){
									//ガイコツがコートをかぶっていない   レベルが高い
									if(!born.cort || (born.lv>1&&born.cort)){
										if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = SHOP_F;
											attack(hero2, born, sound_at);
											//born.attack = true;
										}else if(!hero2.EVEN && hero2.attack){
											if(!born.EVEN && !born.attacking && !born.attack){
												attack(born, hero2, sound_at);
											}else if(!born.EVEN && !born.attacking && born.attack){
												hero2.point = SHOP_F;
												hero2.shop = true;
												hero2.born = true;
												hero2.ini = false;
												hero2.set = false;
												hero2.attack = false;
												sound_dd.stop();
												sound_dd.play();
												hero2.EV_END = true;
												E_FLAG = false;
												stage.removeChild(hero2);
									//ガイコツがコートを被っていない　+　レベルが低い
									}}}else if(!born.cort || (born.lv<1&&born.cort)){
											if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = SHOP_F;
											attack(hero2, born, sound_at);
											//born.attack = true;
										}else if(!hero2.EVEN && hero2.attack){
											sound_dd.stop();
											sound_dd.play();
											born.set = false;
											hero2.attack = false;
											stage.removeChild(born);
											hero2.shop = true;
											hero2.born = true;
											hero2.ini = false;
										}
									}
									//コートを被っている
									else if(born.cort && born.lv == 1){
										if(coin.count==0){
											shop.frame = 1;
											cLv_Up(hero2, '', image_lv, stage2, sound_lv);
											stage.addChild(coin);
											coin.vx=-4;
											coin.vy=-20;
										}
										if(coin.count<9){
											coin.moveBy(coin.vx, coin.vy);
											coin.vy+=4;
											coin.count++;
										}else if(coin.count>=9){
											hero2.point = SHOP_F;
											hero2.shop = true;
											hero2.born = true;
											hero2.ini = false;
											born.coin = true;
											shop.lv--;
											stage.removeChild(coin);
									}}
							}}
							//----------------------------------------------------/////////
							//スライム-------------------------------------------
							else if(srime1.set && !hero2.srime){
								if(srime1.lv==0){
									if(!hero2.EVEN && !hero2.ini){
										hero2.route = route_(hero2.point*10+srime1.point);
										hero2.route.pop();
										hero2.EVEN = true;
										hero2.ini = true;
										E_FLAG = true;
									}else{
										if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = srime1.point;
											attack(hero2, srime1, sound_at);
										}else if(!hero2.EVEN && hero2.attack){
											hero2.srime = true;
											srime1.set = false;
											stage.removeChild(srime1);
											sound_dd.stop();
											sound_dd.play();
											hero2.ini = false;
											hero2.route = [3];
									}}
									
								}else if(srime1.lv==1){
									if(!hero2.EVEN && !hero2.ini){
										hero2.route = route_(hero2.point*10+srime1.point);
										hero2.route.pop();
										hero2.EVEN = true;
										hero2.ini = true;
										E_FLAG = true;
									}else{
										if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = srime1.point;
											attack(hero2, srime1, sound_at);
										}else if(!hero2.EVEN && hero2.attack){
											hero2.srime = true;
											srime1.set = false;
											srime2.set = false;
											hero2.attack = false;
											stage.removeChild(srime1);
											stage.removeChild(srime2);
											sound_dd.stop();
											sound_dd.play();
											hero2.ini = false;
											hero2.route = [3];
										
								}}}else if(srime1.lv == 2){
									if(!hero2.EVEN && !hero2.ini){
										hero2.route = route_(hero2.point*10+srime1.point);
										hero2.route.pop();
										hero2.EVEN = true;
										hero2.ini = true;
										E_FLAG = true;
									}else{
										if(!hero2.EVEN&&!hero2.attacking && !hero2.attack){
											hero2.point = srime1.point;
											attack(hero2, srime1, sound_at);
										}else if(!hero2.EVEN&&hero2.attack){
											if(!srime1.EVEN&&!srime1.attack&&!srime1.attacking){
												attack(srime1, hero2, sound_at);
											}else if(!srime1.EVEN&&srime1.attack){
												if(!srime2.ini){
													srime2.route=[0];
													srime2.ini = true;
												}
												if(!srime2.EVEN&&!srime2.attack&&!srime2.attacking){
													attack(srime2, hero2, sound_at);
												}else if(!srime2.EVEN&&srime2.attack){
													if(!srime3.ini){
														srime2.route = [2];
														srime3.route=[1];
														srime3.ini = true;
													}
													if(!srime3.EVEN&&!srime3.attack&&!srime3.attacking){
														attack(srime3, hero2, sound_at);
													}else if(!srime3.EVEN&&srime3.attack&&!srime4.set){
														srime4.set = true;
														chara_point(srime4, srime1.point);
														srime3.route = [3];
														srime4.route = [0];
														cLv_Up(srime1, '', image_lv, stage2, sound_lv);
														stage.addChild(srime4);
														hero2.set = false;
														stage.removeChild(hero2);
														sound_dd.stop();
														sound_dd.play();
														hero2.EV_END = true;
														E_FLAG = false;
														re_stage([srime4,srime3,srime1,srime2],stage);
								}}}}}}
							}
							//----------------------------------------------------/////////
							//ミミック（srime+box）----------------------------------------------------
							else if(box.set && box.lv>0 && !hero2.box){
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10 + BOX);
									hero2.route.pop();
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else if(!hero2.EVEN){
									if(!box.EVEN && !box.attack){
										if(box.count == 0){
											box.frame += 4;
											sound_at.play();
										}else if(box.count >6){
											box.attack = true;
										}
										box.count++;
									}else if(!box.EVEN && box.attack){
										if(box.lv<2){
											if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
												box.frame -= 4;
												hero2.point = BOX;
												attack(hero2, box, sound_at);
											}else if(!hero2.EVEN && hero2.attack){
												sound_dd.stop();
												sound_dd.play();
												box.set = false;
												hero2.attack = false;
												stage.removeChild(box);
												hero2.box = true;
												hero2.route = [0];
												hero2.ini = false;
											}
										}else{
											hero1.point = BOX;
											box.frame -= 4;
											hero2.box = true;
											hero2.ini = false;
											hero2.set = false;
											sound_dd.stop();
											sound_dd.play();
											hero2.EV_END = true;
											E_FLAG = false;
											stage.removeChild(hero2);
										}
							}}}
							//----------------------------------------------------////////
							//ガイコツ-------------------------------------------
							else if(born.set && !hero2.born){
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10+born.point);
									hero2.route.pop();
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else{
									//ガイコツ剣持ち　で勇者死亡
									if(born.lv>1 || (!born.cort&&born.lv==1)){
										if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = born.point;
											attack(hero2, born, sound_at);
											//born.attack = true;
										}else if(!hero2.EVEN && hero2.attack){
											if(!born.EVEN && !born.attacking && !born.attack){
												attack(born, hero2, sound_at);
											}else if(!born.EVEN && born.attack){
												hero2.shop = true;
												hero2.born = true;
												hero2.ini = false;
												hero2.set = false;
												sound_dd.stop();
												sound_dd.play();
												hero2.EV_END = true;
												E_FLAG = false;
												stage.removeChild(hero2);
									}}}else{
										if(!hero2.EVEN && !hero2.attacking && !hero2.attack){
											hero2.point = born.point;
											attack(hero2, born, sound_at);
											//born.attack = true;
										}else if(!hero2.EVEN && hero2.attack){
											sound_dd.stop();
											sound_dd.play();
											born.set = false;
											hero2.ini = false;
											stage.removeChild(brn);
									}}
							}}
							//----------------------------------------------------/////////
							//剣----------------------------------------------------
							else if(sord.set && !hero2.sord){
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10 + SORD);
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else{
									if(!hero2.EVEN){
										sord.set = false;
										hero2.sord = true;
										stage.removeChild(sord);
										hero2.point = SORD;
										cLv_Up(hero2, '', image_lv, stage2, sound_lv);
										hero2.ini = false;
									}
								}
							}
							//----------------------------------------------------///////////
							//魔王のとこ----------------------------------------------------
							else{
								if(!hero2.EVEN && !hero2.ini){
									hero2.route = route_(hero2.point*10+MAOU);
									hero2.route.pop();
									hero2.EVEN = true;
									hero2.ini = true;
									E_FLAG = true;
								}else{
									if(!hero2.EVEN){
										if(!hero2.attack&&!hero2.attacking){
											hero2.point = MAOU;
											attack(hero2, maou, sound_at);
										}else if(hero1.attack){
											hero2.EV_END = true;
											hero2.ini = false;
											E_FLAG = false;
											EVEN = NOT_DO;
											OVER = true;
										}
							}}}
							//----------------------------------------------------/////////
						}
						//-----------------------------------------------------------/////////
						//カウント6　勇者3---------------------------------------------------
						if(COUNT==6){
							//勇者表示------------------------
							if(!hero3.set){
								popup("侵入者が来ました！！", stage2, 20);
								hero3.set = true;
								stage.addChild(hero3);
								hero2.EVEN = false;
								srime1.EV_END = false; srime1.ini = false;
								srime2.EV_END = false; srime2.ini = false;
								srime3.EV_END = false; srime3.ini = false;
								srime4.EV_END = false; srime4.ini = false;
								born.EV_END = false;   born.ini = false;
								box.EV_END = false;		box.ini = false;
							}
							//-------------------------------////////////
							//ショップ(ガイコツなし)-------------------------------------------
							if(shop.set && born.point!=SHOP_B && !hero3.shop){
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10+SHOP_F);
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else{
									if(!hero3.EVEN){
										if(shop.lv==0){
											if(qu.count==0){
												qu.count++;
												stage.addChild(qu);
											}
											else if(qu.count<10){
												qu.count++;
											}
											if(!hero1.EVEN && qu.count==10){
												stage.removeChild(qu);
												qu.count=0;
												hero3.point = SHOP_F;
												hero3.shop = true;
												hero3.ini = false;
											}
										}
										if(shop.lv==1){
											cLv_Up(hero3, '', image_lv, stage, sound_lv);
											shop.frame = 1;
											shop.lv--;
											hero3.point = SHOP_F;
											hero3.shop = true;
											hero3.ini = false;
										}
							}}}
							//----------------------------------------------------/////////
							//ショップ（ガイコツあり）-------------------------------------------
							else if(shop.set && born.set && !hero3.born &&!hero3.shop){
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10+SHOP_F);
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else if(!hero3.EVEN){
									if(!hero3.EVEN && !hero3.attacking && !hero3.attack){
										hero3.point = SHOP_F;
										attack(hero3, born, sound_at);
										//born.attack = true;
									}else if(!hero3.EVEN && hero3.attack){
										sound_dd.stop();
										sound_dd.play();
										hero3.born = true;
										born.set = false;
										stage.removeChild(born);
										hero3.ini = false;
										hero3.attack = false;
							}}}
							//----------------------------------------------------/////////
							//スライム-------------------------------------------
							else if(srime1.set && !hero3.srime){
									if(!hero3.EVEN && !hero3.ini){
										hero3.route = route_(hero3.point*10+srime1.point);
										hero3.route.pop();
										hero3.EVEN = true;
										hero3.ini = true;
										E_FLAG = true;
									}else{
										if(!hero3.EVEN && !hero3.attacking && !hero3.attack){
											hero3.point = srime1.point;
											attack(hero3, srime1, sound_at);
										}else if(!hero3.EVEN && hero3.attack){
											hero3.srime = true;
											srime1.set = false;
											srime2.set = false;
											srime3.set = false;
											srime4.set = false;
											stage.removeChild(srime1);
											stage.removeChild(srime2);
											stage.removeChild(srime3);
											stage.removeChild(srime4);
											sound_dd.stop();
											sound_dd.play();
											hero3.ini = false;
											hero3.route = [3];
											hero3.attack = false;
									}}
							}
							//----------------------------------------------------/////////
							//ミミック（srime+box）----------------------------------------------------
							else if(box.set && box.lv>0 && !hero3.box){
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10 + BOX);
									hero3.route.pop();
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else if(!hero3.EVEN){
									if(!box.EVEN && !box.attack){
										if(box.count == 0){
											box.frame += 4;
											sound_at.play();
										}else if(box.count >6){
											box.attack = true;
										}
										box.count++;
									}else if(!box.EVEN && box.attack){
										//ミミックレベル３以下｜｜勇者レベル」１で　ミミック死亡　
										if(box.lv<3 || hero3.lv==1){
											if(!hero3.EVEN && !hero3.attacking && !hero3.attack){
												box.frame -= 4;
												hero3.point = BOX;
												attack(hero3, box, sound_at);
											}else if(!hero3.EVEN && hero3.attack){
												sound_dd.stop();
												sound_dd.play();
												stage.removeChild(box);
												hero3.box = true;
												hero3.route = [0];
												hero3.ini = false;
												hero3.attack = false;
											}
										//それ以外で　勇者レベルダウン
										}else{
											hero3.point = BOX;
											hero3.route = [0];
											hero3.lv == 0;
											box.frame -= 4;
											hero3.box = true;
											hero3.ini = false;
											sound_dd.stop();
											sound_dd.play();
										}
							}}}
							//----------------------------------------------------////////
							//ガイコツ-------------------------------------------
							else if(born.set && !hero3.born){
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10+born.point);
									hero3.route.pop();
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else{
									if(!hero3.EVEN && !hero3.attacking && !hero3.attack){
										hero3.point = born.point;
										attack(hero3, born, sound_at);
									}else if(!hero3.EVEN && hero3.attack){
										//ガイコツMAX　ミミックMAX後 勇者死亡
										if(box.set&&hero3.box&&hero3.lv==0&&born.lv==3){
											if(!born.EVEN && !born.attacking && !born.attack){
												attack(born, hero3, sound_at);
											}else if(!born.EVEN && born.attack){
												hero3.point = born.point;
												hero3.born = true;
												hero3.ini = false;
												hero3.set = false;
												sound_dd.stop();
												sound_dd.play();
												hero3.EV_END = true;
												E_FLAG = false;
												CLEAR = true;
												stage.removeChild(hero3);
										//その他　ガイコツ死亡
										}}else{
											hero3.point = born.point;
											sound_dd.stop();
											sound_dd.play();
											born.set = false;
											hero3.born = true;
											hero3.ini = false;
											hero3.ini = false;
											hero3.attack = false;
											if(hero3.point==SORD){hero3.route=[0];}
											else{hero3.route=[3];}
											stage.removeChild(born);
										}
							}}}
							//----------------------------------------------------/////////
							//剣----------------------------------------------------
							else if(sord.set && !hero3.sord){
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10 + SORD);
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else{
									if(!hero3.EVEN){
										sord.set = false;
										hero3.sord = true;
										stage.removeChild(sord);
										hero3.point = SORD;
										cLv_Up(hero3, '', image_lv, stage2, sound_lv);
										hero3.ini = false;
									}
								}
							}
							//----------------------------------------------------///////////
							//魔王のとこ----------------------------------------------------
							else{
								if(!hero3.EVEN && !hero3.ini){
									hero3.route = route_(hero3.point*10+MAOU);
									hero3.route.pop();
									hero3.EVEN = true;
									hero3.ini = true;
									E_FLAG = true;
								}else{
									if(!hero3.EVEN){
										if(!hero3.attack&&!hero3.attacking){
											hero3.point = MAOU;
											attack(hero3, maou, sound_at);
										}else if(hero3.attack){
											hero3.EV_END = true;
											hero3.ini = false;
											E_FLAG = false;
											EVEN = NOT_DO;
											OVER = true;
										}
							}}}
							//----------------------------------------------------/////////
						}
						//-----------------------------------------------------------/////////
						
						//イベント終了-----------------------------------
						if(!E_FLAG){
							EVEN = NOT_DO;
							srime1.EV_END = false; srime1.ini = false; srime1.attack = false; srime1.attacking = false;
							srime2.EV_END = false; srime2.ini = false; srime2.attack = false; srime2.attacking = false;
							srime3.EV_END = false; srime3.ini = false; srime3.attack = false; srime3.attacking = false;
							srime4.EV_END = false; srime4.ini = false; srime4.attack = false; srime4.attacking = false;
							born.EV_END = false;   born.ini = false; born.attack = false; born.attacking = false; 
							box.EV_END = false;		box.ini = false; box.attack = false; box.attacking = false;
					}}
				}
				//t2="["+hero1.route+"]["+hero2.route+"]["+hero3.route+"]";
				//t2 = ""+born.lv;
				//text2.setText(t2);
				
				//ゲームクリア
				if(CLEAR && COUNT!=-1){
					popup("GAME CLEAR", game.rootScene, -1);
					COUNT = -1;
					stage0.removeChild(back);
					stage.addChild(back);
				}
				
				
			//ゲームオーバー
			}else{
				E_FLAG = true;
				popup("GAME OVER", stage2, -1);
			}
			//if(!E_FLAG){
			//}
		});	 
	 };
	 
	 
	 
	 
    game.start();
};