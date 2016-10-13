import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { ContactModule }  from './contact/contact.module';
import { CoreModule }     from './core/core.module';
import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    CoreModule.forRoot({userName: 'Miss Marple'}),
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
