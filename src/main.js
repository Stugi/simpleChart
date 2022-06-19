// import Handlebars from "handlebars";
import template from "./example.hbs";
import "./components/button/index"

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template({
    title: "NNNN",
    descr: "Desccr",
    text: "1234",
  });
});
  