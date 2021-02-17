Blockly.JavaScript["add_class"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var text_add_class = block.getFieldValue("add_class");
  var value_trigger_class = Blockly.JavaScript.valueToCode(
    block,
    "trigger_class",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_trigger_class +
    ")." +
    dropdown_name +
    "('" +
    text_add_class +
    "');\n";
  return code;
};

Blockly.JavaScript["mouse_event"] = function (block) {
  var dropdown_on = block.getFieldValue("on");
  var value_into = Blockly.JavaScript.valueToCode(
    block,
    "into",
    Blockly.JavaScript.ORDER_NONE
  );
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_into +
    ").on('" +
    dropdown_on +
    "',function() {\n" +
    statements_name +
    "});\n";
  return code;
};

Blockly.JavaScript["class_name"] = function (block) {
  var text_class = block.getFieldValue("class");
  // TODO: Assemble JavaScript into code variable.
  var code = "'." + text_class + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["this"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "this";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["fslibraryloadmore"] = function (block) {
  var text_funtion_name = block.getFieldValue("funtion_name");
  var value_button = Blockly.JavaScript.valueToCode(
    block,
    "button",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_collection_list = Blockly.JavaScript.valueToCode(
    block,
    "collection-list",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_animation = Blockly.JavaScript.valueToCode(
    block,
    "animation",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_effect = Blockly.JavaScript.valueToCode(
    block,
    "effect",
    Blockly.JavaScript.ORDER_NONE
  );
  var dropdown_resetix = block.getFieldValue("resetIX");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "\n(function() {\nvar " +
    text_funtion_name +
    " = new FsLibrary(" +
    value_collection_list +
    ");\n" +
    text_funtion_name +
    "loadmore({\nbutton: " +
    value_button +
    ",\nresetIx: " +
    dropdown_resetix +
    ",\nanimation: " +
    value_animation +
    "\n})();";

  return code;
};

Blockly.JavaScript["fslibraryanimation"] = function (block) {
  var number_duration = block.getFieldValue("duration");
  var dropdown_easing = block.getFieldValue("easing");
  var dropdown_effects = block.getFieldValue("effects");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "{\nenable: true,\n duration: " +
    number_duration +
    ",\n easing: '" +
    dropdown_easing +
    "',\n effects: '" +
    dropdown_effects +
    "',\n },\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
