Blockly.JavaScript["add_class"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var value_trigger_class = Blockly.JavaScript.valueToCode(
    block,
    "trigger_class",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_action_class = Blockly.JavaScript.valueToCode(
    block,
    "action_class",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_trigger_class +
    ")." +
    dropdown_name +
    "(" +
    value_action_class +
    ");\n";
  return code;
};

Blockly.JavaScript["mouse_event"] = function (block) {
  var dropdown_on = block.getFieldValue("on");
  var value_into = Blockly.JavaScript.valueToCode(
    block,
    "into",
    Blockly.JavaScript.ORDER_ATOMIC
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

Blockly.JavaScript["fslibrary"] = function (block) {
  var text_funtion_name = block.getFieldValue("funtion_name");
  var value_button = Blockly.JavaScript.valueToCode(
    block,
    "button",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_resetix = block.getFieldValue("resetIX");
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};

Blockly.JavaScript["fslibraryloadmore"] = function (block) {
  var text_funtion_name = block.getFieldValue("funtion_name");
  var value_button = Blockly.JavaScript.valueToCode(
    block,
    "button",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_animation = Blockly.JavaScript.valueToCode(
    block,
    "animation",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_effect = Blockly.JavaScript.valueToCode(
    block,
    "effect",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_resetix = block.getFieldValue("resetIX");
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};

Blockly.JavaScript["fslibraryanimation"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  var dropdown_name = block.getFieldValue("NAME");
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "...";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
