Blockly.Blocks["get_checkbox"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("input");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
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
    this.setColour(230);
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
    this.setColour(60);
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
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
