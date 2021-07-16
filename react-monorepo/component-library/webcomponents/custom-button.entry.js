import { r as registerInstance, h } from './index-74e4de33.js';

const customButtonCss = ":root{--background-primary:rgb(116, 250, 250);--background-secondary:rgb(235, 97, 97);--text-primary:rgb(0, 0, 100);--text-secondary:white}button.btn{border:none;padding:10px 16px;font-size:14px;text-transform:uppercase;font-weight:bold;border-radius:4px;cursor:pointer;transition:background .2s ease}button.btn:disabled,button.btn[disabled],button.btn:disabled:hover,button.btn[disabled]:hover{background:rgb(211, 212, 212) !important;color:rgb(122, 121, 121) !important;cursor:initial}button.btn:hover{background-color:rgba(0, 0, 0, 0.1)}button.btn:active{background-color:rgba(0, 0, 0, 0.5)}button.btn:focus{box-shadow:0 0 0 2px blue}button.btn.btn-primary{background:rgb(116, 250, 250);color:rgb(0, 0, 100)}button.btn.btn-primary:active{background:rgb(89, 190, 190)}button.btn.btn-secondary{background:rgb(235, 97, 97);color:rgb(0, 0, 100)}button.btn.btn-secondary:active{background:rgb(129, 54, 54)}";

const CustomButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkClasses.bind(this);
  }
  checkClasses() {
    let classes = ["btn"];
    if (this.variant) {
      switch (this.variant) {
        case "primary":
        case "secondary":
          classes.push("btn-" + this.variant);
          break;
        default:
          console.error("the variant value '" + this.variant + "' is invalid");
      }
    }
    return classes.length > 1 ? classes.join(" ") : classes[0];
  }
  render() {
    return (h("button", { class: this.checkClasses(), disabled: this.disabled }, this.text));
  }
};
CustomButton.style = customButtonCss;

export { CustomButton as custom_button };
