Blockly.JavaScript["get_checkbox"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$('[name=" +
    value_value +
    "]').on('input',function() {" +
    value_value +
    " = $(this).val(); if($(this).is(':checkbox')) { " +
    value_value +
    "= $(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); } if($.isNumeric(" +
    value_value +
    ")) { " +
    value_value +
    " = parseFloat(" +
    value_value +
    "); } " +
    statements_name +
    "});";
  return code;
};

Blockly.JavaScript["change_text"] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "text",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_element + ").text(" + value_text + ");\n";
  return code;
};

Blockly.JavaScript["element"] = function (block) {
  var dropdown_element = block.getFieldValue("element");
  var text_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.

  var code = "'" + dropdown_element + text_name + "'";
  if (dropdown_element == "bloc") {
    code = "'[bloc=" + text_name + "]'";
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["range_slider_move"] = function (block) {
  var value_move = Blockly.JavaScript.valueToCode(
    block,
    "move",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "name",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

code =
  "swiper_func_" +
  value_name +
  "(" +
  value_name +
  ", " +
  value_move +
  ");" +
  " $('[name=" +
  value_name +
  "]').on('input', function () { swiper_func_" +
  value_name +
  "(value_name, value_move); });" +
  "function swiper_func_" +
  value_name +
  " (name, swiper) { name = '[name=' + name + ']';" +
  " var range = $(name).val(); range = parseFloat(swiper_value_name);" +
  " var width = $(name).width(); var range_max = $(name).attr('max');" +
  " width = width / range_max; width = width * (range - 1); $(swiper).text(range);" +
  " $(swiper).css({ transform: 'translateX(' + width + 'px)' }); }";
