
var isAnimating = false;
var leftActive = 1;
var rightActive = $('.right-container > div').length; // always the last element

$('body').bind('mousewheel', function(e) {
  console.log('x: ', e.deltaX, 'y: ', e.deltaY, 'mode: ', e.deltaMode, 'factor: ', e.deltaFactor);
  if (isOutOfBoundaries(e) || isAnimating) {
    return false;
  } else if (e.deltaY < 0) {
      isAnimating = true;
      leftActive++;
      rightActive--;
      animateContainer('left', 'negative');
      animateContainer('right', 'positive');
  } else if (e.deltaY > 0) {
      isAnimating = true;
      leftActive--;
      rightActive++;
      animateContainer('left', 'positive');
      animateContainer('right', 'negative');
  }
});

function animationComplete() {
  isAnimating = false;
}

function animateContainer(el, offset) {
  var shift = offset === "negative" ? "-" : "+";
  $('.' + el + '-container').animate(
    {top: shift + "=100%"}, 1350, animationComplete
  );
}

function isOutOfBoundaries(e) {
  var leftContainerAmt = $('.left-container .section').length;
  var rightContainerAmt = $('.right-container .section').length;
  if (e.deltaY < 0 && (leftActive === leftContainerAmt)) {
    return true;
  } else if (e.deltaY > 0 && (rightActive === rightContainerAmt)) {
    return true;
  }
}


