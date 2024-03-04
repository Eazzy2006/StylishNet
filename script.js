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

const weightInput = document.getElementById("weightKg")
const heightInput = document.getElementById("heightCm")
const muscularRadio = document.getElementById("muscular")
const forma = document.getElementById("forma")

function fshije() {
forma.reset()
}

