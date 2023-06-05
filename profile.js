// Add event listener to the submit button
document.getElementById("submit-button").addEventListener("click", function() {
    // Calculate the correctness of the exam
    var totalQuestions = 10; // Total number of questions
    var correctAnswers = 0; // Counter for correct answers
  
    // Iterate through each question
    for (var i = 1; i <= totalQuestions; i++) {
      var selectedOption = document.querySelector(`input[name=option${i}]:checked`);
      if (selectedOption !== null) {
        // Check if the selected option is correct (assuming the correct option value is set to 3)
        if (selectedOption.value === "3") {
          correctAnswers++;
        }
      }
    }
  
    // Calculate the percentage
    var percentage = (correctAnswers / totalQuestions) * 100;
  
    // Store the percentage in the session storage to access it on the next page
    sessionStorage.setItem("percentage", percentage);
  
    // Redirect to the next page
    window.location.href = "profile.html";
  });
  