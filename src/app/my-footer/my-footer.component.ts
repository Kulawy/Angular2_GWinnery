import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    
  }
  
  title: string = 'My Map';
  lat: number = 49.713369;
  lng: number = 22.317972;

  informations = {
    name: "Jerzy i Magdalena Geroń",
    aadress: " Borownica",
    phone: "602532515",
    mail: "gwinePL@gmail.com",
    
  }

}


