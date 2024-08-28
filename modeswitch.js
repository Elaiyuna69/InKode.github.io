$(document).ready(function() {
  let isDarkMode = localStorage.getItem('mode') || 'light';

  function applyMode() {
    const newGradient1 = isDarkMode === "dark"
      ? "rgba(2, 4, 21, 1)"
      : "rgba(255, 255, 255, 1)";
    const newGradient2 = isDarkMode === "dark"
      ? "rgba(22, 30, 84, 1)"
      : "rgba(0, 88, 156, 1)";
    const newNeutral = isDarkMode === "dark"
      ? "#fff"
      : "#000";
    const newNav = isDarkMode === "dark"
      ? "#000818c8"
      : "#d6e4ffc8";

    document.documentElement.style.setProperty("--gradient-1", newGradient1);
    document.documentElement.style.setProperty("--gradient-2", newGradient2);
    document.documentElement.style.setProperty("--neutral", newNeutral);
    document.documentElement.style.setProperty("--nav-background", newNav);

    if (isDarkMode === "dark") {
      $('#whitemode').hide();
      $('#darkmode').show();
    } else {
      $('#whitemode').show();
      $('#darkmode').hide();
    }
  }

  applyMode();

  $('#mode-toggle').click(function() {
    isDarkMode = (isDarkMode === 'dark') ? 'light' : 'dark';
    localStorage.setItem('mode', isDarkMode);

    applyMode();
  });

  $('#mode-toggle-dekstop').click(function() {
    isDarkMode = (isDarkMode === 'dark') ? 'light' : 'dark';
    localStorage.setItem('mode', isDarkMode);

    applyMode();
  })
});
