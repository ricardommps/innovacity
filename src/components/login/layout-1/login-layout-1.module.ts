import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLayout1 } from './login-layout-1';

import { AuthService } from '../../../services/auth.service';

@NgModule({
    declarations: [
        LoginLayout1,
    ],
    imports: [
        IonicPageModule.forChild(LoginLayout1),
    ],
    exports: [
        LoginLayout1
    ],
    providers: [AuthService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginLayout1Module { }
