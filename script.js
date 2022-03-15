// if ?no-title is in url, don't show title
document
  .getElementById("output-container")
  .classList.add(location.search.includes("no-title") ? "no-title" : "");

(() => {
  let showLocks = true;

  document.getElementById("hideLocks").addEventListener("click", () => {
    [...document.getElementsByTagName("span")]
      .filter((el) => el.innerText === "🔓︎" || el.innerText === "🔐︎")
      .forEach((el) => (el.style.display = showLocks ? "none" : ""));
    showLocks = !showLocks;
  });
})();
