import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pickedDate = new Date().toISOString()

  constructor(public navCtrl: NavController) {

  }

}
