const emailBtn = document.querySelector("#email-btn");

emailBtn.addEventListener("click", function () {
  const email = emailBtn.getAttribute("data-email");
  navigator.clipboard.writeText(email).then(() => {
    this.innerText = "Email Copied!";
    this.style.backgroundColor = "#000";
    this.style.borderColor = "#000";
    this.style.fontWeight = "bolder";
  });
});
