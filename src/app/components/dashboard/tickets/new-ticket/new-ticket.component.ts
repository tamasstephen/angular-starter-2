import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../ui/button/button.component';
import { ControlComponent } from '../control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(e: Event) {
    e.preventDefault();
    console.log('clicked');
  }
}
