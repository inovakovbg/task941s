import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  window.__JS_APP = app;
});


// function constructor() {
//   this.emojis = [];
//   this.banana = "🍌";
// }

// const numbers = ["🐒", "🦍", "🦧"];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num + "🍌";
// }

// let fLen = newArr.length;
// let order = "<p>";
// for (let i = 0; i < fLen; i++) {
//   order += "<p>" + newArr[i] + "</p>";
// }
// order += "</p>";

// document.getElementById("emojiss").innerHTML = "🐒" + "🍌" + "🦍"+ "🍌"+ "🦧"+"🍌";
// document.getElementById("emojis").innerHTML = order;