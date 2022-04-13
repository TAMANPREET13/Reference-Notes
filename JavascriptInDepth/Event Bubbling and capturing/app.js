document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true // capturing
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false //bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked");
    e.stopPropagation();
  },
  true //capturing
);

// IF 3rd Argument is true then event delegation if not then
// event bubbling
