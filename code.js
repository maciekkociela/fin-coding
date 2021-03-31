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
    "= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); } if($.isNumeric(" +
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
  var code =
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
    "('" +
    value_name +
    "', " +
    value_move +
    "); });" +
    "function swiper_func_" +
    value_name +
    " (name, swiper) { name = '[name=' + name + ']';" +
    " var range = $(name).val(); range = parseFloat(range);" +
    " var width = $(name).width(); var range_max = $(name).attr('max');" +
    " width = width / range_max; width = width * (range - 1); " +
    " $(swiper).css({ transform: 'translateX(' + width + 'px)' }); }";
  return code;
};

Blockly.JavaScript["add_class"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var text_add_class = block.getFieldValue("add_class");
  var checkbox_child = block.getFieldValue("child") == "TRUE";
  if (checkbox_child == 1) {
    checkbox_child = ", this";
  } else {
    checkbox_child = "";
  }
  var value_trigger_class = Blockly.JavaScript.valueToCode(
    block,
    "trigger_class",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_trigger_class +
    checkbox_child +
    ")." +
    dropdown_name +
    "('" +
    text_add_class +
    "');\n";
  return code;
};

Blockly.JavaScript["airtable"] = function (block) {
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");

  // TODO: Assemble JavaScript into code variable.
  var code =
    "var settings = {async: true,crossDomain: true," +
    'url:"https://api.airtable.com/v0/app73lFU2xt9dJMTR/Calculator?api_key=key1rK5Ixke8MZJ3Q",' +
    'method: "POST", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"records": [{"fields": {"ID":"0"' +
    statements_fields +
    "}}]}`};" +
    "$.ajax(settings).done(function (response) {console.log(response);});";
  return code;
};

Blockly.JavaScript["airtable_field"] = function (block) {
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = ',"' + value_field + '":`+' + value_field + "+`";

  return code;
};

Blockly.JavaScript["submit"] = function (block) {
  var text_form = block.getFieldValue("form");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$('[data-name=" +
    text_form +
    "]').on('submit',function(){\n" +
    statements_name +
    "});\n";
  return code;
};

Blockly.JavaScript["get_data"] = function (block) {
  var value_var = Blockly.JavaScript.valueToCode(
    block,
    "var",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  // TODO: Assemble JavaScript into code variable.
  var code =
    'var dataTemplate = $("#data-list").html();var data_i = 0;' +
    '$("#data-list div").remove();' +
    "$.getJSON(" +
    '"https://api.airtable.com/v0/app73lFU2xt9dJMTR/Calculator?api_key=key1rK5Ixke8MZJ3Q",' +
    "function (data_el) {" +
    "data = [[]]; " +
    "$.each(data_el.records, function (key, val) {" +
    "data_i++;" +
    "var dataTile = dataTemplate;" +
    "console.log(data_i);" +
    statements_fields +
    '$("#data-wrapper").append(dataTile);' +
    "});" +
    "}" +
    ");";
  return code;
};

Blockly.JavaScript["get_field"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    'dataTile = dataTile.replace("[' +
    value_name +
    ']", val.fields.' +
    value_name +
    ");";
  return code;
};
