import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cmsy-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent {
  @Input() moduleName!: string;
  @Input() moduleDescription!: string;
  @Output() triggerFormEvent = new EventEmitter<boolean>();
}
