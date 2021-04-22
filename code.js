Blockly.JavaScript["get_checkbox"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var value_string = '" +
    value_value +
    "';\n" +
    "$('[name='+value_string+']').on('input',function() {" +
    value_value +
    " = $(this).val(); if($(this).is(':checkbox')) { " +
    value_value +
    "= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }" +
    "if($.isNumeric(" +
    value_value +
    ")) { " +
    value_value +
    " = parseFloat(" +
    value_value +
    "); } " +
    statements_name +
    "});" +
    '$("label.w-radio").on("click", function () {' +
    "if ($(this).children('[name=" +
    value_value +
    "]').length != 0) {" +
    value_value +
    " = $('[name='+value_string+']', this).val();\n}\n" +
    "});";
  // '$("label.w-checkbox").on("click", function () {' +
  // "if ($(this).children('[data-name=" +
  // value_value +
  // "]').length != 0) {" +
  // value_value +
  // " = !$('.w-checkbox-input',this).hasClass('w--redirected-checked');\n " +
  // statements_name +
  // " }\n" +
  // "});";
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

Blockly.JavaScript["element_from_variable"] = function (block) {
  var dropdown_element = block.getFieldValue("element");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "name",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + dropdown_element + value_name + "'";
  if (dropdown_element == "bloc") {
    code = "'[bloc=" + value_name + "]'";
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
    "$( document ).ready(function() { swiper_func_" +
    value_name +
    "('" +
    value_name +
    "', " +
    value_move +
    "); });" +
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
    " var width = $(name).width() - 10; var range_max = $(name).attr('max');" +
    " width = width / range_max; width = width * (range - 1); " +
    " $(swiper).css({ transform: 'translateX(' + width + 'px)' }); $(swiper).text(range); }";
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
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var settings = {\nasync: true,\ncrossDomain: true,\n" +
    'url:"https://api.airtable.com/v0/"+airtable_base+"/"+' +
    value_table +
    '+"?api_key="+airtable_key,' +
    '\nmethod: "POST", \nheaders: { "content-type": "application/json"' +
    "},\nprocessData: false,\n" +
    'data: `{"records": [{"fields": {' +
    statements_fields +
    "}}]}`};\n" +
    "$.ajax(settings).done(function (val) {\n" +
    statements_do +
    "});";
  code = code.replaceAll(",\n}}]}", "\n}}]}");
  code = code.replaceAll(",}}]}", "}}]}");
  return code;
};

Blockly.JavaScript["airtable_update"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_NONE
  );

  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_name +
    "; var settings = {async: true,crossDomain: true," +
    'url:"https://api.airtable.com/v0/"+airtable_base+"/"+' +
    value_table +
    '+"?api_key="+airtable_key,' +
    'method: "PATCH", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"records": [{"id": "`+weblocs_id_key+`","fields": {\n' +
    statements_fields +
    "}}]}`};" +
    "$.ajax(settings).done(function (response) {\n" +
    statements_do +
    "});";
  code = code.replaceAll(",\n}}]}", "\n}}]}");
  code = code.replaceAll(",}}]}", "}}]}");
  return code;
};

Blockly.JavaScript["airtable_delete_row"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  var statements_function = Blockly.JavaScript.statementToCode(
    block,
    "function"
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_name +
    "; var settings = {async: true,crossDomain: true," +
    'url:"https://api.airtable.com/v0/"+airtable_base+"/"+airtable_table+"/"+weblocs_id_key+"?api_key="+airtable_key,' +
    'method: "DELETE", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"id": "`+weblocs_id_key+`","deleted": true}`};' +
    "$.ajax(settings).done(function (response) {\n" +
    statements_function +
    "\n});";
  return code;
};

Blockly.JavaScript["airtable_delete_row"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_function = Blockly.JavaScript.statementToCode(
    block,
    "function"
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_name +
    "; var settings = {async: true,crossDomain: true," +
    'url:"https://api.airtable.com/v0/"+airtable_base+"/"+' +
    value_table +
    '+"/"+weblocs_id_key+"?api_key="+airtable_key,' +
    'method: "DELETE", headers: { "content-type": "application/json"' +
    "},processData: false," +
    'data: `{"id": "`+weblocs_id_key+`","deleted": true}`};' +
    "$.ajax(settings).done(function (response) {\n" +
    statements_function +
    "\n});";
  return code;
};

Blockly.JavaScript["update_list"] = function (block) {
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
    ";" +
    "$('[id_key = ' + weblocs_id_key + ']').children('[text=likes]').text(likes);" +
    "var id_key = $(this).parent().attr( 'id_key' );" +
    "for (var i = 0; i != data.length; i++) {" +
    "if (data[i].key == id_key) {\n" +
    statements_fields +
    "break;" +
    "}}";
  return code;
};

Blockly.JavaScript["update_list_field"] = function (block) {
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "data[i]." + value_field;
  " = " + value_field + ";";
  return code;
};

Blockly.JavaScript["airtable_field"] = function (block) {
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + value_field + '":"`+' + value_field + '+`",\n';

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
  code = `var form = document.querySelector("[data-name=${text_form}]");
  form.addEventListener('submit', handlerCallback, true);
  $('[type=submit]').css({'outline':'none'});
  function handlerCallback(event) {
    event.preventDefault();
    event.stopPropagation();
    $('[type=submit]').val($('[type=submit]').attr('data-wait'));
    ${statements_name}
  }`;
  return code;
};

Blockly.JavaScript["get_data"] = function (block) {
  var value_var = Blockly.JavaScript.valueToCode(
    block,
    "var",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  var statements_do_in_element = Blockly.JavaScript.statementToCode(
    block,
    "do_in_element"
  );

  // TODO: Assemble JavaScript into code variable.
  var code =
    "var dataTemplate_" +
    value_table +
    " = $(" +
    value_var +
    ").html();\nvar data_i = 0;\nvar data = [];\nvar data_fields = [];\n" +
    "$(" +
    value_var +
    ").children('div:eq(0)').hide();\n" +
    "$.getJSON(" +
    "'https://api.airtable.com/v0/'+airtable_base+'/'+" +
    value_table +
    "+'?api_key='+airtable_key ," +
    "function (data_el) {" +
    "$.each(data_el.records, function (key, val) {" +
    "data.push({key:val.id});\n" +
    "data_i++;\n" +
    "var dataTile = dataTemplate_" +
    value_table +
    ";\n" +
    statements_fields +
    "$(" +
    value_var +
    ").append(dataTile);\n" +
    "$(" +
    value_var +
    ').children("div").last().attr("id_key",val.id);\n' +
    statements_do_in_element +
    "});\n" +
    statements_do +
    "for (var i = 0; i != data.length; i++) {\n" +
    "for (var j = 0; j != data_fields.length; j++) {}" +
    "}\n" +
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
    "data[data.length - 1]." +
    value_name +
    " = val.fields." +
    value_name +
    ";\n" +
    "data_fields.push('" +
    value_name +
    "');\n" +
    'dataTile = dataTile.replace("[' +
    value_name +
    ']", val.fields.' +
    value_name +
    ");" +
    'dataTile = dataTile.replace("[id]", val.id);';
  return code;
};

// Blockly.JavaScript["get_single_airtable"] = function (block) {
//   var value_id = Blockly.JavaScript.valueToCode(
//     block,
//     "id",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );
//   var statements_action = Blockly.JavaScript.statementToCode(block, "action");
//   var statements_do = Blockly.JavaScript.statementToCode(block, "do");
//   // TODO: Assemble JavaScript into code variable.
//   var code =
//     "var weblocs_id_key = " +
//     value_id +
//     ";\n$.getJSON(" +
//     '"https://api.airtable.com/v0/"+airtable_base+"/"+airtable_table+"/"+weblocs_id_key+"?api_key="+airtable_key,' +
//     "\nfunction (data) {\n" +
//     statements_action +
//     "\n " +
//     statements_do +
//     "\n }\n" +
//     ");\n";
//   return code;
// };

Blockly.JavaScript["get_single_airtable"] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  //var statements_action = Blockly.JavaScript.statementToCode(block, "action");
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var weblocs_id_key = " +
    value_id +
    ";\n$.getJSON(" +
    '"https://api.airtable.com/v0/"+airtable_base+"/"+' +
    value_table +
    '+"/"+weblocs_id_key+"?api_key="+airtable_key,' +
    "\nfunction (val) {\n" +
    //statements_action +
    //"\n " +
    statements_do +
    "\n }\n" +
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
  var code = value_field + " = val.fields." + value_field + ";";
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
  var text_key = block.getFieldValue("key");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var airtable_base = '" +
    text_base +
    "';\n" +
    "var airtable_key = '" +
    text_key +
    "';\n";
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
  var code =
    "var id_key = $(this).parent().attr( 'id_key' );" +
    "for (var i = 0; i != data.length; i++) {" +
    "if (data[i].key == id_key) { \n" +
    value_value +
    " = data[i]." +
    value_value +
    ";" +
    value_value +
    " = parseFloat(" +
    value_value +
    ");" +
    "break;" +
    "}}";
  return code;
};

Blockly.JavaScript["update_airtable_list"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_update = Blockly.JavaScript.valueToCode(
    block,
    "update",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    'var id_key = $(this).parent().attr("id_key");\n' +
    "for (var i = 0; i != data.length; i++) {\n" +
    "if (data[i].key == id_key) { \n" +
    value_value +
    " = data[i]." +
    value_value +
    ";" +
    value_value +
    " = parseFloat(" +
    value_value +
    ");\n" +
    "break;\n" +
    "}\n" +
    "}\n" +
    value_value +
    " = " +
    value_update +
    ";\n" +
    "data[i]." +
    value_value +
    " = " +
    value_value +
    ";" +
    'var weblocs_id_key = $(this).parent().attr("id_key");\n' +
    "var settings = {\n" +
    "async: true," +
    "crossDomain: true," +
    "url: airtable_url,\n" +
    'method: "PATCH",\n' +
    'headers: { "content-type": "application/json" },\n' +
    "processData: false,\n" +
    "data:\n" +
    '`{"records": [{"id": "` +\n' +
    "weblocs_id_key +\n" +
    '`","fields": {"' +
    value_value +
    '":"` +\n' +
    value_value +
    " +\n" +
    '`"}}]}`\n' +
    "};\n" +
    "$.ajax(settings).done(function (response) {});" +
    "$('[id_key = ' + weblocs_id_key + ']').children('[bloc_text=" +
    value_value +
    "]').text(" +
    value_value +
    ");";
  code = code.replaceAll(",\n}}]}", "\n}}]}");
  code = code.replaceAll(",}}]}", "}}]}");
  return code;
};

Blockly.JavaScript["tutorial"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

Blockly.JavaScript["cloneable"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
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

Blockly.JavaScript["set_cookie_value"] = function (block) {
  var value_cookie = Blockly.JavaScript.valueToCode(
    block,
    "cookie",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "Cookies.set('" +
    value_cookie +
    "', " +
    value_cookie +
    ", { expires: 365 });\n";
  return code;
};

Blockly.JavaScript["get_cookie_value"] = function (block) {
  var value_cookie = Blockly.JavaScript.valueToCode(
    block,
    "cookie",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = value_cookie + " = Cookies.get('" + value_cookie + "');\n";
  return code;
};

Blockly.JavaScript["undefined"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "undefined";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//update value in input
Blockly.JavaScript["set_value"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "if(typeof " +
    value_value +
    " !== 'undefined') {\n" +
    "var value_string = '" +
    value_value +
    "';" +
    "\n if($('[name='+value_string+']').is(':radio'))\n {" +
    "$('[name='+value_string+'][value='+" +
    value_value +
    "+']')" +
    '.siblings(".w-form-formradioinput")' +
    '.addClass("w--redirected-checked");' +
    "} else {" +
    "$('[name='+value_string+']').val(" +
    value_value +
    "); if ($('[name='+value_string+']').is(':checkbox')) {  if(" +
    value_value +
    " == 'true') { $('[name='+value_string+']').siblings('.w-checkbox-input').addClass('w--redirected-checked'); }}}" +
    "}";
  return code;
};

Blockly.JavaScript["input_function"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "function input_function (input,input_name) {\n" +
    statements_name +
    "return input;" +
    "\n} ;\n";
  return code;
};

Blockly.JavaScript["input_trigger"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "input_function (" + value_name + ", '" + value_name + "');\n";
  return code;
};

Blockly.JavaScript["input_on_change"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "input";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["set_input_on_change"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "input = " + value_name + ";\n";
  return code;
};

Blockly.JavaScript["get_input_value"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

var list_of_vars,
  list_of_vars_2,
  list_of_vars_3,
  list_of_vars_4,
  list_of_vars_5 = 0;

Blockly.JavaScript["duplicate_code_using_list"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var statements_code = Blockly.JavaScript.statementToCode(block, "code");
  // TODO: Assemble JavaScript into code variable.
  var code = "";

  var duplicate_list = [];

  if (dropdown_name == "1") {
    duplicate_list = list_of_vars;
  } else if (dropdown_name == "2") {
    duplicate_list = list_of_vars_2;
  } else if (dropdown_name == "3") {
    duplicate_list = list_of_vars_3;
  } else if (dropdown_name == "4") {
    duplicate_list = list_of_vars_4;
  } else if (dropdown_name == "5") {
    duplicate_list = list_of_vars_5;
  }

  for (var i = 0; i < duplicate_list.length; i += 1) {
    //statements_code = statements_code.replaceAll("input", list_of_vars[i]);
    if (duplicate_list[i] != "input_empty") {
      code += statements_code.replaceAll("input_var", duplicate_list[i]);
      code = code.replaceAll("input_index", i + 1);
      code += "\n";
    }
  }
  return code;
};

String.prototype.replaceAll = function (str1, str2, ignore) {
  return this.replace(
    new RegExp(
      str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
      ignore ? "gi" : "g"
    ),
    typeof str2 == "string" ? str2.replace(/\$/g, "$$$$") : str2
  );
};

Blockly.JavaScript["list_of_inputs"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var value_inputs = Blockly.JavaScript.valueToCode(
    block,
    "inputs",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  value_inputs.toString();

  value_inputs = value_inputs.replaceAll("[", '["');
  value_inputs = value_inputs.replaceAll("]", '"]');
  value_inputs = value_inputs.replaceAll(", ", '", "');

  if (dropdown_name == "1") {
    list_of_vars = JSON.parse(value_inputs);
  } else if (dropdown_name == "2") {
    list_of_vars_2 = JSON.parse(value_inputs);
  } else if (dropdown_name == "3") {
    list_of_vars_3 = JSON.parse(value_inputs);
  } else if (dropdown_name == "4") {
    list_of_vars_4 = JSON.parse(value_inputs);
  } else if (dropdown_name == "5") {
    list_of_vars_5 = JSON.parse(value_inputs);
  }
  // TODO: Assemble JavaScript into code variable.

  var code = "";
  return code;
};

Blockly.JavaScript["reload_page"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "window.location = window.location.href.split('?')[0];\n";
  return code;
};

Blockly.JavaScript["create_list_related"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_releted = Blockly.JavaScript.valueToCode(
    block,
    "releted",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code = `var weblocs_id_key = ${value_id};
  var dataTemplate_${value_table} = $(${value_name}).html();
  $(${value_name}).children("div:eq(0)").hide();
  $.getJSON(
    "https://api.airtable.com/v0/"+airtable_base+"/"+${value_table}+"/"+weblocs_id_key+"?api_key="+airtable_key,
    function (data) {
      var database = data.fields.database;
      getDataJSON(database);
    }
  );
  function getDataJSON(database) {
    for (var i = 0; i != database.length; i++) {
      weblocs_id_key = database[i];
      $.getJSON(
        "https://api.airtable.com/v0/"+airtable_base+"/"+${value_releted}+"/"+weblocs_id_key+"?api_key="+airtable_key,
        function (data) {
          var dataTile = dataTemplate_${value_table};
          ${statements_fields}
          $(${value_name}).append(dataTile);
          $(${value_name}).children("div").last().attr("id_key", data.id);
          ${statements_do}
        }
      );
    }
  }`;
  return code;
};

Blockly.JavaScript["get_releted_field"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name} = data.fields.${value_name};\ndataTile = dataTile.replace("[id]",data.id);\n dataTile = dataTile.replace("[${value_name}]", data.fields.${value_name});`;
  return code;
};

Blockly.JavaScript["change_table"] = function (block) {
  var text_table = block.getFieldValue("table");
  // TODO: Assemble JavaScript into code variable.
  var code = `airtable_table = '${text_table}';\n`;
  return code;
};

Blockly.JavaScript["browser_language"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "navigator.language";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["in_list_get"] = function (block) {
  var value_list = Blockly.JavaScript.valueToCode(
    block,
    "list",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_value1 = Blockly.JavaScript.valueToCode(
    block,
    "value1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_value2 = Blockly.JavaScript.valueToCode(
    block,
    "value2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = value_list + "[" + value_value1 + "][" + value_value2 + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["do_for_each"] = function (block) {
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code = `$(${value_element}).each(function () {\n${statements_do}\n}`;
  return code;
};

Blockly.JavaScript["change_in_text"] = function (block) {
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_change = Blockly.JavaScript.valueToCode(
    block,
    "change",
    Blockly.JavaScript.ORDER_NONE
  );
  var value_into = Blockly.JavaScript.valueToCode(
    block,
    "into",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_element}.replace(${value_change}, ${value_into})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["set_text"] = function (block) {
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "text",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `$(${value_element}).text(${value_text});\n`;
  return code;
};

Blockly.JavaScript["get_attr"] = function (block) {
  var text_attribute = block.getFieldValue("attribute");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `$(${value_name}).attr('${text_attribute}')`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["redirect_to"] = function (block) {
  var text_page = block.getFieldValue("page");
  // TODO: Assemble JavaScript into code variable.
  var code = `window.location.replace("${text_page}");\n`;
  return code;
};

Blockly.JavaScript["do_for_every_element_in_table"] = function (block) {
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code = `$.getJSON(
    'https://api.airtable.com/v0/'+airtable_base+'/'+${value_table}+'?api_key='+airtable_key,
    function (data) {
      $.each(data.records, function (key, val) {
        ${statements_do}
      });
    }
  );`;
  return code;
};

Blockly.JavaScript["get_script"] = function (block) {
  var value_script = Blockly.JavaScript.valueToCode(
    block,
    "script",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `$.getScript(${value_script});\n`;
  return code;
};

Blockly.JavaScript["get_value_from_row"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `val.fields.${value_value}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["get_id_from_row"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "val.id";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["add_user_field"] = function (block) {
  var value_user = Blockly.JavaScript.valueToCode(
    block,
    "user",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + value_field + '":["`+' + value_user + '+`"],';
  return code;
};

Blockly.JavaScript["create_list_related_lookup"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_table = Blockly.JavaScript.valueToCode(
    block,
    "table",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_related = Blockly.JavaScript.valueToCode(
    block,
    "related",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_id = Blockly.JavaScript.valueToCode(
    block,
    "id",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_fields = Blockly.JavaScript.statementToCode(block, "fields");
  var value_filter = Blockly.JavaScript.valueToCode(
    block,
    "filter",
    Blockly.JavaScript.ORDER_NONE
  );
  if (value_filter == "") {
    value_filter = true;
  }

  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  var statements_doafter = Blockly.JavaScript.statementToCode(block, "doafter");
  // TODO: Assemble JavaScript into code variable.
  var code = `var dataTemplate_${value_table} = $(${value_name}).html();
  $(${value_name}).children("div:eq(0)").hide();
  
  $.getJSON(
    'https://api.airtable.com/v0/' +
      airtable_base +
      '/'+${value_table}+'/'+${value_id}+'?api_key=' +
      airtable_key,
    function (val) {
      for (var i = 0; i !== val.fields.${value_related}.length; i++) {
        var dataTile = dataTemplate_${value_table};
        dataTile = dataTile.replace("[id]", val.fields.${value_related}[i]);
        var collection_list_element = ${value_name};\n
        var collection_item_id = val.fields.${value_related}[i];\n
        if(${value_filter}) {
        ${statements_fields}
        $(collection_list_element).append(dataTile);
                $(collection_list_element)
                  .children("div")
                  .last()
                  .attr("id_key", collection_item_id);
        }  
        ${statements_do}
      }
      ${statements_doafter}
    }
  );`;
  return code;
};

Blockly.JavaScript["related_field_element"] = function (block) {
  var value_field = Blockly.JavaScript.valueToCode(
    block,
    "field",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `dataTile = dataTile.replace("[${value_field}]", val.fields.${value_field}[i]);`;
  return code;
};

Blockly.JavaScript["console_log"] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `console.log(${value_value});\n`;
  return code;
};

Blockly.JavaScript["read_related_record"] = function (block) {
  var value_record = Blockly.JavaScript.valueToCode(
    block,
    "record",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `val.fields.${value_record}[i]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["count_elements"] = function (block) {
  var value_elements = Blockly.JavaScript.valueToCode(
    block,
    "elements",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `$(${value_elements}).length`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["element_number"] = function (block) {
  var value_number = Blockly.JavaScript.valueToCode(
    block,
    "number",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_element = Blockly.JavaScript.valueToCode(
    block,
    "element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_number}).eq(${value_element}-1`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["read_change_id"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `$("a").each(function () {
    console.log(val.id);
    var text_id_change = $(this).attr("href");
    $(this).attr("href",text_id_change.replace("[id]", val.id));
  });`;
  return code;
};

Blockly.JavaScript["redirect_to_url"] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(
    block,
    "url",
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `window.location.replace(${value_url});\n`;
  return code;
};

Blockly.JavaScript["new_block"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "do_someting();\n";
  return code;
};
