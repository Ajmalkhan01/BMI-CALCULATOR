function calculateBMI(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
    }
}
