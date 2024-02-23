const button = document.createElement("button");
document.getElementById("top-row").appendChild(button);
button.innerHTML = "10x";
button.addEventListener("click",()=>{document.querySelector('video').playbackRate = 10.0});