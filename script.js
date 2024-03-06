const scrollAppear = document.querySelector('.scroll-appear');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

appearOnScroll.observe(scrollAppear);

// logic starts here



const forma = document.getElementById("forma")

function fshije() {
forma.reset()
}

// Define function to be called when button is clicked
// Define function to update the video link based on inputs
function updateVideoLink() {
  const weightInput = parseFloat(document.getElementById("weightKg").value);
  const heightInput = parseFloat(document.getElementById("heightCm").value);
  const getBtn = document.getElementById("getBtn");
  const muscularRadio = document.getElementById("muscular");
  const cardioRadio = document.getElementById("cardio");
  const thinnerRadio = document.getElementById("thinner");

  if (weightInput && heightInput) {
    //fat short
    if (weightInput >= 90 && heightInput <= 185) {
      if (muscularRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=TuRv8gRfvb8';
      } else if (cardioRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=ZMO_XC9w7Lw';
      } else {
        getBtn.href = 'https://www.youtube.com/watch?v=NQmW-VQHToc';
      }
    }

    //fat tall
    if (weightInput >= 100 && heightInput >= 185) {
      if (muscularRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=TuRv8gRfvb8';
      } else if (cardioRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=ZMO_XC9w7Lw';
      } else {
        getBtn.href = 'https://www.youtube.com/watch?v=NQmW-VQHToc';
      }
    }

    //skinny tall
    if (weightInput <= 60 && heightInput >= 185) {
      if (muscularRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=an0rksMcJoA';
      } else if (cardioRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=ZMO_XC9w7Lw';
      } else {
        getBtn.href = 'https://www.youtube.com/watch?v=NQmW-VQHToc';
      }
    }

    //skinny short
    if (weightInput >= 90 && heightInput <= 185) {
      if (muscularRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=an0rksMcJoA';
      } else if (cardioRadio.checked) {
        getBtn.href = 'https://www.youtube.com/watch?v=ZMO_XC9w7Lw';
      } else {
        getBtn.href = 'https://www.youtube.com/watch?v=NQmW-VQHToc';
      }
    }
  }
}

// Add event listeners to input fields and radio buttons
const weightInput = document.getElementById("weightKg");
const heightInput = document.getElementById("heightCm");
const radioButtons = document.querySelectorAll('input[type="radio"]');

weightInput.addEventListener("input", updateVideoLink);
heightInput.addEventListener("input", updateVideoLink);

radioButtons.forEach(radioButton => {
  radioButton.addEventListener("change", updateVideoLink);
});
