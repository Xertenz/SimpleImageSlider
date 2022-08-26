// Indicators And Images Selectors
var imgNumber = document.querySelector(".wrapper .indicators .img-number"),
  images = document.querySelectorAll(".wrapper .images img");
for (let i = 1; i <= images.length; i++) {
  let item = document.createElement("li");
  item.appendChild(document.createTextNode(`${i}`));
  imgNumber.appendChild(item);
}
imgNumber.firstElementChild.classList.add("active");
images[0].classList.add("active");

let allIndicators = Array.from(imgNumber.children);
allIndicators.forEach((item) => {
  item.addEventListener("click", function () {
    allIndicators.forEach((ind) => {
      ind.classList.remove("active");
    });
    this.classList.add("active");
    let images = document.querySelectorAll(".wrapper .images img");
    images.forEach((image) => {
      image.classList.remove("active");
    });
    let currentIndex = allIndicators.indexOf(item);
    Array.from(images)[currentIndex].classList.add("active");
  });
});

// The Function To Call On Clicking Next Or Previous
function changingSlideImage(direction) {
  let dir = document.querySelector("." + direction);
  dir.addEventListener("click", function () {
    let imagesContainer = document.querySelector(".wrapper .images");
    let images = document.querySelectorAll(".wrapper .images img"),
      activeImage = document.querySelector(".wrapper .images img.active");
    images.forEach((img) => {
      img.classList.remove("active");
    });

    if (direction == "prev") {
      if (activeImage == imagesContainer.firstElementChild) {
        imagesContainer.lastElementChild.classList.add("active");
      } else {
        activeImage.previousElementSibling.classList.add("active");
      }
    } else if (direction == "next") {
      if (activeImage == imagesContainer.lastElementChild) {
        imagesContainer.firstElementChild.classList.add("active");
      } else {
        activeImage.nextElementSibling.classList.add("active");
      }
    }
    let newActiveImage = document.querySelector(".wrapper .images img.active"),
      indicators = document.querySelectorAll(
        ".wrapper .indicators .img-number li"
      );
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    let newItemIndex = Array.from(images).indexOf(newActiveImage);
    indicators[newItemIndex].classList.add("active");
  });
}

// Previous And Next Selectors
let prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

// Calling The Function On Clicking On Next And Previous
prevBtn.onclick = changingSlideImage("prev");
nextBtn.onclick = changingSlideImage("next");
