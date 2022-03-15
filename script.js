// if ?no-title is in url, don't show title
document
  .getElementById("output-container")
  .classList.add(location.search.includes("no-title") ? "no-title" : "");
