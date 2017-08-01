function selectedShape(context) {
  var selection = context.selection;
  var doc = context.document;

  if (selection.count() == 0) {
    [doc showMessage:'Please select a shape'];
  }

  var selectedShape = [selection objectAtIndex:0];

  return selectedShape;
}
