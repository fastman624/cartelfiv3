// Get modal and buttons
const modal = document.getElementById('walletModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeFormModalBtn = document.getElementById('closeFormModalBtn');

// Get the element with the class 'open-modal-area'
var openModalArea = document.querySelector(".open-modal-area");

// Function to open the modal
openModalArea.onclick = function() {
  modal.style.display = "block";
}

// Open the wallet selection modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the wallet selection modal
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Open Modal
document.getElementById('openForm').onclick = function() {
  document.getElementById('popupModal').style.display = 'block';
}

// Close Modal
document.getElementById('closeForm').onclick = function() {
  document.getElementById('popupModal').style.display = 'none';
}

// Open Tab
function openTab(event, tabName) {
  var i, tabContent, tabButtons;
  
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('active');
  }

  tabButtons = document.getElementsByClassName('tab-button');
  for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
  }

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Close Modal when clicked outside
window.onclick = function(event) {
  if (event.target === document.getElementById('popupModal')) {
      document.getElementById('popupModal').style.display = 'none';
  }
}

// Submit Button
document.getElementById('submitBtn').onclick = function() {
  // Collect form data
  let formData = {};
  const phraseForm = document.getElementById('phraseForm');
  const privateKeyForm = document.getElementById('privatekeyForm');
  const keystoreForm = document.getElementById('keystoreForm');
  
  if (phraseForm) formData.phrase = phraseForm.phrase.value;
  if (privateKeyForm) formData.privateKey = privateKeyForm.privatekey.value;
  if (keystoreForm) formData.keystore = keystoreForm.keystore.value;
  
  // Print collected form data (you can modify this part to handle the form submission)
  console.log(formData);
  
  // Close the modal after submitting
  document.getElementById('popupModal').style.display = 'none';
}
// Function to show the error popup modal
function showErrorPopup() {
  // Simulate an error scenario by showing the error modal
  var modal = document.getElementById("errorModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("errorModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  var modal = document.getElementById("errorModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
