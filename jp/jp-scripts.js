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

Blockly.Blocks["scroll_in_view"] = {
  init: function () {
    this.appendValueInput("trigger")
      .setCheck(null)
      .appendField(
        new Blockly.FieldLabelSerializable("When this element"),
        "trigger"
      );
    this.appendDummyInput().appendField("is scrolled  into view");
    this.appendStatementInput("inView")
      .setCheck(null)
      .appendField("do this in view");
    this.appendStatementInput("outView")
      .setCheck(null)
      .appendField("do this out view");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["tram"] = {
  init: function () {
    this.appendValueInput("set_element")
      .setCheck(["String", "Array"])
      .appendField("set the initial state for");
    this.appendStatementInput("css_properties")
      .setCheck(null)
      .appendField("with the css properties of");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["css_property"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["opacity", "opacity"],
        ["color", "color"],
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
        ["opacity", "opacity"],
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
        ["scroll-left", "scroll-left"]
      ]),
      "property"
    );
    this.appendValueInput("value").setCheck(["Number", "String"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
