const innerCreate = () => {

return ( 
   ` <div class="col-left">    
        <div class="settings">
            <label for="boardSize">Batle size:</label>
            <input id="boardSize" type="range" value="10" min="4" max="20">
            
        </div>  
        <fieldset class="fieldSet">
            <div class = "diff">
                <input type="radio" id="easy" name="difficulty" value="0.1" class="difficulty">
                <label for="easy">Easy</label> 
            </div>
            <div class = "diff">
                <input type="radio" id="normal" name="difficulty" value="0.2" class="difficulty" checked>
                <label for="normal">Habitually</label>
            </div>
            <div class = "diff">
                <input type="radio" id="hard" name="difficulty" value="0.4" class="difficulty">
                <label for="hard">Hard</label> 
            </div>
            </fieldset>
        

        <div class="col-right">    
            <a href="#!" class="minesweeper-btn">To fight</a>    
            </div>



    </div>
    
    <div class="board-wrap">
        <div class="board"></div>
    </div>
    <div class="endscreen"></div>`
    )
}

export default innerCreate;