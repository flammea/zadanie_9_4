// Pół choinki

function drawTree(h) {
    for (var i = 0 ; i < h ; i++) {
        var star = '';
        for (var j = 0 ; j < i + 1 ; j ++)  {
            var star = star += '*';
            }
        console.log(star);
    }
}  

drawTree(5);

//Cała choinka

function drawFullTree(hh) {
	for (var ii = 1; ii <= hh ; ii++) {
		star = "";
		for (var jj = hh; jj > ii; jj--) {
			star += " ";
		}
		for (jj = 1; jj <= ii * 2 - 1; jj++) {
			star += "*";
		}
		console.log(star);
	}
}

drawFullTree(5);
