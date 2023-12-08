//your code here
let dropInfo = {
  dragElement: null,
  referenceElement: null,
};

let images = document.querySelectorAll(".image");
let imagesContainer = document.querySelector("#parent");

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    dropInfo.dragElement = e.target;
    dropInfo.referenceElement = e.target.nextElementSibling;
    console.log(dropInfo);
  });

  image.addEventListener("dragover", (e) => {
    if (e.target == dropInfo.dragElement) {
      return;
    }

    e.preventDefault();
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();
    let drop = e.target;

    if (drop === dropInfo.dragElement) {
      return;
    }

    imagesContainer.replaceChild(dropInfo.dragElement, drop);

    if (drop == dropInfo.referenceElement) {
      imagesContainer.insertBefore(drop, dropInfo.dragElement);
    } else {
      imagesContainer.insertBefore(drop, dropInfo.referenceElement);
    }
  });
});