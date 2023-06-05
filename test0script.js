// test.js

// Function to toggle camera state
function toggleCamera() {
    var cameraIcon = document.getElementById("camera-icon");
    cameraIcon.classList.toggle("enabled");
  }
  
  // Function to toggle microphone state
  function toggleMicrophone() {
    var micIcon = document.getElementById("mic-icon");
    micIcon.classList.toggle("enabled");
  }
  
  // Function to handle taking the test
  function takeTest() {
    // Code to turn on camera and microphone
    var cameraIcon = document.getElementById("camera-icon");
    var micIcon = document.getElementById("mic-icon");
    cameraIcon.classList.add("enabled");
    micIcon.classList.add("enabled");
  
    // Code to navigate to the test page
    window.location.href = "exam.html";
  }
  
  // Event listeners for camera and microphone icons
  var cameraIcon = document.getElementById("camera-icon");
  cameraIcon.addEventListener("click", toggleCamera);
  
  var micIcon = document.getElementById("mic-icon");
  micIcon.addEventListener("click", toggleMicrophone);
  
  // Event listener for taking the test
  var takeTestLink = document.getElementById("take-test-link");
  takeTestLink.addEventListener("click", takeTest);
  