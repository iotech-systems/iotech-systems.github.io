

class pageApp {

   init() {
      console.log("page_init");
   }

};


/* init */
var app = new pageApp();
document.addEventListener("DOMContentLoaded", app.init);
