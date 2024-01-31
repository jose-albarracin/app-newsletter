import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss'],
})
export class ButtomComponent {
  @Input() text: string = '';
}
