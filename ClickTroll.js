document.body.onclick = function () {
  ct_message = localStorage.getItem("CT:MTY4MTg1Mjc3NDo0LzE4LzIzOkN0djI=");
  ct_url = "https://realmafricasafaris.com/wp-content/uploads/2020/02/The-Shoebill-Stork.jpg";
  if (!localStorage.getItem("CT:MTY4MTg1Mjc3NDo0LzE4LzIzOkN0djI=")) {
    ct_message = "TROLLED!!!!";
    localStorage.setItem("CT:MTY4MTg1Mjc3NDo0LzE4LzIzOkN0djI=", ct_message);
  }
  o = document.createElement("iframe");
  o.width = 1280;
  o.height = 720;
  o.src = ct_url;
  document.body.appendChild(o);
  ol = { x: window.screenX, y: window.screenY };
  scrollTo(0, 9999999999999);
  alert(ct_message);
  setTimeout(function () {
    scrollTo(ol.x, ol.y);
    o.remove();
  }, 250);
};
