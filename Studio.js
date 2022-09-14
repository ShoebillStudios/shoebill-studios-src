// In Studio you can tweak options never seen before in Clicktroll or any other bookmarklet !
var defaultJson = {ct_msg:"TROLLED!!!!!",ct_url:"https://realmafricasafaris.com/wp-content/uploads/2020/02/The-Shoebill-Stork.jpg"}
if(!localStorage.getItem("studio")) {
    alert("Studio has never been configured on this page! Configuring..")
    localStorage.setItem("studio",defaultJson)
}