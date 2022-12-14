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
import {SharedElementsModule} from "./shared-elements/shared-elements.module";
import {FavoriteComponent} from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent
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
