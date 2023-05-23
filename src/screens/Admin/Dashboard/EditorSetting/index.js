const EditorSetting = (writer, editor) => {
  writer.setStyle(
    "min-height",
    "250px",
    editor.editing.view.document.getRoot()
  );
  writer.setStyle(
    "border-radius",
    "0 0 10px 10px",
    editor.editing.view.document.getRoot()
  );
};

export default EditorSetting;