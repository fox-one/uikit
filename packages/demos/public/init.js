try {
  var state = JSON.parse(localStorage.getItem("app"));

  if (state.app.dark) {
    document.querySelector("html").classList.add("app--dark");
  }
} catch (error) {
  console.log("init theme error");
}
