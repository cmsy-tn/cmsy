import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';




@NgModule({
    exports: [
        NzButtonModule,
        NzIconModule
    ]
})
export class NgZorroModule { }