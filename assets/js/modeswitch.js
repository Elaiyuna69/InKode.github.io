
$(document).ready(function () {
  let isDarkMode = localStorage.getItem('mode') || 'light';

  function applyMode() {
    const newGradient1 = isDarkMode === "dark"
      ? "rgba(2, 4, 21, 1)"
      : "rgba(255, 255, 255, 1)";
    const newGradient2 = isDarkMode === "dark"
      ? "rgba(22, 30, 84, 1)"
      : "rgb(193, 190, 145)";
    const newNeutral = isDarkMode === "dark"
      ? "#fff"
      : "#000";
    const newNeutral2 = isDarkMode === "dark"
      ? "#000"
      : "#fff";
    const newNav = isDarkMode === "dark"
      ? "#000818c8"
      : "rgba(255, 255, 255, 0.72)";
    const newGradientLog1 = isDarkMode === "dark"
      ? "rgba(2, 4, 21, 1)"
      : "rgba(255, 255, 255, 1)";
    const newGradientLog2 = isDarkMode === "dark"
      ? " rgba(0, 212, 255, 0)"
      : "rgba(255, 255, 255, 0)";

    document.documentElement.style.setProperty("--gradient-1", newGradient1);
    document.documentElement.style.setProperty("--gradient-2", newGradient2);
    document.documentElement.style.setProperty("--neutral", newNeutral);
    document.documentElement.style.setProperty("--neutral2", newNeutral2);
    document.documentElement.style.setProperty("--nav-background", newNav);
    document.documentElement.style.setProperty("--gradient-login-1", newGradientLog1);
    document.documentElement.style.setProperty("--gradient-login-2", newGradientLog2);

    if (isDarkMode === "dark") {
      $('#whitemode').hide();
      $('#darkmode').show();
      $('#cppwhite').show();
      $('#cppblack').hide();
      $('#htmlwhite').show();
      $('#htmlblack').hide();
      $('#pywhite').show();
      $('#pyblack').hide();
    } else {
      $('#whitemode').show();
      $('#darkmode').hide();
      $('#cppwhite').hide();
      $('#cppblack').show();
      $('#htmlwhite').hide();
      $('#htmlblack').show();
      $('#pywhite').hide();
      $('#pyblack').show();
    }
  }

  applyMode();

  $('#mode-toggle').click(function () {
    isDarkMode = (isDarkMode === 'dark') ? 'light' : 'dark';
    localStorage.setItem('mode', isDarkMode);

    applyMode();
  });

  $('#mode-toggle-dekstop').click(function () {
    isDarkMode = (isDarkMode === 'dark') ? 'light' : 'dark';
    localStorage.setItem('mode', isDarkMode);

    applyMode();
  })
});

