import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-dynamic',
  templateUrl: './input-dynamic.component.html',
  styleUrls: ['./input-dynamic.component.scss'],
})
export class InputDynamicComponent implements OnInit, OnChanges {
  @Input() default: number = 0;
  @Input() type: string = 'text';
  @Input() disabled: string = 'false';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() value: any = null;
  @Input() options: any[] = [];
  @Output() dataWritting = new EventEmitter<string | number>();
  @Output() sendOption = new EventEmitter<any>();
  @Output() enter = new EventEmitter<any>();

  apiKeyTinymce: string = 'gzqzls8umfw77eatpfn2m7skfk1u8afmbpv4x5mim14gtudi';

  visible: boolean = false;

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.type == 'select') {
      this.value = this.options.filter((item) => item.id == this.default)[0];
      this.sendOption.emit(this.value);
      this.options = this.options
        .filter((item) => item.id !== this.default)
        .sort((a, b) => b.name - a.name);
    }
  }
  writting(): void {
    this.dataWritting.emit(this.value);
  }

  selectItem(itemData: any): void {
    this.sendOption.emit(itemData);
    const valueMemo = this.value;
    this.value = this.options.filter((item) => item.id == itemData.id)[0];
    this.toggleVisible();
    this.options = [
      valueMemo,
      ...this.options.filter((item) => item.id !== itemData.id),
    ].sort((a, b) => b.name - a.name);
  }

  toggleVisible(): void {
    this.visible = !this.visible;
  }

  goEnter(): void {
    this.enter.emit();
  }
}
