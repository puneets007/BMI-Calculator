const form=document.querySelector("form")
form.addEventListener("submit", function (e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const result=document.querySelector("#results")
  if(height==="" || height<0 || isNaN(height)){
    result.innerHTML=`Please enter a valid height ${height}`
  }
  else if(weight==="" || weight<0 || isNaN(weight)){
    result.innerHTML=`Please enter a valid weight ${weight}`
  }
  else{
    const BMI=(weight/((height*height)/10000)).toFixed(2)
    //result.innerHTML=`<span>${BMI}</span>`
    if(BMI<18.6){
      result.innerHTML=`${BMI} :- Under Weight`
    }
    else if(BMI>=18.6 && BMI<=24.9){
      result.innerHTML=`${BMI} :- Normal Range`
    }
    else if(BMI>24.9){
      result.innerHTML=`${BMI} :- Over Weight`
    }

  }
})