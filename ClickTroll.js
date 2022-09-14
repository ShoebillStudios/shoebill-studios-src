document.body.onclick = function () {
  a = JSON.parse(localStorage.getItem("studio")).ct_msg;
  if (!JSON.parse(localStorage.getItem("studio")).ct_msg) {
    a.ct_msg = "TROLLED!!!!!";
    a.ct_url = "https://realmafricasafaris.com/wp-content/uploads/2020/02/The-Shoebill-Stork.jpg";
    localStorage.setItem("studio", JSON.stringify(a))
  }
  var e = JSON.parse(localStorage.getItem("studio")).ct_url;
  o = document.createElement("iframe");
  o.width = 1280;
  o.height = 720;
  o.src = e;
  document.body.appendChild(o);
  ol = { x: window.screenX, y: window.screenY };
  scrollTo(0, 9999999999999);
  alert(a);
  setTimeout(function () {
    scrollTo(ol.x, ol.y);
    o.remove();
  }, 1500);
};
