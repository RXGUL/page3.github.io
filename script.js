let currentStep = 'step1';

function nextStep(event, step) {
  event.preventDefault();

  const currentStepElement = document.getElementById(currentStep);
  const nextStepElement = document.getElementById(step);

  currentStepElement.classList.remove('active');
  nextStepElement.classList.add('active');

  // Update progress bar
  const progress = (parseInt(step.slice(-1)) - 1) * 25;
  document.getElementById('progress').style.width = `${progress}%`;

  currentStep = step;

  // Step 4: Get geolocation
  if (step === 'step4') {
    getGeolocation();
  }
}

function submitForm(event) {
    event.preventDefault();
  
    // Simulate form submission
    const multiFiles = document.getElementById('multiFile').files;
    if (multiFiles.length > 0) {
      // Display success message
      document.getElementById('message').textContent = 'Form submitted successfully!';
      // Update progress bar
      document.getElementById('progress').style.width = '100%';
      // Implement the logic for final form submission to the API
      // You can use the fetch() function to send the form data to your API endpoint
      // For example:
      // fetch('/api/submit-form', {
      //   method: 'POST',
      //   body: new FormData(document.getElementById('step4Form'))
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     // Handle the API response
      //   })
  
      // Move to Step 5
      nextStep(event, 'step5');
    } else {
      // Display error message if no files are selected
      document.getElementById('message').textContent = 'Please select at least one file.';
    }
  }
  