import { Injectable } from '@angular/core';
import { MqttService,IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MqttClientService {
  private subscription : Subscription;
  private topicName : any = "geo/point";

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe(this.topicName).subscribe((message: IMqttMessage) => {
      console.log('msg: ', message)
    });
    console.log("Subscribed for the topic - " + this.topicName)
  }
}
