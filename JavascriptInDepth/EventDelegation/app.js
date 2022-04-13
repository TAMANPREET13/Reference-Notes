// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e.target.id);
//   if (e.target.tagName == "LI") {
//     window.location.href = "/" + e.target.id;
//   }
// });

// I am clicking on the li and eventHandler is attached with ul but
// it is getting implemented for li because of event delegation which
// is happening because of event bubbling

// EG - 2

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//Behaviour patterns can also be achieved through event delegation.

//Benefits of event delegation
