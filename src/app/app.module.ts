import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsResetPluginModule} from "ngxs-reset-plugin";
import {NgxsModule} from "@ngxs/store";
import {stateList} from "./store";
import {AppRoutingModule} from "./app-routing.module";
import {AppTemplateModule} from "./app-template/app-template.module";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([...stateList],
      {
        selectorOptions: {
          // injectContainerState: false,
          suppressErrors: true
        }
      }),
    AppRoutingModule,
    AppTemplateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
