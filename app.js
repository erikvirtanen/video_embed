var base = 'http://asdf.us/sjproxy.cgi?url=';

function examplePlugin(options) {
  var $vid_obj = this;
  var vjsOptions = $vid_obj.options();
  console.log($vid_obj);
  $vid_obj.on('play', function(e) {
    
  });
  var controlBar = $("#" + vjsOptions.id + " .vjs-control-bar");
  console.log(controlBar);
  var buttonFF = $('<div class="vjs-control vjs-ff">' +
                      '<div class="vjs-control-content">' + 
                        '<span class="vjs-control-text">Subtitles</span>' + 
                      '</div>'+
                   '</div>').appendTo(controlBar);
  buttonFF.on('click', function () {
    $vid_obj.pause();
    console.log('FF clicked!');
  });
};

_V_.plugin('examplePlugin', examplePlugin);
var $vid_obj = _V_("div_video", { plugins: 
                  { examplePlugin: 
                      { 
                        exampleOption: true
                      } 
                  }
                });

function setSource(src) {
    var options = $vid_obj.options();
    var $target = base+src;
    var filename = src.replace(/([\.\=\?\/\:])/g, "_");
    console.log("filename is: "+filename);

    var controlBar = $("#" + options.id + " .vjs-control-bar");
    var bigPlayButton = $("#" + options.id + " .vjs-big-play-button");

    bigPlayButton.hide();

    $vid_obj.pause();
    
    // assign the target video to the source node
    $vid_obj.src({src: $target, type: 'video/flv'});

    // load the new source
    $vid_obj.load();
    
    controlBar.addClass('vjs-control-hide');

    $vid_obj.posterImage.show();
    $vid_obj.on("loadedmetadata", function () {
      bigPlayButton.show();
      controlBar.removeClass('vjs-control-hide');
    });
};

setSource('http://www.youtube.com/watch?v=xbJqPlkVN-I');