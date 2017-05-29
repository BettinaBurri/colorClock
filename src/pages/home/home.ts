import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hour = 143722;
  hourColor = '#f34466'
  minuteColor = '#003700';
  secondColor = '#000055';

  aHourStyle = 'style="background-color:#151915"';

  constructor(public navCtrl: NavController) {

  }

  changeHourBackground(): string {
    var currentHour = this.hour;
    var newHour = new Date().getHours();


    this.hourColor = '#' + currentHour;
    return this.hourColor;
  }

}
