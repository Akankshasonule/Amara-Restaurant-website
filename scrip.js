// const ham = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav-links');

// ham.addEventListener('click', () => {

//     nav.classList.toggle('active');
// });

const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const email_input = document.querySelector(".emailInput");
const emailBtn = document.querySelector(".emailBtn");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// for toast message

document.querySelector(".snackBtn").addEventListener("click", () => {
  const randomTableNumber = Math.floor(Math.random() * 8) + 1;
  showSnackBar(Yourtablenumberis${randomTableNumber});
});

function showSnackBar(text) {
  var x = document.querySelector(".snackText");
  x.textContent = ${text};

  x.className += " show";

  setTimeout(function () {
    x.className = x.className.replace(" show", "");
  }, 3000);
}

// for email submit

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email_input.addEventListener("input", () => {
  if (emailPattern.test(email_input.value.trim())) {
    emailBtn.disabled = false;
  } else {
    emailBtn.disabled = true;
  }
});

document.querySelector(".emailBtn").addEventListener("click", () => {
  setTimeout(() => {
    showSnackBar("Thanks for contacting us");
    email_input.value = "";
    email_input.blur();
},1000);
});