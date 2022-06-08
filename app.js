let btnPrev = document.querySelector("#left");
let btnNext = document.querySelector("#right");
let image = document.querySelector("#imgs");

function MyObjectConstructor(source, id) {
  // this is a pointer that points to the reference of that object
  this.source = source;
  this.id = id;
  this.sayAllInOne = function () {
    return `<img src="${this.source}" id="${this.id}">`;
  };
}

let image1 = new MyObjectConstructor("img/1.jpg", "imgone");
let image2 = new MyObjectConstructor("img/2.jpg", "imgtwo");
let image3 = new MyObjectConstructor("img/3.jpg", "imgthree");
let image4 = new MyObjectConstructor("img/4.jpg", "imgfour");

btnNext.addEventListener("click", clickNext);
btnPrev.addEventListener("click", clickPrevious);
// btnPrev.addEventListener("click", clickPrev);

let gallery = [image1, image2, image3, image4];
let index = 1;

function clickNext() {
  if (index === 4) {
    index = 1;
  } else {
    index = index + 1;
  }
  image.innerHTML = gallery[index - 1].sayAllInOne();
}

function clickPrevious() {
  if (index === 1) {
    index = 4;
  } else {
    index = index - 1;
  }
  image.innerHTML = gallery[index - 1].sayAllInOne();
}
