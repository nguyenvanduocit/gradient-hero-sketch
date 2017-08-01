function showAlert(title, message) {
  var alert = COSAlertWindow.new()
  alert.setMessageText(title)
  alert.setInformativeText(message)
  alert.runModal()
}
