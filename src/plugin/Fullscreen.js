// Inspired on https://github.com/leknoppix/ckeditor5-fullscreen

import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import ImageFullBig from './icon/fullscreen.svg?raw'
import ImageFullCancel from './icon/exit-fullscreen.svg?raw'
import './css/fullscreen.css'

export default class FullScreen extends Plugin {
  init() {
    const editor = this.editor

    editor.ui.componentFactory.add('fullScreen', (locale) => {
      const view = new ButtonView(locale)

      let fullscreenMode = false
      view.set({
        label: 'Enter Fullscreen',
        icon: ImageFullBig,
        tooltip: true,
      })

      // Callback executed once the image is clicked.
      view.on('execute', () => {
        if (fullscreenMode) {
          document.getElementById('editor-container').classList.toggle('fullscreeneditor')
          document.body.classList.toggle('fullscreenoverlay')
          view.set({
            label: 'Enter Fullscreen',
            icon: ImageFullBig,
            tooltip: true,
          })
          fullscreenMode = false
        }
        else {
          document.getElementById('editor-container').classList.toggle('fullscreeneditor')
          document.body.classList.toggle('fullscreenoverlay')
          view.set({
            label: 'Exit Fullscreen',
            icon: ImageFullCancel,
            tooltip: true,
          })
          fullscreenMode = true
        }
      })

      return view
    })
  }
}
