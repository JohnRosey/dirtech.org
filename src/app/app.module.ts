import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { ProjectsNavbarComponent } from './projects-navbar/projects-navbar.component';
import { BarComponent } from './bar/bar.component';
import {ResumeComponent} from "./resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    DarkModeComponent,
    ProjectsNavbarComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
