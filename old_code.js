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
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["this"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "this";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
    ".loadmore({\nbutton: " +
    value_button +
    ",\nresetIx: " +
    dropdown_resetix +
    ",\nanimation: " +
    value_animation +
    "\n})\n})();";

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

Blockly.JavaScript["cookies"] = function (block) {
  var value_button = Blockly.JavaScript.valueToCode(
    block,
    "button",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_box = Blockly.JavaScript.valueToCode(
    block,
    "box",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var number_days = block.getFieldValue("days");
  // TODO: Assemble JavaScript into code variable.
  var code = "//cookies;\n";
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

Blockly.JavaScript["css_custom_value"] = function (block) {
  var text_property = block.getFieldValue("property");
  var text_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + text_property + "':'" + text_value + "',\n";
  return code;
};

Blockly.JavaScript["get_cookie"] = function (block) {
  var text_cookiename = block.getFieldValue("cookieName");
  // TODO: Assemble JavaScript into code variable.
  var code = "Cookies.get('" + text_cookiename + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["set_cookies"] = function (block) {
  var text_cookiename = block.getFieldValue("cookieName");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "Cookies.set('" +
    text_cookiename +
    "', " +
    value_name +
    ", { expires: 365 });\n";
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

Blockly.JavaScript["id"] = function (block) {
  var text_id = block.getFieldValue("id");
  // TODO: Assemble JavaScript into code variable.
  var code = "'#" + text_id + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["get_value"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ").val()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["input_name"] = function (block) {
  var text_name = block.getFieldValue("name");
  // TODO: Assemble JavaScript into code variable.
  var code = "'.w-radio input[name=" + text_name + "]'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript["set_to_number"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "parseFloat(" + value_name + ");\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["get_width"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ").width()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["get_max"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ").attr('max')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["move"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var dropdown_dimension = block.getFieldValue("dimension");
  var value_move = Blockly.JavaScript.valueToCode(
    block,
    "move",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(" +
    value_element +
    ").css({'transform': '" +
    dropdown_direction +
    "(' + " +
    value_move +
    " + '" +
    dropdown_dimension +
    ")'});\n";
  return code;
};

Blockly.JavaScript["library"] = function (block) {
  var text_url = block.getFieldValue("url");
  // TODO: Assemble JavaScript into code variable.
  var code = "$.getScript('" + text_url + "');\n";
  return code;
};

Blockly.JavaScript["custom_code"] = function (block) {
  var text_code = block.getFieldValue("code");
  // TODO: Assemble JavaScript into code variable.
  var code = text_code;
  return code;
};

Blockly.JavaScript["nice_select"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "$(" + value_name + ").niceSelect();\n";
  return code;
};

Blockly.JavaScript["animate"] = function (block) {
  var statements_animate = Blockly.JavaScript.statementToCode(block, "animate");
  var value_timing = Blockly.JavaScript.valueToCode(
    block,
    "timing",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_function = Blockly.JavaScript.valueToCode(
    block,
    "function",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
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

Blockly.JavaScript["draft"] = function (block) {
  var statements_draft = Blockly.JavaScript.statementToCode(block, "draft");
  // TODO: Assemble JavaScript into code variable.
  var code = "/*\n" + statements_draft + "\n*/\n";
  return code;
};

Blockly.JavaScript["add_anime"] = function (block) {
  var value_target = Blockly.JavaScript.valueToCode(
    block,
    "target",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_css = Blockly.JavaScript.statementToCode(block, "css");
  var checkbox_name = block.getFieldValue("NAME") == "TRUE";
  var value_duration = Blockly.JavaScript.valueToCode(
    block,
    "duration",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_delay = Blockly.JavaScript.valueToCode(
    block,
    "delay",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_easing = Blockly.JavaScript.valueToCode(
    block,
    "easing",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "{targets: " +
    value_target +
    "," +
    statements_css +
    "easing: '" +
    value_easing +
    "', duration: " +
    value_duration +
    "},\n";

  return code;
};

Blockly.JavaScript["anime"] = function (block) {
  var text_animation = block.getFieldValue("animation");
  var text_animation = "anime_" + text_animation;
  var statements_global = Blockly.JavaScript.statementToCode(block, "global");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var " +
    text_animation +
    " = anime.timeline({});\n" +
    text_animation +
    "\n" +
    statements_global +
    ";\n";
  return code;
};

Blockly.JavaScript["subanimation"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

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
