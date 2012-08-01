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
})(this.unsafeWindow || this);
