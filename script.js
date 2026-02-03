let images = [];

for (let i = 0; i < 20; i++) {
  images.push("https://picsum.photos/500?random=" + i);
}

let index = 0;

let gallery = document.getElementById("gallery");

for (let i = 0; i < 20; i++) {
  let img = document.createElement("img");
  img.src = images[i];
  img.onclick = function () {
    openBox(this.src);
  };
  gallery.appendChild(img);
}

let lightbox = document.getElementById("lightbox");
let bigImg = document.getElementById("bigImg");

function openBox(src) {
  index = images.indexOf(src);
 lightbox.style.display = "flex";
 bigImg.src = src;
}

function closeBox() {
 lightbox.style.display = "none";
}

//next button
function next() {
  index = (index + 1) % images.length;
  bigImg.src = images[index];
}

//previous button
function prev() {
  index = (index - 1 + images.length) % images.length;
  bigImg.src = images[index];
}

//image deletion
function deleteImg() {
  images.splice(index, 1);  
  closeBox();                
  gallery.innerHTML = "";    

  // gallery rebuild
  for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    img.onclick = function () {
      openBox(this.src);
    };
    gallery.appendChild(img);
  }
}
