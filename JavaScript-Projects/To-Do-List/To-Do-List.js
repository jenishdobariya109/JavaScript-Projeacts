let Output = document.getElementById("Output")

//get Data to Local Storage
let getDataLocalStorgeData =JSON.parse(localStorage.getItem('list'))
let ToDoList = [
    
]
function Add() {
    let input = document.getElementById("To-Do-List-Input").value
    if(input === ""){
        document.getElementById("Erro").textContent = "Please File Input File"
    }else {
    let obj = {
      data : input
    }
  
    // Set localStorage to store value
    if(getDataLocalStorgeData === null){
        ToDoList.push(obj)
        
    }else {
        ToDoList = getDataLocalStorgeData
        ToDoList.push(obj)
        
    }
    localStorage.setItem('list',JSON.stringify(ToDoList))
    location.reload()
}
}

   if(getDataLocalStorgeData === null || getDataLocalStorgeData.length === 0){
    let p = document.createElement("p")
    let pext = document.createTextNode("Not Data Avilabile")
    p.appendChild(pext)
    Output.appendChild(p)
}else{
    
   for(i=0 ;i<=getDataLocalStorgeData.length-1;i++){
   let index = i
   let div = document.createElement('div')
   let pTag = document.createElement('h3')
   let pText = document.createTextNode(getDataLocalStorgeData[i].data)
   let img = document.createElement('img')
   img.src ="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png"
   let checkebox = document.createElement('input');
   checkebox.setAttribute('type', 'checkbox'); 

    pTag.appendChild(pText)
    div.appendChild(pTag)
    div.appendChild(checkebox)
    div.appendChild(img)
    div.setAttribute('class',"To-Do-List-Div")
    Output.appendChild(div)

   
   checkebox.addEventListener("click", function (){
   let value = "Cheacked"
   console.log(value);
    console.log(getDataLocalStorgeData[index].data);
    let obj = {
        data : getDataLocalStorgeData[index].data,
        checkebox : value
    }
   if(getDataLocalStorgeData.length-1 === 0){
 ToDoList.push(obj)
   }else {
    ToDoList = getDataLocalStorgeData
     ToDoList.push(obj)
   }
       let removeitem = getDataLocalStorgeData.splice(index,1)
    localStorage.setItem('list',JSON.stringify(removeitem))
   
    localStorage.setItem('list',JSON.stringify(ToDoList))
      location.reload()
    })
    
    if(getDataLocalStorgeData[i].checkebox === "Cheacked"){
        checkebox.disabled = true
        checkebox.checked = true
    img.addEventListener("click",function (){
    let removeitem = getDataLocalStorgeData.splice(index,1)
    localStorage.setItem('list',JSON.stringify(removeitem))
    localStorage.setItem('list',JSON.stringify(getDataLocalStorgeData))
   

    location.reload()
    })
    }else {
       img.addEventListener("click",function (){
           document.getElementById("Erro").textContent = "Please Tic Chackbox And After Remove Click"
    })
    }

   }
        
}

