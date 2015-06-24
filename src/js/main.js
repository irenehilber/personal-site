/*document.querySelector(".js-link-explore").addEventListener("click", function(event) {
  // event.preventDefault();
  console.log("clicked");
  window.scrollTop = 800;

});*/


 function scrollWin() {
    window.scrollBy(0, 1);
  };

var linkExplore = document.querySelector(".js-link-explore");
linkExplore.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clicked");
  scrollWin();

});



var smoothScroll = function (anchor, duration) {

};

function animationLoop() {

window.requestAnimationFrame(animationLoop);
}

animationLoop();
