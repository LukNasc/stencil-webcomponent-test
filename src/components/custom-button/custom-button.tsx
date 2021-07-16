import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
  @Prop() text: string
  render() {
    return (
      <button>{this.text}</button>
    );
  }

}
