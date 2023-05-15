
const setup = (size, tiles, boardSize) => {
	for (let i = 0; i < Math.pow(size, 2); i++) {
		const tile = document.createElement('div');
		tile.classList.add('tile');
		board.appendChild(tile);
	}
	tiles = document.querySelectorAll('.tile');
	boardSize = Math.sqrt(tiles.length);
	board.style.width = boardSize * tileSize + 'px';
	
	document.documentElement.style.setProperty('--tileSize', `${tileSize}px`);
	document.documentElement.style.setProperty('--boardSize', `${boardSize * tileSize}px`);
	
	let x = 0;
	let y = 0;
	tiles.forEach((tile, i) => {
		tile.setAttribute('data-tile', `${x},${y}`);
		
		let random_boolean = Math.random() < bombFrequency;
		if (random_boolean) {
			bombs.push(`${x},${y}`);
			if (x > 0) numbers.push(`${x-1},${y}`);
			if (x < boardSize - 1) numbers.push(`${x+1},${y}`);
			if (y > 0) numbers.push(`${x},${y-1}`);
			if (y < boardSize - 1) numbers.push(`${x},${y+1}`);
			
			if (x > 0 && y > 0) numbers.push(`${x-1},${y-1}`);
			if (x < boardSize - 1 && y < boardSize - 1) numbers.push(`${x+1},${y+1}`);
			
			if (y > 0 && x < boardSize - 1) numbers.push(`${x+1},${y-1}`);
			if (x > 0 && y < boardSize - 1) numbers.push(`${x-1},${y+1}`);
		}
		
		x++;
		if (x >= boardSize) {
			x = 0;
			y++;
		}
		
		tile.oncontextmenu = function(e) {
			e.preventDefault();
			makeFlag(tile, gameOver);
		}
		
		tile.addEventListener('click', function(e) {
			clickTile(tile);
		});
	});
	
	numbers.forEach(num => {
		let coords = num.split(',');
		let tile = document.querySelectorAll(`[data-tile="${parseInt(coords[0])},${parseInt(coords[1])}"]`)[0];
		let dataNum = parseInt(tile.getAttribute('data-num'));
		if (!dataNum) dataNum = 0;
		tile.setAttribute('data-num', dataNum + 1);
	});
}

export default setup;