
function Submite() {
      document.getElementById("Card").innerHTML = ""
    let input = document.getElementById("Serach-filed").value
    
    let url =  `https://api.unsplash.com/search/photos?query=${input}&client_id=hanK_UEY1QEn2ZwxOcbJrwG5JA-h3qWNFFPeq5PSOC8`
    async function Api() {
        let respon = await fetch(url)
        let json = await  respon.json()
        let data = json.results
        for(i=0;i<=data.length-1;i++){
            console.log(data[i].urls.full);
            let img = document.createElement('img')
            img.src = data[i].urls.full
            document.getElementById("Card").appendChild(img)
        }
    }
    Api()
}