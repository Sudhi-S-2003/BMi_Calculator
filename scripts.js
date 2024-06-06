document.getElementById('no-display').style.display='none';
function cal(){
    let weight=document.getElementById('weight').value;
    let height=document.getElementById('height').value;
    if(weight!="" && height != ""){
    height_in_m=height/100;
    let bmi=weight/(height_in_m*height_in_m);
    if (bmi < 18.5) {
        document.getElementById('result-head').innerHTML="Underweight";
        document.getElementById('result').innerHTML="Your weight is underweight";
    } else if (bmi < 24.9) {
        document.getElementById('result-head').innerHTML="Normal weight";
        document.getElementById('result').innerHTML="Your weight is normal weight";
    } else if (bmi < 29.9) {
        document.getElementById('result-head').innerHTML="Overweight";
        document.getElementById('result').innerHTML="Your weight is overweight";
    } else {
        document.getElementById('result-head').innerHTML="Obese";
        document.getElementById('result').innerHTML="You are obese.";
    }
  
    document.getElementById('no-display').style.display='block';
}
}