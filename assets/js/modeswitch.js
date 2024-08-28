let isDarkMode = true;

function switchMode() {
  isDarkMode = !isDarkMode;
  const newGradient1 = isDarkMode
    ? "rgba(2, 4, 21, 1)"
    : "rgba(255, 255, 255, 1)";
  const newGradient2 = isDarkMode
    ? "rgba(22, 30, 84, 1)"
    : "rgba(0, 88, 156, 1)";
  const newNeutral = isDarkMode
    ? "#fff"
    : "#000";
    const newNav = isDarkMode
    ? "#000818c8"
    : "#d6e4ffc8";
  document.documentElement.style.setProperty("--gradient-1", newGradient1);
  document.documentElement.style.setProperty("--gradient-2", newGradient2);
  document.documentElement.style.setProperty("--neutral", newNeutral);
  document.documentElement.style.setProperty("--nav-background", newNav);

  // LOGO SWITCH


  if (isDarkMode) {
    whitemode.style.display = 'block';
    darkmode.style.display = 'none';
  } else {
    whitemode.style.display = 'none';
    darkmode.style.display = 'block';
  }
}

