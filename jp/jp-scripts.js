Blockly.Blocks["new_block"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("new block");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
