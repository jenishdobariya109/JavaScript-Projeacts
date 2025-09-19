let data = [
    {
        imgurl : "./Img/Img 1.jpg"
    },
    {
        imgurl : "./Img/img 2.jpg"
    },
    {
        imgurl : "./Img/img 3.jpg"
    },
    {
        imgurl : "./Img/img 4.jpg"
    }
]
let img = document.createElement('img')
let length = data.length
let count = 0
img.src = data[count].imgurl

document.getElementById("Next").addEventListener("click",function (){
    count++
        img.src = data[count].imgurl
        console.log(count);
        if(count === 3){
            count = -1
        }
})

document.getElementById("Prv").addEventListener("click",function (){
    
   
        
        if(count>0){
        count--
        console.log(count);
        img.src = data[count].imgurl
        
    }else {
        count = 4
        count--
        img.src = data[count].imgurl
        console.log(count);
        }
    
})
    
console.log(count);

document.getElementById("Imges").appendChild(img)