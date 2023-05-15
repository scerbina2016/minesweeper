const makeFlag = (tile, gameOver) => {
	if (gameOver) return;
	if (!tile.classList.contains('tile--checked')) {
		if (!tile.classList.contains('tile--flagged')) {
			tile.innerHTML = 'рџљ©';
			tile.classList.add('tile--flagged');
			} else {
			tile.innerHTML = '';
			tile.classList.remove('tile--flagged');
		}
	}
}

export default makeFlag;