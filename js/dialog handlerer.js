import {me} from "./grid tonk.js";
let dialog = document.querySelector(".dialog-me");
let viewportHeight;
let isOffScreen;

me.addEventListener("click", () => {
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
