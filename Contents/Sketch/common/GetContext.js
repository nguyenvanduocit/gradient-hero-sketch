function getContext() {
  var doc = NSDocumentController.sharedDocumentController().currentDocument();

  if (MSApplicationMetadata.metadata().appVersion > 41.2) {
    var selection = doc.selectedLayers().layers();
  } else {
    var selection = doc.selectedLayers();
  }

  return {
    document: doc,
    selection: selection
  }
}
