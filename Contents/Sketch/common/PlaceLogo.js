function placeLogo(logo, context) {
    var logoUrl = logo.svg_file;
    var selection = context.selection;
    // var selectedShape = [selection objectAtIndex:0];
    var doc = context.document;
    // var selectedFrame = selectedShape.frame();
    var svgImporter = MSSVGImporter.svgImporter();
    
    var fileURL = NSURL.URLWithString(logoUrl);
    svgImporter.prepareToImportFromURL(fileURL);
    var importedSVGLayer = svgImporter.importAsLayer();
    importedSVGLayer.name = logo.name;

    // Add label layer
    var page = doc.currentPage();
    var canvas = page.currentArtboard() || page;
    canvas.addLayers([importedSVGLayer]);
}
