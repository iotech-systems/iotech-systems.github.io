

class pageApp {

   init() {
      alert("pageinit")
   }

};


/* init */
var app = new pageApp();
document.addEventListener("DOMContentLoaded", app.init);
