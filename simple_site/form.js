const popUp = document.getElementById("popUp");
popUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(popUp);

  const one = formData.get("one");
  const two = formData.get("two");
  const three = formData.get("three");
  const four = formData.get("four");
  const five = formData.get("five");
  console.log(one, two, five);
});
