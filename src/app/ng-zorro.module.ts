import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBadgeModule } from 'ng-zorro-antd/badge';




@NgModule({
    exports: [
        NzButtonModule,
        NzIconModule,
        NzDividerModule,
        NzMenuModule,
        NzAvatarModule,
        NzDrawerModule,
        NzTabsModule,
        NzCardModule,
        NzModalModule,
        NzInputModule,
        NzFormModule,
        NzCheckboxModule,
        NzBadgeModule
    ]
})
export class NgZorroModule { }