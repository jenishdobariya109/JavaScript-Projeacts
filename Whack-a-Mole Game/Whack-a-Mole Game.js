let Game = document.getElementById("Game");
let data = [];
let Score = localStorage.getItem('Socre');
let buttonClick = false;
let Interval ;
function Start() {

    function ResetScore() {
        Score = 0
        localStorage.setItem('Socre', Score);
    }
    ResetScore();
    data = [];
    for (i = 0; i <= 8; i++) {
        data.push(i);

    }

      function Load(){
        if(buttonClick === false){
            Interval = setTimeout(Load,3000);
        }
        document.getElementById("Game").textContent = "";
            let Random = Math.floor(Math.random() * 8);
            console.log(Random);
            
            for (j = 0; j <= data.length - 1; j++) {
                if (data[j] === Random) {
                    let div = document.createElement('div');
                    let img = document.createElement('img');
                    img.src = "./img/img.jpg";
                    img.setAttribute('id', 'Score');
                    div.setAttribute('class', 'divGameRandome');
                    div.appendChild(img);
                    Game.appendChild(div);
    document.getElementById('Score').addEventListener("click", function () {
                buttonClick = true;
                console.log(buttonClick);
                    Score++;
                    localStorage.setItem('Socre', Score);
                    buttonClick = false;
                    clearTimeout(Interval);
                    Load();
       
    
        })
                } else {
                    let div = document.createElement('div');
                    div.setAttribute('class', 'divGame');
                    Game.appendChild(div);
                }
    
            }
        }  
    
    Load();
}
console.log(buttonClick);
function End() {
        clearInterval(Interval)
        Game.textContent = "";
        let ans = 0;
        clickEnd = "Yes";
        if (Score === null) {
            ans = 0;
        } else {
            ans = Score;
        }
        let h1 = document.createElement('h1');
        h1.textContent = `Your Score is ${ans}`;
        Game.appendChild(h1);

    }
    
console.log(buttonClick);
