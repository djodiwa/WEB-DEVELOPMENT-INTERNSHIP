document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  // Clear messages
  document.getElementById("success-msg").innerText = "";
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required!";
    isValid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email!";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message cannot be empty!";
    isValid = false;
  }

  // Successful validation
  if (isValid) {
    document.getElementById("success-msg").innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
