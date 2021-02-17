Blockly.Blocks["add_class"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Add", "addClass"],
          ["Remove", "removeClass"]
        ]),
        "NAME"
      )
      .appendField("Class");
    this.appendValueInput("trigger_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to");
    this.appendValueInput("action_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(
        new Blockly.FieldLabelSerializable("add class"),
        "add_class"
      );
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
          ["mouseout", "mouseout"]
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
      .appendField(new Blockly.FieldNumber(0.2, 0, Infinity, 0.01), "NAME");
    this.appendDummyInput()
      .appendField("easing")
      .appendField(
        new Blockly.FieldDropdown([
          ["linear", "linear"],
          ["ease", "ease"],
          ["easein", "easein"]
        ]),
        "NAME"
      );
    this.appendDummyInput()
      .appendField("effects")
      .appendField(
        new Blockly.FieldDropdown([
          ["fade", "fade"],
          ["slide", "slide"]
        ]),
        "NAME"
      );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
