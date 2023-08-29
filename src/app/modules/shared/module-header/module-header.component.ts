import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmsy-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent {
  @Input() moduleName!: string;
  @Input() moduleDescription!: string;
}
