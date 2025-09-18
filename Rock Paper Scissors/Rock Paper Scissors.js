let data = [
    {
        imgurl : "./img/Rock.png",
        name : "Rock"
    },
    {
         imgurl : "./img/Paper.png",
        name : "Paper"
    },{
         imgurl : "./img/Scissors.png",
        name : "Scissors"
    }

]
let selact = ""
let title = document.getElementById("title")
let RobotDiv = document.getElementById("RobotDiv")
function Submit(){
   if(selact === ""){
        document.getElementById("Erro").textContent = "Please Seleact Options"
    }else{
                document.getElementById("Erro").textContent = ""

         let rendome = Math.floor(Math.random()*3)
    let selacted = ""
 for(i=0;i<=data.length-1;i++){
        if(i===rendome){
            RobotDiv.textContent = ""
            let label = document.createElement('label');
            let h1Title = document.createElement('h1')
            h1Title.textContent = "Robot Selectd"
            let h1 = document.createElement('h1');
            h1.textContent = data[i].name;
            let img  = document.createElement('img');
            img.src = data[i].imgurl;
            label.appendChild(h1Title)
            label.appendChild(h1);
            label.appendChild(img);
            RobotDiv.appendChild(label);
            selacted = data[i].name
        }
        
    }

    if(selact === selacted){
        document.getElementById("Output").textContent = "Tie";
    }else if(selact==="Rock" && selacted === "Paper" || selact==="Paper" && selacted === "Rock"){
                document.getElementById("Output").textContent = "Win Paper";

    }else if(selact==="Paper" && selacted === "Scissors" || selact==="Scissors" && selacted === "Paper" ){
                        document.getElementById("Output").textContent = "Win Scissors";

    }else {
         document.getElementById("Output").textContent = "Win Rock";
    }
  
    }
}
function Scissors(){
    selact = "Scissors"
}
function Rock(){
    selact = "Rock"
}
function Paper(){
    selact = "Paper"
}

