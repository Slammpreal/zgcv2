console.warn(
  "%cHello!!",
  "color: red; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "Feel free to use anything you find here for your project."
);

// Ads logic (no change)
var adStatus = localStorage.getItem("adConsent") === "true"; // default: true

if (!adStatus) {
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    console.log("Ads enabled, thank you for your support!");
  })();
}

// Analytics script (no change)
const script = document.createElement("script");
script.src = "https://data.ZGC.net/script.js";
script.defer = true;
script.setAttribute("data-website-id", "47d72bde-ba44-4125-b161-00e0c2f5b7f0");
document.head.appendChild(script);
script.onload = function() {
  console.log("Data script loaded");
  umami.track([location.hostname, "pageview"].join("/"));
};

// Restore title and icon (no change)
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
  console.log("Title set to: " + local_title);
}
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
  console.log("Icon set to: " + local_icon);
}

// === THEME SWITCHING ===

// Available themes you have
const THEMES = ['default', 'dark', 'tokyo-night']; // add other themes you have here

function setTheme(themeName) {
  if (!THEMES.includes(themeName)) {
    console.warn(`Theme "${themeName}" is not recognized.`);
    return;
  }

  // Remove all theme classes from body
  THEMES.forEach(theme => document.body.classList.remove(theme));

  // Add selected theme class
  document.body.classList.add(themeName);

  // Save to localStorage
  localStorage.setItem('selectedTheme', themeName);

  console.log(`Theme set to: ${themeName}`);
}

// On page load, restore saved theme or fallback to default
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  setTheme(savedTheme);
});
