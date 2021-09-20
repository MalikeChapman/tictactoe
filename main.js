const playerFactory = (pick, role) => {
    this.pick = pick;
    this.role = role;

    return {pick, role};
}

(function (doc){
    'use strict';
    
    let storage = ['', '', '', '', '', '', '', '', ''];
    let box = 'box';
    let currentCount = 0;
    const xbutton =  doc.querySelector('#xbutton');
    const obutton = doc.querySelector('#obutton');
    const player = playerFactory("X", "player");
    const computer = playerFactory("O", "ai");
    let playerscore = 0;
    let computerscore = 0;
    xbutton.addEventListener('click', switchPicks);
    obutton.addEventListener('click', switchPicks);
    for (let  i = 0; i < 9; i++){
        doc.querySelector(`.${box+(i)}`).addEventListener('click', addValue);
    }



    function addValue(){
       let span = doc.createElement('span');
       span.textContent = player.pick;
       this.appendChild(span);
       let classAttribute = this.getAttribute('class');
       let index = Number(classAttribute[3]);
       storage[index] = player.pick;
       currentCount++;
       checkWinner();
       computerTurn();

    }
    function computerTurn(){
        let span = doc.createElement('span');
        span.textContent = computer.pick;
        let index = Math.floor(Math.random() * 9);
        
        if(currentCount === 9) 
        {
            return;
        }
        else if((storage[index] !== ''))
        {
            let status = true;
            while(status)
            {
                index = Math.floor(Math.random() * 9);
                if(storage[index] === '')
                {
                    storage[index] = computer.pick;
                    let box = doc.querySelector(`.box${index}`);
                    box.appendChild(span);
                    status = false;
                    currentCount++;
                    break;
        
                }


            }

        } else 
        {
            storage[index] = computer.pick;
            let box = doc.querySelector(`.box${index}`);
            box.appendChild(span);
            currentCount++;

        }
        checkWinner();

    }


    function checkWinner(){
        let status = false;
        if(checkX(status) || checkO(status))
        {
            updateScoreBoard();
            reset();
            return;
        }
        if(currentCount === 9)
        {
            checkDraw();
            alert("it was a draw");
            reset();
        }
        
        
    }
    function updateScoreBoard()
    {
        const playerCard = doc.querySelector(`#playerscore`);
        playerCard.textContent = `PlayerScore: ${playerscore}`;
        const computerCard = doc.querySelector(`#computerscore`);
        computerCard.textContent = `ComputerScore: ${computerscore}`;

    }
    
    function checkX(status){
        if ((storage[0] === 'X') && (storage[1] === 'X') && (storage[2] === 'X'))
        {
           if(player.pick === 'X')
           {
               alert('PLayer Wins');
               playerscore++;
           } else
           {
               alert('Computer Wins');
               computerscore++;
           }
            status = true;

        }
         else if ((storage[0] === 'X') && (storage[3] === 'X') && (storage[6] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
              status = true;
           
        } else if ((storage[0] === 'X') && (storage[4] === 'X') && (storage[8] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
              status = true;

          
        } else if ((storage[1] === 'X') && (storage[4] === 'X') && (storage[7] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
              status = true;

         
        } else if ((storage[2] === 'X') && (storage[4] === 'X') && (storage[6] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
              status = true;

           
        } else if ((storage[2] === 'X') && (storage[5] === 'X') && (storage[8] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
               status = true;

            
        } else if ((storage[6] === 'X') && (storage[7] === 'X') && (storage[8] === 'X'))
        {
            if(player.pick === 'X')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
              status = true;

          
        }
        return status === true ? true : false;


    }
    function checkO(status){
        if ((storage[0] === 'O') && (storage[1] === 'O') && (storage[2] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
             status = true;

        }
         else if ((storage[0] === 'O') && (storage[3] === 'O') && (storage[6] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
            status = true;
           
        } else if ((storage[0] === 'O') && (storage[4] === 'O') && (storage[8] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
            status = true;

          
        } else if ((storage[1] === 'O') && (storage[4] === 'O') && (storage[7] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
            status = true;

         
        } else if ((storage[2] === 'O') && (storage[4] === 'O') && (storage[6] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
            status = true;

           
        } else if ((storage[2] === 'O') && (storage[5] === 'O') && (storage[8] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
             status = true;

            
        } else if ((storage[6] === 'O') && (storage[7] === 'O') && (storage[8] === 'O'))
        {
            if(player.pick === 'O')
            {
                alert('PLayer Wins');
                playerscore++;
            } else
            {
                alert('Computer Wins');
                computerscore++;
            }
            status = true;
            

          
        }
        return status === true ? true : false;


    }
    function switchPicks(){
        let attribute = this.getAttribute('id');
       if((attribute === 'obutton') && (player.pick === 'X'))
       {
           player.pick = 'O'
           computer.pick = 'X';
           reset();
       } else if((attribute === 'xbutton') && (player.pick === 'O'))
       {
           player.pick = 'X'
           computer.pick = 'O';
           reset();
       }

    }

    function reset(){
        for (let  i = 0; i <= 9; i++){
            const parent = doc.querySelector(`.box${i}`);
            storage[i] = '';
            while (parent.firstChild != null){
                parent.removeChild(parent.firstChild);

            }
           
        }
        currentCount = 0;
    }

    
})(this.document);


