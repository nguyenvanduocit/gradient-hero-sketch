function makeColor(SVGString) {
  return MSImmutableColor.colorWithSVGString(SVGString).newMutableCounterpart()
}

function makeStops(StopStrings) {
  var stops = [];
  var numStops = StopStrings.length-1;
  StopStrings.forEach(function(StopString, index) {
    var color = makeColor(StopString.color);
    var stop = MSGradientStop.stopWithPosition_color_(StopString.pos, color);
    stops.push(stop);
  });
  return stops
}
function makeGradient(stops){
  var gradient = MSGradient.new();
  gradient.setStops(stops);
  return gradient;
}
function applyGradient(gradient){
  let context = getContext()
  if (context.selection.length == 0) {
    showAlert('Gradient Hero', 'Select a shape with a gradient first!')
    return
  }
  var stops = makeStops(gradient.stops);
  context.selection.forEach(function(shape) {
    var fill = shape.style().fills().firstObject();
    fill.setFillType(1);
    fill.gradient().setStops(stops);
  });
}
