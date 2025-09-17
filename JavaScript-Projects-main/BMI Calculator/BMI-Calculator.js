function Submit() {
    let Hight = document.getElementById("Hight").value
    let Kg = document.getElementById("weight").value
    let BmiNumber = document.getElementById("BmiNumber")
    let BmiWord = document.getElementById("BmiWord")
    let Hight2 = Hight*Hight
    console.log(Hight2);
    
    let Bmi = Kg/Hight2
    let convort2 = Bmi.toFixed(1)
    console.log(convort2);
    
    BmiNumber.textContent = convort2
    if(Bmi < 18.5){
        BmiWord.textContent = "Low"
    }else if(Bmi >18.5 && Bmi < 25.5){
        BmiWord.textContent = "Average"
    }else {
        BmiWord.textContent = "High"
    }
    
}