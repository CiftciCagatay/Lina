import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactDetailsPage } from '../contact-details/contact-details';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  searchText = ""

  contacts = [
    {
      name: "Çağatay Çiftçi"
    },
    {
      name: "Ali Tosun"
    },
    {
      name: "Aslancan Yılmaz"
    },
    {
      name: "Emircan Kavas"
    },
    {
      name: "Muhammed Bahaeddin Aydemir"
    },
    {
      name: "Şeref Keser"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  openContactDetailPage () {
    this.navCtrl.push(ContactDetailsPage)
  }

}
