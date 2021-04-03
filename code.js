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
    "url:airtable_url," +
    'method: "POST", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"records": [{"fields": {"ID":"0"' +
    statements_fields +
    "}}]}`};" +
    "$.ajax(settings).done(function (response) {console.log(response);});";
  return code;
};

Blockly.JavaScript["airtable_update"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_name +
    "; var settings = {async: true,crossDomain: true," +
    "url:airtable_url," +
    'method: "PATCH", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"records": [{"id": "`+weblocs_id_key+`","fields": {"ID":"0"' +
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
  var code = ',"' + value_field + '":"`+' + value_field + '+`"';

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
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code =
    'var dataTemplate = $("#data-list").html();var data_i = 0;' +
    '$("#data-list div:eq(0)").hide();' +
    "$.getJSON(" +
    "airtable_url," +
    "function (data_el) {" +
    "data = [[]]; " +
    "$.each(data_el.records, function (key, val) {" +
    "data_i++;" +
    "var dataTile = dataTemplate;" +
    "console.log(data_i);" +
    statements_fields +
    'dataTile = dataTile.replace("[key]", val.id);' +
    '$("#data-list").append(dataTile);' +
    '$("#data-list .like-wrap").last().attr("id_key",val.id);' +
    "});" +
    statements_do +
    "}" +
    ");";
  return code;
};

Blockly.JavaScript["get_single_airtable"] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_action = Blockly.JavaScript.statementToCode(block, "action");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_id +
    ";$.getJSON(" +
    '"https://api.airtable.com/v0/"+airtable_base+"/"+airtable_table+"/"+weblocs_id_key+"?api_key="+airtable_key+",' +
    "function (data) {" +
    statements_action +
    "}" +
    ");\n";
  return code;
};

Blockly.JavaScript["get_single_field"] = function (block) {
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = value_field + " = data.fields." + value_field + ";";
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

Blockly.JavaScript["get_parametr"] = function (block) {
  var text_parametr = block.getFieldValue("parametr");
  // TODO: Assemble JavaScript into code variable.
  var code = "getUrlParameter('" + text_parametr + "')"; // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript["set_css"] = function (block) {
  var statements_css = Blockly.JavaScript.statementToCode(block, "css");
  var value_to = Blockly.JavaScript.valueToCode(
    block,
    "to",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_to + ").css({\n" + statements_css + "});\n";
  return code;
};

Blockly.JavaScript["css_value"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var text_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + dropdown_name + "':'" + text_value + "',\n";
  return code;
};

Blockly.JavaScript["animate"] = function (block) {
  var statements_animate = Blockly.JavaScript.statementToCode(block, "animate");
  var value_timing = Blockly.JavaScript.valueToCode(
    block,
    "timing",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_delay = Blockly.JavaScript.valueToCode(
    block,
    "delay",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_function = Blockly.JavaScript.valueToCode(
    block,
    "function",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var checkbox_queue = block.getFieldValue("queue") == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_element +
    ").delay(" +
    value_delay +
    ").animate({\n" +
    statements_animate +
    "}," +
    "{ duration: " +
    value_timing +
    ", queue: " +
    checkbox_queue +
    " }" +
    ",'" +
    value_function +
    "');\n";
  return code;
};

Blockly.JavaScript["animation"] = function (block) {
  var text_property = block.getFieldValue("property");
  var text_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = text_property + ":'" + text_value + "',\n";
  return code;
};

Blockly.JavaScript["animation_property"] = function (block) {
  var dropdown_property = block.getFieldValue("property");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_after_value = block.getFieldValue("after_value");
  // TODO: Assemble JavaScript into code variable.
  var code =
    dropdown_property + ":" + value_name + "+'" + dropdown_after_value + "',\n";
  return code;
};

Blockly.JavaScript["animation_easing"] = function (block) {
  var text_easing = block.getFieldValue("easing");
  // TODO: Assemble JavaScript into code variable.
  var code = text_easing;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["get_key"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ').parent().attr( "id_key" )';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["get_text"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ").text()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["this"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "this";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["to_number"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + " = parseFloat(" + value_name + ");\n";
  return code;
};

Blockly.JavaScript["airtable_url"] = function (block) {
  var text_base = block.getFieldValue("base");
  var text_table = block.getFieldValue("table");
  var text_key = block.getFieldValue("key");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var airtable_base = '" +
    text_base +
    "';\n" +
    "var airtable_table = '" +
    text_table +
    "';\n" +
    "var airtable_key = '" +
    text_key +
    "';\n" +
    'var airtable_url = "https://api.airtable.com/v0/' +
    text_base +
    "/" +
    text_table +
    "?api_key=" +
    text_key +
    '"' +
    ";\n";
  return code;
};

Blockly.JavaScript["draft"] = function (block) {
  var statements_draft = Blockly.JavaScript.statementToCode(block, "draft");
  // TODO: Assemble JavaScript into code variable.
  var code = "/*\n" + statements_draft + "\n*/\n";
  return code;
};

Blockly.JavaScript["get_value_from_key"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};
