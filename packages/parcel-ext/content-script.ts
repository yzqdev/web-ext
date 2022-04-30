import myImage from "url:./image.jpg";

const injectedImage = document.createElement("img");
injectedImage.src = myImage;
document.body.appendChild(injectedImage);
