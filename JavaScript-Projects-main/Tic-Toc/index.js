let data = ["X"]
let indexData = []
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")



function Button1() {
    let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button1.textContent = ans
    // console.log(ans);
    button1.setAttribute('disabled','disabled')
Run(0)
    
}
function Button2() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button2.textContent = ans
    // console.log(ans);
    button2.setAttribute('disabled','disabled')
    Run(1)
}
function Button3() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button3.textContent = ans
    // console.log(ans);
    button3.setAttribute('disabled','disabled')
    Run(2)
}
function Button4() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button4.textContent = ans
    // console.log(ans);
    button4.setAttribute('disabled','disabled')
    Run(3)
}
function Button5() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button5.textContent = ans
    // console.log(ans);
    button5.setAttribute('disabled','disabled')
    Run(4)
}
function Button6() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button6.textContent = ans
    // console.log(ans);
    button6.setAttribute('disabled','disabled')
    Run(5)
}
function Button7() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button7.textContent = ans
    // console.log(ans);
    button7.setAttribute('disabled','disabled')
    Run(6)
}
function Button8() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button8.textContent = ans
    // console.log(ans);
    button8.setAttribute('disabled','disabled')
    Run(7)
}
function Button9() {
        let index = data.length-1
    let Dataindex = data[index]
    let ans = ""
    if(Dataindex === "X"){
        ans = "O"
        }else{
        ans = "X"
    }
    data.push(ans)
    button9.textContent = ans
    // console.log(ans);
    button9.setAttribute('disabled','disabled')
    Run(8)
}

function Run(index){
    let value = ""
    for(i=0;i<=data.length-1;i++){
        value = data[i]
    }
   indexData[index]=value
   
 console.log(indexData);
 

if( 0 in indexData && 1 in indexData && 2 in indexData  && indexData[0]===indexData[1] && indexData[1]===indexData[2] ||
    3 in indexData && 4 in indexData  && 5 in indexData  && indexData[3]===indexData[4] && indexData[4]===indexData[5] ||
    6 in indexData && 7 in indexData  && 8 in indexData  && indexData[6]===indexData[7] && indexData[7]===indexData[8] ||
    0 in indexData && 3 in indexData  && 6 in indexData  && indexData[0]===indexData[3] && indexData[3]===indexData[6] ||
    1 in indexData && 4 in indexData  && 7 in indexData  && indexData[1]===indexData[4] && indexData[4]===indexData[7] ||
    2 in indexData && 5 in indexData  && 8 in indexData  && indexData[2]===indexData[5] && indexData[5]===indexData[8] ||
    0 in indexData && 4 in indexData  && 8 in indexData  && indexData[0]===indexData[4] && indexData[4]===indexData[8] ||
    2 in indexData && 4 in indexData  && 6 in indexData  && indexData[2]===indexData[4] && indexData[4]===indexData[6] 
    
 ){
    document.getElementById("ans").textContent =`${value}is Winer`
    button1.setAttribute("disabled","disabled")
    button2.setAttribute("disabled","disabled")
    button3.setAttribute("disabled","disabled")
    button4.setAttribute("disabled","disabled")
    button5.setAttribute("disabled","disabled")
    button6.setAttribute("disabled","disabled")
    button7.setAttribute("disabled","disabled")
    button8.setAttribute("disabled","disabled")
    button9.setAttribute("disabled","disabled")
    
}else {
   document.getElementById("ans").textContent = "Tie"
    
}
}   
