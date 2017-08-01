import {makeColor, buildDialog} from './common'
export default function (context) {
  if (context.selection.length == 0) {
    buildDialog('Fix Gradient', 'Select a shape with a gradient first!').runModal()
    return
  }
}
