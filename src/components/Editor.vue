<template>
  <div id="editor-container">
    <div class="document-editor__toolbar"></div>
    <ckeditor
      :model-value="isReady ? value : ''"
      :editor="editor"
      @ready="onReady"
      @blur="handleBlur"
      @input="input"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";

import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Fullscreen from "../plugin/Fullscreen";

export default {
  name: "app",
  data() {
    return {
      isReady: false,
      editor: DecoupledEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        plugins: [
          Alignment,
          Autoformat,
          BlockQuote,
          Bold,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Heading,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          ListStyle,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          Strikethrough,
          Table,
          TableCellProperties,
          TableProperties,
          TableToolbar,
          TextTransformation,
          TodoList,
          Underline,
          Fullscreen,
        ],

        toolbar: {
          items: [
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "|",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "alignment",
            "|",
            "numberedList",
            "bulletedList",
            "|",
            "outdent",
            "indent",
            "|",
            "todoList",
            "link",
            "blockQuote",
            "imageUpload",
            "insertTable",
            "mediaEmbed",
            "|",
            "undo",
            "redo",
            "|",
            "fullScreen",
          ],
        },
        language: "en",
        image: {
          toolbar: [
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
          ],
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
          ],
        },
      },
    };
  },
  props: {
    value: {
      type: String,
      default: () => "",
    },
  },
  beforeUnmount() {
    const toolbarContainer = document.querySelector(
      ".document-editor__toolbar"
    );
    toolbarContainer.innerHTML = "";
  },
  methods: {
    onReady(editor) {
      const toolbarContainer = document.querySelector(
        ".document-editor__toolbar"
      );
      toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      this.isReady = true;
    },
    input(value) {
      if (!value.length) return;

      this.handleChange(value);
    },
    handleChange(value) {
      this.$emit("change", value);
    },
    handleBlur() {
      this.$emit("blur");
    },
  },
};
</script>

<style>
.editor ul {
  margin: revert;
  list-style: revert;
  padding: revert;
}

.ck-editor__editable_inline {
  min-height: 500px;
  background: #fff !important;
  -webkit-transition-property: all !important;
  -o-transition-property: all !important;
  transition-property: all !important;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  -webkit-transition-duration: 150ms !important;
  -o-transition-duration: 150ms !important;
  transition-duration: 150ms !important;
  --tw-border-opacity: 1 !important;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity)) !important;
  border-radius: 0.375rem !important;
  border-width: 1px !important;
  --tw-shadow-color: 0, 0, 0 !important;
  --tw-shadow: 0 1px 2px 0 rgba(var(--tw-shadow-color), 0.05) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.ck-editor__editable_inline:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgba(148, 71, 255, var(--tw-ring-opacity)) !important;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000) !important;
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
  --tw-border-opacity: 1 !important;
  border-color: rgba(148, 71, 255, var(--tw-border-opacity)) !important;
}

.document-editor__toolbar > .ck.ck-toolbar {
  border-color: rgba(209, 213, 219, 1) !important;
  border-radius: 0.375rem 0.375rem 0 0 !important;
  border-width: 1px !important;
  border-bottom: 0 !important;
  padding-bottom: 8px !important;
  margin-bottom: -8px !important;
}
</style>
