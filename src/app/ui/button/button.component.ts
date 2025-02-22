import { Component, input, output } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  label = input.required<string>();
  icon = input.required<string>();
  //onClick = output<void>();

  onButtonClick() {
    //this.onClick.emit();
  }
}
