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
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {SingleAdvertComponent} from './single-advert/single-advert.component';
import {SingleSidebarComponent} from './single-advert/single-sidebar/single-sidebar.component';
import {SharedElementsModule} from "./shared-elements/shared-elements.module";

@NgModule({
  declarations: [
    AppComponent,
    SingleAdvertComponent,
    SingleSidebarComponent,
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
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    SharedElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
