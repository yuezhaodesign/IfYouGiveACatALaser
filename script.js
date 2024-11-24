document.addEventListener('DOMContentLoaded', function() {
  const catImg = document.getElementById('cat-img');
  const spinImg = document.getElementById('spin-img');
  const replayButton = document.getElementById('replay-button');

  spinImg.style.display = 'none';
  replayButton.style.display = 'none';

  catImg.addEventListener('click', function(event) {
    const rect = catImg.getBoundingClientRect();
    const tailArea = {
      x: rect.left + catImg.width * 0.5,
      y: rect.top + catImg.height * 0.1,
      width: catImg.width * 0.5,
      height: catImg.height * 0.5
    };

    if (
      event.clientX >= tailArea.x &&
      event.clientX <= tailArea.x + tailArea.width &&
      event.clientY >= tailArea.y &&
      event.clientY <= tailArea.y + tailArea.height
    ) {
      catImg.style.display = 'none';          // Hide cat image
      spinImg.style.display = 'block';        // Show spin image
      replayButton.style.display = 'block';   // Show replay button
      spinImg.classList.add('spin-image');    // Add spinning animation
    }
  });

  replayButton.addEventListener('click', function() {
    spinImg.style.display = 'none';              // Hide spin image
    spinImg.classList.remove('spin-image');      // Remove spinning animation
    catImg.style.display = 'block';              // Show cat image
    replayButton.style.display = 'none';         // Hide replay button
  });

  // Hide the loading screen and show main content after 5 seconds
  setTimeout(function() {
    const loadingScreen = document.querySelector('.loading');
    const mainContent = document.getElementById('main-content');
    loadingScreen.style.display = 'none';    // Hide loading screen
    mainContent.style.display = 'block';     // Show main content
  }, 5000); 
}); 