class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }
  /** @override */
  addColourBorder_(colour) {
    this.rowDiv_.style.backgroundColor = colour;
    this.rowDiv_.style.borderColor = this.colour_;

    if (this.name_ == "Basics") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/609836a016a94e618667d30b_block.svg";
    }
    if (this.name_ == "Animations") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097e34e96b6df67f8bb693c_animation.svg";
    }
    if (this.name_ == "Forms") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097e2d7e87245aeb7aefa69_input.svg";
    }
    if (this.name_ == "Local") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981ccdb357295b38207f53_laptop.svg";
    }
    if (this.name_ == "Math") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f6973d627195322d4553_calculator%20(1).svg";
    }
    if (this.name_ == "Text") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f6f48f5a53e619e78a76_text.svg";
    }
    if (this.name_ == "Loops") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f72ececcac6b1b4ba95f_process-arrows.svg";
    }
    if (this.name_ == "Logic") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f77794751f2e099027b9_puzzle.svg";
    }
    if (this.name_ == "Lists") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f7c3138d1b2624cf2854_list.svg";
    }
    if (this.name_ == "Variables") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f81e94751f5250902c67_square-root-of-x-math-formula.svg";
    }
    if (this.name_ == "Functions") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6097f81fbc50310a11212639_formula.svg";
    }
    if (this.name_ == "Connect") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981e3e96824403f88bea1e_link%20(1).svg";
    }
    if (this.name_ == "Build") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981eba91abe5895f16ff96_hammer.svg";
    }
    if (this.name_ == "Read") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981f53706ca277e7e3a86d_book.svg";
    }
    if (this.name_ == "Update") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981f573975a47c13f0b8d5_update.svg";
    }
    if (this.name_ == "Delete") {
      this.iconDom_.src =
        "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/60981f553d62715b702df155_delete.svg";
    }
  }

  /** @override */
  setSelected(isSelected) {
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = "white";
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = "white";
      this.iconDom_.style.color = "white";
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */ (this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }

  /** @override */
  createIconDom_() {
    const img = document.createElement("img");
    img.src =
      "https://uploads-ssl.webflow.com/60925fad735d575b6f022918/6095b03d24b79137a4a88751_setting%20(2).svg";

    img.alt = "Logic";
    img.width = "24";
    img.height = "24";
    return img;
  }

  /** @override */
  setSelected(isSelected) {
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];

    if (isSelected) {
      this.rowDiv_.style.borderColor = "white";
    } else {
      this.rowDiv_.style.borderColor = this.colour_;
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */ (this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }
}
Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);
