let lastTouch = null;
      let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        // Add event listeners for touchstart, touchmove, and touchend to the grid element
        grid.addEventListener('touchstart', onTouchStart);
        grid.addEventListener('touchmove', onTouchMove, {passive: false});
        grid.addEventListener('touchend', onTouchEnd);
      } else {
        // Remove touch event listeners from the grid element if the user is not on a mobile device
        grid.removeEventListener('touchstart', onTouchStart);
        grid.removeEventListener('touchmove', onTouchMove);
        grid.removeEventListener('touchend', onTouchEnd);
      }

      function onTouchStart(e) {
        // Save the touch event
        lastTouch = e.touches[0];
      }

      function onTouchMove(e) {
        // Calculate the difference in position between the current touch and the last touch
        const touch = e.touches[0];
        const deltaX = touch.clientX - lastTouch.clientX;
        const deltaY = touch.clientY - lastTouch.clientY;
      
        // Scale the grid based on the difference in touch position
        const scale = Math.max(0.1, Math.min(grid.scale + deltaY * 0.01, 10));
        grid.style.transform = `translate(-50%, -50%) scale(${scale})`;
      
        // Save the current touch for the next touchmove event
        lastTouch = touch;
      
        // Prevent the default behavior of scrolling the page
        e.preventDefault();
      }

      function onTouchEnd(e) {
        // Clear the last touch
        lastTouch = null;
      }