// ==UserScript==
// @name        auto-kindle-it
// @namespace   auto-kindle-it@basyura.org
// @include     http://fivefilters.org/kindle-it/send.php?url=*
// @version     1
// ==/UserScript==


(function (w) {
    setTimeout(function() {
        document.getElementById("send").click();
      },100)

    setInterval(function () {
        var h3 = document.getElementsByTagName("h3")[0];
        if (h3 != undefined) {
          history.back();
        }
      }, 1000)
})(this.unsafeWindow || this);
