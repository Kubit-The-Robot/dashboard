
/**
 * Fix Google Chrome scroll with the topbar
 */
function fixMobileScroll() {
  setTimeout(function(){
    window.scrollTo(0, 1);
  }, 0);
}

/**
 * Forces the game go to fullscreen
 */
function setFullscreen() {
  document.documentElement.requestFullscreen();
}

/**
 * Initialize all listeners
 */
export function initializeGameListeners() {
  window.addEventListener('load',function() {
    fixMobileScroll();
  });
}