// if ?no-title is in url, don't show title
if (location.search.includes("no-title")) {
  document.getElementById("output-container").classList.add("no-title");
}

(() => {
  let showLocks = true;

  document.getElementById("hideLocks").addEventListener("click", () => {
    [...document.getElementsByTagName("span")]
      .filter((el) => el.innerText === "🔓︎" || el.innerText === "🔐︎")
      .forEach((el) => (el.style.display = showLocks ? "none" : ""));
    showLocks = !showLocks;
  });
})();

// Create obsidian-style links
document
  .querySelectorAll("span.link")
  .forEach((el) => (el.innerText = `[[${el.innerText}]]`));