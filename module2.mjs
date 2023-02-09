import TLanguageChange from "./module1.mjs";

function p() {
  let elements = [
    document.getElementById("header"),
    document.getElementById("startBtn"),
    document.getElementById("En"),
    document.getElementById("No"),
    document.getElementById("ChosenLanguage"),
  ];

  elements[2].addEventListener("click", () => {
    let dict = new TLanguageChange("En");
    changeButtons(dict);
    console.log(dict.ChosenLanguage);
  });

  elements[3].addEventListener("click", () => {
    let dict = new TLanguageChange("No");
    changeButtons(dict);
    console.log(dict.ChosenLanguage);
  });

  function changeButtons(dict) {
    for (let i = 0; i < elements.length; i++) {
      for (const key in dict) {
        if (elements[i].id === key) {
          elements[i].innerHTML = dict[key];
        }
      }
    }
  }
}

export default p;
