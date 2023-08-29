import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';




@NgModule({
    exports: [
        NzButtonModule,
        NzIconModule,
        NzDividerModule,
        NzMenuModule
    ]
})
export class NgZorroModule { }