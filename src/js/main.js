/*document.querySelector(".js-link-explore").addEventListener("click", function(event) {
  // event.preventDefault();
  console.log("clicked");
  window.scrollTop = 800;

});*/

var forEach = Array.prototype.forEach;





function scrollWin(scrollTop) {
  window.scrollBy(0, scrollTop);
};

function getOffset(el, offsetSave){
  var offset = offsetSave || 0;
  offset += el.offsetTop;

  if ( el.parentElement && el.parentElement.offsetTop ) {
    return getOffset(el.parentElement, offset);
  } else {
    return offset;
  }
}

var anchorLinks = document.querySelectorAll(".js-anchor");

forEach.call(anchorLinks, function( anchorLink ){
  anchorLink.addEventListener("click", function(event) {
    event.preventDefault();
    var scrollTop, el = document.querySelector( this.getAttribute('href') );
    scrollTop = getOffset(el);

    scrollWin(scrollTop);
  });
});

var smoothScroll = function (anchor, duration) {

};

function animationLoop() {

window.requestAnimationFrame(animationLoop);
}

animationLoop();
