import "@angular/compiler";
import { bootstrapApplication } from '@angular/platform-browser';
import "zone.js";
import { AppComponent } from './app.component';
import { appRouting } from "./app.routing";
import './index.css';
bootstrapApplication(AppComponent, {providers: [...appRouting]});
