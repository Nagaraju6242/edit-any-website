const headerHTML = ` <div class="edit-any-header"> <h2>Edit Any</h2> <button class="edit-any-download-code"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background: new 0 0 490 490" xml:space="preserve" > <g> <g> <g> <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1C262.1,7.6,254.5,0,245,0z"/> <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z"/> </g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> Download </button> <div class="edit-any-pull-button"> <div class="edit-any-pull-arrow"></div></div></div>`;
const styleTag = `.edit-any-header{position:fixed;top:0;left:0;width:100%;height:100px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 3rem;z-index:1000!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);-webkit-transition:-webkit-transform .5s;transition:transform .5s;-o-transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.edit-any-header.hidden{-webkit-transform:translateY(-101px);-ms-transform:translateY(-101px);transform:translateY(-101px)}.edit-any-header h2{color:#111}.edit-any-header .edit-any-download-code{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.8rem 1rem;background-color:#00c851!important;color:#fff;border:none;border-radius:5px;cursor:pointer;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.edit-any-header .edit-any-download-code:hover{-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.edit-any-header .edit-any-download-code:active{background-color:#006228!important;-webkit-box-shadow:0 5px 11px 0 rgb(0 0 0 / 18%),0 4px 15px 0 rgb(0 0 0 / 15%);box-shadow:0 5px 11px 0 rgb(0 0 0 / 18%),0 4px 15px 0 rgb(0 0 0 / 15%)}.edit-any-header .edit-any-download-code svg{margin-right:10px;fill:#fff;width:25px}.edit-any-pull-button{position:absolute;bottom:0;right:15%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px;background-color:#fff;cursor:pointer;-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.edit-any-pull-arrow{-webkit-box-sizing:border-box;box-sizing:border-box;height:20px;width:20px;border-style:solid;border-color:#111;border-width:0 2px 2px 0;-webkit-transform:translateY(-25%) rotate(45deg);-ms-transform:translateY(-25%) rotate(45deg);transform:translateY(-25%) rotate(45deg);-webkit-transition:.5s;-o-transition:.5s;transition:.5s}.edit-any-header.hidden .edit-any-pull-arrow{-webkit-transform:translateY(25%) rotate(-135deg);-ms-transform:translateY(25%) rotate(-135deg);transform:translateY(25%) rotate(-135deg)}.edit-any-pull-arrow:hover{border-bottom-width:4px;border-right-width:4px}`;
const origin = window.location.origin;

class EditAny {
  constructor(options = { start: false }) {
    if (options.start) {
      this.start();
    }
  }

  start() {
    this.addHelpers();
    this.addEvents();
    document.body.contentEditable = true;
    $("[class^='edit-any-']").attr("contenteditable", false);
  }

  addHelpers() {
    $(headerHTML).appendTo("body");
  }

  removeHelpers() {
    $(".edit-any-header").remove();
  }

  addEvents() {
    $(".edit-any-pull-button").click(function () {
      $(".edit-any-header").toggleClass("hidden");
    });

    $(".edit-any-download-code").click(function () {
      var zip = new JSZip();
      var html = document.documentElement.cloneNode(true);
      html = $(html);
      html.find("body").attr("contenteditable", false);
      html.find("[class^='edit-any-']").remove();
      // Download all css and js files and add them to zip
      var css = html.find("link[rel='stylesheet']");
      var js = html.find("script[src]");
      var img = html.find("img[src]");
      var promises = [];
      css.each(function (index, element) {
        var href = $(element).attr("href");
        if (href[0] === "/") {
          href = href.substring(1);
        }
        if (!href.startsWith("https://") && !href.startsWith("http://")) {
          promises.push(
            $.get(href, function (data) {
              zip.file(href, data);
            })
          );
        }
      });
      js.each(function (index, element) {
        var src = $(element).attr("src");
        if (src[0] === "/") {
          src = src.substring(1);
        }
        if (!src.startsWith("https://") && !src.startsWith("http://")) {
          promises.push(
            $.get(src, function (data) {
              zip.file(src, data);
            })
          );
        }
      });
      img.each(function (index, element) {
        var src = $(element).attr("src");
        if (src[0] === "/") {
          src = src.substring(1);
        }
        if (!src.startsWith("https://") && !src.startsWith("http://")) {
          const imageBlob = fetch(`${origin}/${src}`).then((response) =>
            response.blob()
          );
          zip.file(src, imageBlob);
        }
      });
      Promise.all(promises).then(function () {
        zip.file("index.html", html.html());
        console.log(zip.files);
        zip.generateAsync({ type: "blob" }).then(function (content) {
          saveAs(content, "download.zip");
        });
      });
    });
  }

  removeEvents() {
    $(".edit-any-pull-button").off("click");
  }

  stop() {
    document.body.contentEditable = false;
  }
}

window.onload = function () {
  // var editany = new EditAny({ start: true });
  $.when(
    $.getScript(
      "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"
    ),
    $.getScript(
      "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"
    ),
    $.Deferred(function (deferred) {
      $(deferred.resolve);
    })
  ).done(function () {
    //place your code here, the scripts are all loaded
    console.log("All Scripts Loaded Successfully");
    $(`<style>${styleTag}</style>`).appendTo("head");
    var editany = new EditAny({ start: true });
  });
};
