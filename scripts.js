Blockly.Blocks["get_checkbox"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("input on change");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_text"] = {
  init: function () {
    this.appendValueInput("text").setCheck(null).appendField("set text");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["element"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["class", "."],
          ["id", "#"],
          ["tag", ""],
          ["bloc", "bloc"]
        ]),
        "element"
      )
      .appendField(new Blockly.FieldTextInput("class-name"), "NAME");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["range_slider_move"] = {
  init: function () {
    this.appendValueInput("move")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("range swiper");
    this.appendValueInput("name")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("input name");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["add_class"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["Add", "addClass"],
        ["Remove", "removeClass"],
        ["Toggle", "toggleClass"]
      ]),
      "NAME"
    );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("default"), "add_class");
    this.appendValueInput("trigger_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to/from");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("only child")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "child");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["airtable"] = {
//   init: function () {
//     this.appendDummyInput().appendField("airtable create row");
//     this.appendStatementInput("fields").setCheck(null);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#0c92e0");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks["airtable"] = {
//   init: function () {
//     this.appendValueInput("table")
//       .setCheck(null)
//       .appendField("CREATE record in table");
//     this.appendStatementInput("fields").setCheck(null);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#0c92e0");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["airtable"] = {
  init: function () {
    this.appendValueInput("table")
      .setCheck(null)
      .appendField("CREATE record in table");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do after creating record");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_field"] = {
  init: function () {
    this.appendValueInput("field").setCheck(null).appendField("field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["submit"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("submit")
      .appendField(new Blockly.FieldTextInput("form"), "form");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["get_data"] = {
//   init: function () {
//     this.appendValueInput("var")
//       .setCheck(null)
//       .appendField("create airtable list");
//     this.appendStatementInput("fields").setCheck(null);
//     this.appendStatementInput("do").setCheck(null).appendField("do");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#0c92e0");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["get_data"] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null)
      .appendField("BUILD collection in");
    this.appendValueInput("table")
      .setCheck(null)
      .appendField("using items from table");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do in every element");
    this.appendStatementInput("do_in_element").setCheck(null);
    this.appendDummyInput().appendField("do when loaded");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_field"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("collection field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_parametr"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get parametr")
      .appendField(new Blockly.FieldTextInput("parametr"), "parametr");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["mouse_event"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("On")
      .appendField(
        new Blockly.FieldDropdown([
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["mouseout", "mouseout"],
          ["change", "change"]
        ]),
        "on"
      )
      .appendField("into");
    this.appendValueInput("into").setCheck(null);
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_css"] = {
  init: function () {
    this.appendStatementInput("css").setCheck(null).appendField("Set CSS");
    this.appendValueInput("to")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["css_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Opacity", "opacity"],
          ["Display", "display"],
          ["Background Color", "background-color"],
          ["Border Color", "border-color"],
          ["Font Color", "color"],
          ["Font Size", "font-size"],
          ["background", "background"],
          ["outline-color", "outline-color"],
          ["border-color", "border-color"],
          ["border-top-color", "border-top-color"],
          ["border-right-color", "border-right-color"],
          ["border-bottom-color", "border-bottom-color"],
          ["border-left-color", "border-left-color"],
          ["border-width", "border-width"],
          ["border-top-width", "border-top-width"],
          ["border-right-width", "border-right-width"],
          ["border-bottom-width", "border-bottom-width"],
          ["border-left-width", "border-left-width"],
          ["border-spacing", "border-spacing"],
          ["letter-spacing", "letter-spacing"],
          ["margin", "margin"],
          ["margin-top", "margin-top"],
          ["margin-right", "margin-right"],
          ["margin-bottom", "margin-bottom"],
          ["margin-left", "margin-left"],
          ["padding", "padding"],
          ["padding-top", "padding-top"],
          ["padding-right", "padding-right"],
          ["padding-bottom", "padding-bottom"],
          ["padding-left", "padding-left"],
          ["outline-width", "outline-width"],
          ["top", "top"],
          ["right", "right"],
          ["bottom", "bottom"],
          ["left", "left"],
          ["font-size", "font-size"],
          ["text-indent", "text-indent"],
          ["word-spacing", "word-spacing"],
          ["width", "width"],
          ["min-width", "min-width"],
          ["max-width", "max-width"],
          ["height", "height"],
          ["min-height", "min-height"],
          ["max-height", "max-height"],
          ["line-height", "line-height"],
          ["transform", "transform"],
          ["scroll-top", "scroll-top"],
          ["scroll-left", "scroll-left"],
          ["Z Index", "z-index"]
        ]),
        "NAME"
      )
      .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animate"] = {
  init: function () {
    this.appendDummyInput().appendField("animate");
    this.appendStatementInput("animate").setCheck(null);
    this.appendValueInput("timing")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("timing [ms]");
    this.appendValueInput("delay")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("delay [ms]");
    this.appendValueInput("function")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("easing");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("element");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("queue")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "queue");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("property"), "property")
      .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation_easing"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("linear"),
      "easing"
    );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation_property"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["opacity", "opacity"],
        ["backgroundPositionX", "backgroundPositionX"],
        ["backgroundPositionY", "backgroundPositionY"],
        ["borderWidth", "borderWidth"],
        ["borderBottomWidth", "borderBottomWidth"],
        ["borderLeftWidth", "borderLeftWidth"],
        ["borderRightWidth", "borderRightWidth"],
        ["borderTopWidth", "borderTopWidth"],
        ["borderSpacing", "borderSpacing"],
        ["margin", "margin"],
        ["marginBottom", "marginBottom"],
        ["marginLeft", "marginLeft"],
        ["marginRight", "marginRight"],
        ["marginTop", "marginTop"],
        ["opacity", "opacity"],
        ["outlineWidth", "outlineWidth"],
        ["padding", "padding"],
        ["paddingBottom", "paddingBottom"],
        ["paddingLeft", "paddingLeft"],
        ["paddingRight", "paddingRight"],
        ["paddingTop", "paddingTop"],
        ["height", "height"],
        ["width", "width"],
        ["maxHeight", "maxHeight"],
        ["maxWidth", "maxWidth"],
        ["minHeight", "minHeight"],
        ["minWidth", "minWidth"],
        ["fontSize", "fontSize"],
        ["bottom", "bottom"],
        ["left", "left"],
        ["right", "right"],
        ["top", "top"],
        ["letterSpacing", "letterSpacing"],
        ["wordSpacing", "wordSpacing"],
        ["lineHeight", "lineHeight"],
        ["textIndent", "textIndent"],
        ["translateX", "translateX"],
        ["translateY", "translateY"]
      ]),
      "property"
    );
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["", ""],
        ["px", "px"],
        ["%", "%"],
        ["vh", "vh"],
        ["vw", "vw"]
      ]),
      "after_value"
    );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["airtable_update"] = {
//   init: function () {
//     this.appendValueInput("NAME")
//       .setCheck(null)
//       .appendField("airtable update row");
//     this.appendValueInput("table").setCheck(null).appendField("in table");
//     this.appendStatementInput("fields").setCheck(null);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#0c92e0");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["airtable_update"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("UPDATE record with [ID]");
    this.appendValueInput("table").setCheck(null).appendField("in table");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do after record update");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_delete_row"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("DELETE record");
    this.appendValueInput("table")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in table");
    this.appendDummyInput().appendField("do after delete");
    this.appendStatementInput("function").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_single_airtable"] = {
  init: function () {
    this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("READ data from record [ID]");
    this.appendValueInput("table")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in table");
    //this.appendStatementInput("action").setCheck(null);
    //this.appendDummyInput().appendField("do after load");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_single_field"] = {
  init: function () {
    this.appendValueInput("field")
      .setCheck(null)
      .appendField("get single field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_key"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get key");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_text"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get text");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["this"] = {
  init: function () {
    this.appendDummyInput().appendField("this");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["to_number"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("change into number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_url"] = {
  init: function () {
    this.appendDummyInput().appendField("CONNECT airtable");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("base")
      .appendField(new Blockly.FieldTextInput("base"), "base");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("key")
      .appendField(new Blockly.FieldTextInput("key"), "key");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["draft"] = {
  init: function () {
    this.appendDummyInput().appendField("draft");
    this.appendStatementInput("draft").setCheck(null);
    this.setColour("#444");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_value_from_key"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("get value from item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_list"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("update list");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_list_field"] = {
  init: function () {
    this.appendValueInput("field")
      .setCheck(null)
      .appendField("update list field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_airtable_list"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("airtable list value");
    this.appendValueInput("update")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("update to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["tutorial"] = {
  init: function () {
    this.appendDummyInput().appendField("tutorial");
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["cloneable"] = {
  init: function () {
    this.appendDummyInput().appendField("cloneable");
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_cookie"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get cookie value")
      .appendField(new Blockly.FieldTextInput("cookieName"), "cookieName");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_cookies"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("set cookie")
      .appendField(new Blockly.FieldTextInput("cookieName"), "cookieName")
      .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["undefined"] = {
  init: function () {
    this.appendDummyInput().appendField("undefined");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_value"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("update value in input");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_cookie_value"] = {
  init: function () {
    this.appendValueInput("cookie").setCheck(null).appendField("set local");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_cookie_value"] = {
  init: function () {
    this.appendValueInput("cookie").setCheck(null).appendField("get local");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_function"] = {
  init: function () {
    this.appendDummyInput().appendField("input function");
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_trigger"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("input function trigger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_on_change"] = {
  init: function () {
    this.appendDummyInput().appendField("input");
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_input_on_change"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("set input");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_input_value"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("get input value");
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["duplicate_code_using_list"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("duplicate using list of inputs")
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"]
        ]),
        "NAME"
      );

    this.appendStatementInput("code").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["list_of_inputs"] = {
//   init: function () {
//     this.appendValueInput("inputs")
//       .setCheck(null)
//       .appendField("list of inputs");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(20);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["list_of_inputs"] = {
  init: function () {
    this.appendValueInput("inputs")
      .setCheck(null)
      .appendField("list of inputs")
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"]
        ]),
        "NAME"
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["reload_page"] = {
  init: function () {
    this.appendDummyInput().appendField("reload page");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks["create_list_related"] = {
//   init: function () {
//     this.appendValueInput("NAME")
//       .setCheck(null)
//       .appendField("create airtable list");
//     this.appendValueInput("id")
//       .setCheck(null)
//       .appendField("related with")
//       .appendField(new Blockly.FieldTextInput("Table"), "table")
//       .appendField("item");
//     this.appendStatementInput("fields").setCheck(null);
//     this.appendDummyInput().appendField("do when loaded");
//     this.appendStatementInput("do").setCheck(null);
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#0c92e0");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks["create_list_related"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("BUILD collection in");
    this.appendValueInput("table")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("using items from table");
    this.appendValueInput("releted")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("releted with table");
    this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("item");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do when loaded");
    this.appendStatementInput("do").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_table"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("change table")
      .appendField(new Blockly.FieldTextInput("Table"), "table");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["browser_language"] = {
  init: function () {
    this.appendDummyInput().appendField("browser language");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["in_list_get"] = {
  init: function () {
    this.appendValueInput("list").setCheck(null).appendField("in list");
    this.appendValueInput("value1").setCheck(null).appendField("get");
    this.appendValueInput("value2").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["do_for_each"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("do for each");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_in_text"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("in text");
    this.appendValueInput("change").setCheck(null).appendField("change");
    this.appendValueInput("into").setCheck(null).appendField("into");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_text"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("in");
    this.appendValueInput("text").setCheck(null).appendField("set text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_releted_field"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("get releted field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_attr"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("get attribute")
      .appendField(new Blockly.FieldTextInput("attribute"), "attribute")
      .appendField("from");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["redirect_to"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redirect to")
      .appendField(new Blockly.FieldTextInput("page"), "page");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["do_for_every_element_in_table"] = {
  init: function () {
    this.appendValueInput("table")
      .setCheck(null)
      .appendField("READ data from every record in table");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_script"] = {
  init: function () {
    this.appendValueInput("script").setCheck(null).appendField("get script");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_value_from_row"] = {
  init: function () {
    this.appendValueInput("value").setCheck(null).appendField("READ record");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_id_from_row"] = {
  init: function () {
    this.appendDummyInput().appendField("READ [ID]");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["add_user_field"] = {
  init: function () {
    this.appendValueInput("field").setCheck(null).appendField("link field");
    this.appendValueInput("user")
      .setCheck(null)
      .appendField("connected with [ID]");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["create_list_related_lookup"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("BUILD collection in");
    this.appendValueInput("table")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("using records from table");
    this.appendValueInput("related")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("related by field");
    this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("and row with id");
    this.appendValueInput("filter")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("filter");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do in every element");
    this.appendStatementInput("do").setCheck(null);
    this.appendDummyInput().appendField("do after data load");
    this.appendStatementInput("doafter").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["related_field_element"] = {
  init: function () {
    this.appendValueInput("field")
      .setCheck(null)
      .appendField("collection related field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["console_log"] = {
  init: function () {
    this.appendValueInput("value").setCheck(null).appendField("console log");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["element_from_variable"] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["class", "."],
          ["id", "#"],
          ["tag", ""],
          ["bloc", "bloc"]
        ]),
        "element"
      );
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["read_related_record"] = {
  init: function () {
    this.appendValueInput("record")
      .setCheck(null)
      .appendField("READ related record");
    this.setOutput(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["count_elements"] = {
  init: function () {
    this.appendValueInput("elements")
      .setCheck(null)
      .appendField("count elements");
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["element_number"] = {
  init: function () {
    this.appendValueInput("number").setCheck(null);
    this.appendValueInput("element").setCheck(null).appendField("#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["read_change_id"] = {
  init: function () {
    this.appendDummyInput().appendField(
      "READ change [ID] into item id in all links"
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0c92e0");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["redirect_to_url"] = {
  init: function () {
    this.appendValueInput("url").setCheck(null).appendField("redirect to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["block_section"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("default"),
      "block"
    );
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["page_attribute"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("name"), "page")
      .appendField("Page attribute in body");
    this.appendStatementInput("blocks").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//yellow #ffab19

Blockly.Blocks["update_input_using_value"] = {
  init: function () {
    this.appendValueInput("input").setCheck(null).appendField("update input");
    this.appendValueInput("value").setCheck(null).appendField("using value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["current"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField("Current Link");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_local_with_initial"] = {
  init: function () {
    this.appendValueInput("variable").setCheck(null).appendField("get local");
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("set initial value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00b894");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
