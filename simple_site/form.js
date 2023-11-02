const popUp = document.getElementById("popUp");

popUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(popUp);

  const firstName = formData.get("firstName");
  const secondName = formData.get("secondName");
  const lastName = formData.get("lastName");
  const colour = formData.get("colour");
  const pet = formData.get("pet");

  let data = {
    fam: firstName,
    name: secondName,
    fat: lastName,
    col: colour,
    pt: pet,
  };

  var str = JSON.stringify(data, null, 2);

  let pre = document.createElement("pre");

  pre.innerText = str;

  document.body.appendChild(pre);

  popupBg.classList.remove("active");
  popUp.classList.remove("active");
  e.target.reset();
});
