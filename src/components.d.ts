/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomButton {
        "text": string;
    }
}
declare global {
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLElementTagNameMap {
        "custom-button": HTMLCustomButtonElement;
    }
}
declare namespace LocalJSX {
    interface CustomButton {
        "text"?: string;
    }
    interface IntrinsicElements {
        "custom-button": CustomButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
        }
    }
}
