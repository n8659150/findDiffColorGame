var stage = new createjs.Stage('gameView');
var gameView = new createjs.Container();
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
stage.addChild(gameView);
var n = 2;
function addRect(){
	var hex = parseInt(Math.random()*1000000);
	var color = "#" + hex;
	var x = parseInt(Math.random()*n);
	var y = parseInt(Math.random()*n);
	for (var indexX = 0; indexX < n; indexX++) {
		for (var indexY = 0; indexY < n; indexY++) {
			var r = new Rect(n,color);
			gameView.addChild(r);
			r.x = indexX;
			r.y = indexY;
			if(r.x == x && r.y == y) {
				r.setRectType(2);
			}
			r.x = indexX*(400/n);
			r.y = indexY*(400/n);
			if(r.getRectType() == 2) {
				r.addEventListener("click", function(){
					if (n < 7) {
						++n;
					}
					gameView.removeAllChildren();
					addRect();
				});
			}
		}
	}
}

addRect();