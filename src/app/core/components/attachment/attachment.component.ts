import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent implements OnInit {
  @Input() name: string = '';
  @Input() type: string = '';

  typeReferenced: string = '';

  @Output() deleteItem = new EventEmitter<any>();

  ngOnInit(): void {
    this.typeReferenced = this.parseType(this.type);
  }

  parseType(type: string): string {
    if (type == 'image/jpeg') {
      return 'IMG';
    } else {
      return 'PDF';
    }
  }

  delete() {
    this.deleteItem.emit();
  }
}
