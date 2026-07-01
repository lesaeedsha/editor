const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    textarea.value = "";
  }
});
