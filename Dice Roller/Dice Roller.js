let imgData = [
    {
        url : "./dice 1.png",
        id: 1
    },
    {
        url : "./dice 2.png",
        id: 2
    }, 
    {
        url : "./dice 3.png",
        id: 3
    },
    {
        url : "./dice 4.png",
        id: 4
    },
    {
        url : "./dice 5.png",
        id: 5
    },
    {
        url : "./dice 6.png",
        id: 6
    }
]
function Roll() {
                document.getElementById("Dice-Roll-OutPut").textContent = ""

        let img = document.createElement('img')
        
        for(i=0;i<=imgData.length-1;i++){
            let id = Math.floor(Math.random()*imgData.length)
            if(imgData[i].id === id){
                imgurl = imgData[i].url
            }
        }
        img.src = imgurl
        
        document.getElementById("Dice-Roll-OutPut").appendChild(img)
        
}