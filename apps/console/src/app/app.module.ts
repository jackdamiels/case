import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppInitializationModule } from './app-initialization.module';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

// Features
import { CaseDefinitionListModule } from './features/case-definition-list/case-definition-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    HttpClientModule,

    // App initialization module
    AppInitializationModule,

    // Core "singleton"  (not feature modules)
    CoreModule,
    ViewsModule,
    LayoutModule,

    // Feature modules
    CaseDefinitionListModule,

    // AppRouting module - should be last
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
