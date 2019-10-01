import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        NgbModule
    ],
    declarations: [
        AppComponent,
        ModalComponent,
        HomeComponent,
        TestPageComponent,
        ConfirmationModalComponent
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }