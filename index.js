window.addEventListener("load", function () {
  const email = new URLSearchParams(document.location.search).get("email");
  if (email) document.getElementById("email-sent").innerText = email;
});
