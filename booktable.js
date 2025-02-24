document.addEventListener("DOMContentLoaded", () => {
    const slotsContainer = document.getElementById("slots");
    const selectedSlotInput = document.getElementById("selectedSlot");
    const bookingForm = document.getElementById("bookingForm");
    const resultDiv = document.getElementById("result");
  
    // Handle slot selection
    slotsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("slot")) {
        document.querySelectorAll(".slot").forEach(slot => slot.classList.remove("selected"));
        event.target.classList.add("selected");
        selectedSlotInput.value = event.target.dataset.time;
      }
    });
  
    // Form Submission
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Fetch form values
      let name = document.getElementById("name").value.trim();
      let contact = document.getElementById("contact").value.trim();
      const date = document.getElementById("date").value;
      const guests = parseInt(document.getElementById("guests").value);
      const meal = document.getElementById("meal").value;
      const slot = selectedSlotInput.value;
  
      // Validate Inputs
      if (!validateName(name) || !validateContact(contact) || !validateDate(date) || !validateGuests(guests) || !validateSlot(slot)) {
        return; // Stop form submission if any validation fails
      }
  
      // Generate random table number
      const tableNumber = Math.floor(Math.random() * 20) + 1;
  
      // Display booking details
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `
        <p><strong>Booking Details:</strong></p>
        <p>Name: ${name}</p>
        <p>Contact: ${contact}</p>
        <p>Date: ${date}</p>
        <p>Guests: ${guests}</p>
        <p>Meal: ${meal}</p>
        <p>Slot: ${slot}</p>
        <p>Table Number: ${tableNumber}</p>
      `;
    });
  
    // Validation functions
    function validateName(name) {
      if (name.length < 3) {
        alert("please correct name.");
        return false;
      }
      return true;
    }
  
    function validateContact(contact) {
      if (contact.startsWith("+91")) contact = contact.slice(3); // Remove "+91"
      if (!/^\d{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
      }
      return true;
    }
  
    function validateDate(date) {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      if (isNaN(selectedDate.getTime()) || selectedDate < today) {
        alert("Please select a valid future date.");
        return false;
      }
      return true;
    }
  
    function validateGuests(guests) {
      if (isNaN(guests) || guests <= 0) {
        alert("Please enter a valid number of guests.");
        return false;
      }
      return true;
    }
  
    function validateSlot(slot) {
      if (!slot) {
        alert("Please select a time slot.");
        return false;
      }
      return true;
    }
  });
  