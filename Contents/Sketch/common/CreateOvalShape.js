var createOvalShape =  function () {
  // Create oval object
  var ovalShape = MSOvalShape.alloc().init();
  ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,100,100));

  // Wrap it with MSShapeGroup and set simple fill style.
  var shapeGroup=MSShapeGroup.shapeWithPath(ovalShape);
  var fill = shapeGroup.style().fills().addNewStylePart();
  fill.color = MSColor.colorWithSVGString("#dd2020");

  shapeGroup.frame().constrainProportions = false; // Set to `true` if you want shape to be constrained.

  // Add created shape group to the current page.
  doc.currentPage().addLayers([shapeGroup]);
}
