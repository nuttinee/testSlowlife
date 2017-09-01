import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openSearchPage(){
    this.navCtrl.push("SearchPage");
  }
  openShowPage(){
    this.navCtrl.push("ShowPage");
  }
  openFavoritePage(){
    this.navCtrl.push("FavoritePage");
  }
}
