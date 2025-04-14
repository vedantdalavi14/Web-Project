// Initial delay to move the logo to the center
setTimeout(() => {
  document.querySelector('.logo-left').style.animation = 'splitLogo 1.5s ease-in-out forwards';
  document.querySelector('.logo-right').style.animation = 'splitLogoRight 1.5s ease-in-out forwards';
}, 1000); // Logo splits after 2 seconds

// Delay for displaying welcome text after the logo splits
setTimeout(() => {
  document.querySelector('.welcome-text').classList.remove('hidden');
}, 1000); // Show welcome text after 4 seconds



// Redirect to the homepage after the entire animation
setTimeout(() => {
  document.getElementById('opening-animation').classList.add('hidden');
  window.location.href = "index.html";
}, 3000); // 6 seconds for the entire animation
