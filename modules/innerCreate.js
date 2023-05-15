const innerCreate = () => {

return ( 
   ` <div class="col-left">    
        <div class="settings">
            <label for="boardSize">Размер поля:</label>
            <input id="boardSize" type="range" value="10" min="4" max="20">
            <fieldset>
                <input type="radio" id="easy" name="difficulty" value="0.1" class="difficulty">
                <label for="easy">Легко</label> 
                <input type="radio" id="normal" name="difficulty" value="0.2" class="difficulty" checked>
                <label for="normal">Нормально</label>
                <input type="radio" id="hard" name="difficulty" value="0.4" class="difficulty">
                <label for="hard">Сложно</label> 
            </fieldset>
        </div>     
    </div>
    <div class="col-right">    
    <a href="#!" class="minesweeper-btn">New game</a>    
    </div>
    <div class="board-wrap">
        <div class="board"></div>
    </div>
    <div class="endscreen"></div>`
    )
}

export default innerCreate;