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
    this.setColour(150);
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
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["class_name"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("class"), "class");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["this"] = {
  init: function () {
    this.appendDummyInput().appendField("this");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["fslibraryloadmore"] = {
  init: function () {
    this.appendDummyInput().appendField("Set Load More Button");
    this.appendDummyInput()
      .appendField("function name")
      .appendField(new Blockly.FieldTextInput("fsMagic"), "funtion_name");
    this.appendValueInput("collection-list")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("collection list");
    this.appendValueInput("button")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button");
    this.appendValueInput("animation")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("animation");
    this.appendValueInput("effect")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("effect");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("resetIX")
      .appendField(
        new Blockly.FieldDropdown([
          ["true", "true"],
          ["false", "false"]
        ]),
        "resetIX"
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["fslibraryanimation"] = {
  init: function () {
    this.appendDummyInput().appendField("animation");
    this.appendDummyInput()
      .appendField("duration")
      .appendField(new Blockly.FieldNumber(0.2, 0, Infinity, 0.01), "duration");
    this.appendDummyInput()
      .appendField("easing")
      .appendField(
        new Blockly.FieldDropdown([
          ["linear", "linear"],
          ["ease", "ease"],
          ["easein", "easein"]
        ]),
        "easing"
      );
    this.appendDummyInput()
      .appendField("effects")
      .appendField(
        new Blockly.FieldDropdown([
          ["fade", "fade"],
          ["slide", "slide"]
        ]),
        "effects"
      );
    this.setOutput(true, null);
    this.setColour(0);
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
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["cookies"] = {
  init: function () {
    this.appendDummyInput().appendField("cookies");
    this.appendValueInput("button")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("button OK");
    this.appendValueInput("box")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("cookies box");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("expire in")
      .appendField(new Blockly.FieldNumber(7), "days")
      .appendField("days");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
          ["change", "change"],
          ["input", "input"]
        ]),
        "on"
      )
      .appendField("into");
    this.appendValueInput("into").setCheck(null);
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["this"] = {
  init: function () {
    this.appendDummyInput().appendField("this");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
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
    this.setColour(150);
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
          ["Background Color", "background-color"],
          ["Font Size", "font-size"],
          ["Display", "display"]
        ]),
        "NAME"
      )
      .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["css_custom_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("css")
      .appendField(new Blockly.FieldTextInput("property"), "property")
      .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_text"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck(null)
      .appendField("change text into");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("inside of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["id"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("id")
      .appendField(new Blockly.FieldTextInput("value"), "id");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_value"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get value");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_name"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("custom checkbox/radio [name]")
      .appendField(new Blockly.FieldTextInput("name"), "name");
    this.setOutput(true, null);
    this.setColour(230);
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
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_to_number"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("change into number");
    this.setOutput(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_width"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get width");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_max"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get max");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["move"] = {
  init: function () {
    this.appendValueInput("move")
      .setCheck(null)
      .appendField("move")
      .appendField(
        new Blockly.FieldDropdown([
          ["down", "translateY"],
          ["right", "translateX"]
        ]),
        "direction"
      )
      .appendField("use")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
          ["vw", "vw"],
          ["vh", "vh"]
        ]),
        "dimension"
      )
      .appendField("value");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["library"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("library")
      .appendField(new Blockly.FieldTextInput("url"), "url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["custom_code"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("custom")
      .appendField(new Blockly.FieldTextInput("code"), "code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["nice_select"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable("nice select"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
      .appendField("function");
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

Blockly.Blocks["draft"] = {
  init: function () {
    this.appendDummyInput().appendField("draft");
    this.appendStatementInput("draft").setCheck(null);
    this.setColour(105);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["add_anime"] = {
  init: function () {
    this.appendStatementInput("css").setCheck(null);
    this.appendDummyInput().appendField("animation point");
    this.appendValueInput("target")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("target");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("start after previous")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.appendValueInput("duration")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("duration [ms]");
    this.appendValueInput("delay")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("delay [ms]");
    this.appendValueInput("easing")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("easing");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["anime"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("animation")
      .appendField(new Blockly.FieldTextInput("animation name"), "animation");
    this.appendStatementInput("global").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["subanimation"] = {
  init: function () {
    this.appendDummyInput().appendField("subanimation");
    this.appendStatementInput("NAME").setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["subanimation"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["get_checkbox"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get")
      .appendField(
        new Blockly.FieldDropdown([
          ["text", "text"],
          ["checkbox", "checkbox"],
          ["radio", "radio"],
          ["select", "select"],
          ["range", "range"]
        ]),
        "input"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("[name]"), "name");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("number")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "number");
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("set value");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("do");
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(false);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
