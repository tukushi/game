enchant.draw = { assets: ['http://tukushimbo.web.fc2.com/sample3/font.png'] };

enchant.draw.Text = enchant.Class.create(enchant.Sprite, {
    initialize: function(posX, posY, txt, scale) {
        var game = enchant.Game.instance;
        this.fontSize = 16;
        this.scale = Math.floor(this.fontSize * scale);
        this.widthItemNum = 16;
        enchant.Sprite.call(this, this.fontSize*txt.length, this.fontSize);
        this.image = new Surface(this.fontSize*txt.length, this.scale);
        this.x = posX;
        this.y = posY;
        this.setText(txt);
    },
    setText: function(txt) {
        var i, x, y, wNum, charCode, charPos;
        var game = enchant.Game.instance;
        this._text = txt;
        for(i=0; i<txt.length; i++) {
            charCode = txt.charCodeAt(i);
            if (charCode >= 32 && charCode <= 127) {
                charPos = charCode - 32;
            } else {
                charPos = 0;
            }
            x = charPos % this.widthItemNum;
            y = Math.floor(charPos / this.widthItemNum);
            // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
            this.image.draw(game.assets['http://tukushimbo.web.fc2.com/sample3/font.png'], 
                x*this.fontSize, y*this.fontSize, this.fontSize, this.fontSize,
                i*this.scale, 0, this.scale, this.scale);
        }
    },
    text: {
        get: function() {
            return this._text;
        },
        set: function() {
        }
    }
});

enchant.draw.MutableText = enchant.Class.create(enchant.Sprite, {
    initialize: function(posX, posY, width, txt, scale) {	//scale:文字の倍率
        var game = enchant.Game.instance;
        this.fontSize = 16;
        this.scale = Math.floor(scale*this.fontSize);
        this.widthItemNum = 16;
        enchant.Sprite.call(this, width, this.scale);
        this.image = new Surface(width, this.scale);	//文字表示領域
        this.x = posX;
        this.y = posY;
        this.setText(txt);
    },
    setText: function(txt) {
        var i, x, y, wNum, charCode, charPos;
        var game = enchant.Game.instance;
        this._text = txt;
        this.image.context.clearRect(0, 0, this.width, this.height);
        for(i=0; i<txt.length; i++) {
            charCode = txt.charCodeAt(i);
            if (charCode >= 32 && charCode <= 127) {
                charPos = charCode - 32;
            } else {
                charPos = 0;
            }
            x = charPos % this.widthItemNum;
            y = Math.floor(charPos / this.widthItemNum);
            // drawImage(image, sx, sy, sw, sh, dx*倍率, dy, dw*倍率, dh*倍率)
            this.image.draw(game.assets['http://tukushimbo.web.fc2.com/sample3/font.png'], 
                x*this.fontSize, y*this.fontSize, this.fontSize, this.fontSize,
                i*this.scale, 0, this.scale, this.scale);
        }
    },
    text: {
        get: function() {
            return this._text;
        },
        set: function(txt) {
            this.setText(txt);
        }
    },
});
