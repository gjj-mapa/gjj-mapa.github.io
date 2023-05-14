import { meSpace } from './grid tonk.js';
const me = document.querySelector(`#square${meSpace}`);
let dialog = document.querySelector('.dialog-me');

const html = document.querySelector('html');
const body = document.querySelector('body');
html.style = 'overflow: visible;';
body.style = 'overflow: visible;';

/*me.addEventListener("click", () => {
    dialog.show();
    let viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    let isOffScreen = dialog.getBoundingClientRect().top < 0 || dialog.getBoundingClientRect().top > viewportHeight;

      if (isOffScreen) {
        dialog.style.top = '125%';
      }
      else {
        dialog.style.top='-250%';
      }
      //console.log(isOffScreen + " because "+ dialog.getBoundingClientRect().top + "<0px or " + dialog.getBoundingClientRect().top + ">"+viewportHeight)
})
*/
