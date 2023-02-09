import Dictionary from "./Dictionary.mjs";

function TLanguageChange(lang) {
  if (lang === "No") {
    return Dictionary.no;
  } else {
    return Dictionary.en;
  }
}
export default TLanguageChange;
