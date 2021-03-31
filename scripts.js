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

Blockly.Blocks["airtable"] = {
  init: function () {
    this.appendDummyInput().appendField("airtable");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_field"] = {
  init: function () {
    this.appendValueInput("field").setCheck(null).appendField("field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["submit"] = {
  init: function () {
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("submit");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("form"), "form");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_data"] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null)
      .appendField("get airtable data in");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_field"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
