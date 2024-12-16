document.getElementById("newsletter-form").addEventListener("submit", function (event) 
{event.preventDefault(); 

    
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const successMessage = document.getElementById("success-message");
    const subscriberEmail = document.getElementById("subscriber-email");
    const submitButton = document.getElementById("button"); 

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (emailValue === "") {
      alert("Email field cannot be empty");
      emailInput.focus();
    } else if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address (no spaces allowed)");
      emailInput.focus();
    } else {
      successMessage.style.display = "block";
      subscriberEmail.textContent = emailValue;
      emailInput.value = "";

      console.log("Submitted email:", emailValue);

      setTimeout(function () {
        successMessage.style.display = "none";
      }, 2000);
    }
  });


submitButton.removeEventListener("click", function () {
  successMessage.style.display = "block";
});
