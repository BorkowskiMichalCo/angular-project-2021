import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { InfoComponent } from './login/info/info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { CryptoService } from './services/crypto.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, InfoComponent, SidebarComponent, HeaderComponent, MainCardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
    HttpClientModule,
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
