const form = document.querySelector('.form');
const emailInput = form.querySelector('input');
const feedbackEle = form.querySelector('.form__feedback');

// Regex pattern to test email
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/;

// Function to set feedback text and valid, invalid status
const setFeedbackText = (text, status) => {
  // Remove display none class from feedback element
  feedbackEle.classList.remove('d-none');

  // Set feedback text
  feedbackEle.textContent = text;

  // Remove all classes from feedback element and set accordingly to status
  feedbackEle.classList.remove(
    'form__feedback--valid',
    'form__feedback--invalid'
  );
  const statusClass = status === 'valid' ? 'valid' : 'invalid';
  feedbackEle.classList.add(`form__feedback--${statusClass}`);
};

// Listen to submit event on form
form.addEventListener('submit', function (e) {
  // Prevent default page refresh
  e.preventDefault();

  // Grab entered email
  const email = emailInput.value;

  // If email is empty set invalid status with helper text and return
  if (email.length === 0)
    return setFeedbackText('Email is required', 'invalid');

  // If email does not match standard email pattern set invalid status with helper text and return
  if (!email.match(emailPattern))
    return setFeedbackText('Please provide a valid email address', 'invalid');

  //  At this stage email is valid, set valid status with feedback message
  setFeedbackText('Thank you, We will keep you updated', 'valid');
});
