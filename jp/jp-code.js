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

Blockly.JavaScript["scroll_in_view"] = function (block) {
  var value_trigger = Blockly.JavaScript.valueToCode(
    block,
    "trigger",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_inview = Blockly.JavaScript.statementToCode(block, "inView");
  var statements_outview = Blockly.JavaScript.statementToCode(block, "outView");
  // TODO: Assemble JavaScript into code variable.
  var code = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
  
  var $element = $(${value_trigger});
  
  $($element).on('inview', function(event, isInView) {
    if (isInView) {
      ${statements_inview}
    } else {
      ${statements_outview}
    }
  });
  
`;
  return code;
};

Blockly.JavaScript["tram"] = function (block) {
  var value_set_element = Blockly.JavaScript.valueToCode(
    block,
    "set_element",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_css_properties = Blockly.JavaScript.statementToCode(
    block,
    "css_properties"
  );

  statements_css_properties = statements_css_properties.slice(0, -2);
  statements_css_properties = statements_css_properties + "\n";
  // TODO: Assemble JavaScript into code variable.
  var code = `var element = $(${value_set_element});
  tram(element).set({${statements_css_properties}});`;
  return code;
};

Blockly.JavaScript["css_property"] = function (block) {
  var dropdown_property = block.getFieldValue("property");
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "value",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + dropdown_property + "':" + value_value + ",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript["countdown_timer"] = function (block) {
  var value_datetocountdown = Blockly.JavaScript.valueToCode(
    block,
    "dateToCountdown",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_outputtime = Blockly.JavaScript.valueToCode(
    block,
    "outputTime",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_endcount = Blockly.JavaScript.statementToCode(
    block,
    "endCount"
  );

  // TODO: Assemble JavaScript into code variable.
  var code = `
  
  var d = $(${value_datetocountdown}).html();
d = '"' + d + '"';
var countDownDate = new Date(d).getTime();
var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;
var o = $(${value_outputtime});

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (distance < 0) {
clearInterval(x);
${statements_endcount}
}

  if (days === 0) {
  	o.html(hours + " hours " + minutes + " minutes " + seconds + " seconds ");
  } else if (days === 1){
  	o.html(days + " day " + hours + " hours " + minutes + " minutes " + seconds + " seconds ");
  } else {
  	o.html(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ");
  }


}, 1000);`;
  return code;
};
