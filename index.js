document.querySelectorAll(".expandBtn").forEach(button => {
  button.addEventListener("click", () => {
    const div = button.nextElementSibling;

    if (div.style.height === "0px" || div.style.height === "") {
      div.style.height = div.scrollHeight + "px";
      button.textContent = "Hide projects";
    } else {
      div.style.height = "0";
      button.textContent = button.dataset.label;
    }
  });
});
