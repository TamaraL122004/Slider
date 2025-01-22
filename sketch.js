var sliders = [];
var angle = 0;

function setup() {
  noCanvas();

  for (var i = 0; i < 150; i++) {
    let slider = createSlider(0, 250, 50);
    slider.addClass("slider"); // Agregar clase CSS
    sliders[i] = slider;
  }
}

function draw() {
  var offset = 0;

  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 245);
    sliders[i].value(x);
    offset += 0.1;
  }

  angle += 0.04;
}
