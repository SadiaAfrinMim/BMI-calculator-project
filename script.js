
const resultDiv = document.getElementById('result');

const calculateBMI = () => {
  const age = document.getElementById('age').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if(isNaN(age) || age <= 0) {
    resultDiv.textContent = 'Please enter a valid age';
    return;
  }
  if(isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    resultDiv.textContent = 'Please enter valid values for height and weight';
    return;
  }

  const bmi = weight / (height * height);
  const bmicategory = getBMIcategory(bmi);

  resultDiv.innerHTML = `
  <hr>
    <p>Your age is: ${age}</p>
    <p>Your BMI is: ${bmi.toFixed(2)}</p>
    <p  id = "bmiCategory">You are: ${bmicategory}</p>
  `;
  const bmiCategoryElement = document.getElementById('bmiCategory');
  if (bmicategory === 'underweight') {
    bmiCategoryElement.style.color = 'blue';
    bmiCategoryElement.style.fontWeight = '800'
  } else if (bmicategory === 'normal weight') {
    bmiCategoryElement.style.color = 'green';
    bmiCategoryElement.style.fontWeight = '800'
  } else if (bmicategory === 'overweight') {
    bmiCategoryElement.style.color = 'red';
    bmiCategoryElement.style.fontWeight = '800'
  } else if (bmicategory === 'obesity') {
    bmiCategoryElement.style.color = 'darkred';
    bmiCategoryElement.style.fontWeight = '800'
  }
};

const getBMIcategory = (bmi) => {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'overweight'.style.color = 'red';

  } else {
    return 'obesity';
  }
};
