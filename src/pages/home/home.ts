import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/RX';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  hourColor : string;
  minutesColor : string;
  secondsColor : string;
  clockTime: string;
  private timerHours : number;
  private timerHoursVal : string;
  private timerMinutes : number;
  private timerMinutesVal : string;
  private timerSeconds : number;
  private timerSecondsVal : string;
  timeColor: any;



  constructor(public navCtrl: NavController) {
    this.myTimeoutFunction();
    IntervalObservable.create(1000).subscribe(timeColor => this.timeColor = this.setColor());

  };


  ngDoCheck(){
    this.myTimeoutFunction();
    //IntervalObservable.create(1000).subscribe(secondsColor => this.secondsColor = this.changeSecondsBackground());
  };



  myTimeoutFunction() {
    this.setColor();
    this.secondsColor = this.changeSecondsBackground();
    this.minutesColor = this.changeMinutesBackground();
    this.hourColor = this.changeHourBackground();
    this.displayTime();
  }

  setColor() {
    this.timerHours = new Date().getUTCHours();
    this.timerMinutes = new Date().getUTCMinutes();
    this.timerSeconds = new Date().getSeconds();

    if (this.timerSeconds < 10) {
      this.timerSecondsVal = '0' + this.timerSeconds.toString();
    } else {
      this.timerSecondsVal = this.timerSeconds.toString();
    }

    if (this.timerMinutes < 10) {
      this.timerMinutesVal = '0' + this.timerMinutes.toString();
    } else {
      this.timerMinutesVal = this.timerMinutes.toString();
    }

    if (this.timerHours < 10) {
      this.timerHoursVal = '0' + this.timerHours.toString();
    } else {
      this.timerHoursVal = this.timerHours.toString();
    }
  }



  changeHourBackground(): string {
    this.hourColor = '#' + this.timerSecondsVal +  this.timerHoursVal + this.timerMinutesVal;
    return this.hourColor;
  }

  changeMinutesBackground(): string {
    this.minutesColor = '#' + this.timerMinutesVal +  this.timerMinutesVal + this.timerSecondsVal;

    return this.minutesColor;
  }

  changeSecondsBackground(): string {
    this.secondsColor = '#' + this.timerSecondsVal +  this.timerSecondsVal + this.timerSecondsVal;
    return this.secondsColor;
  }

  displayTime(): string {
    this.clockTime = this.timerHoursVal + ":" + this.timerMinutesVal + ":" + this.timerSecondsVal;
    return this.clockTime;
  }


}
