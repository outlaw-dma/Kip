import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



import { AppSettingsService } from '../app-settings.service';
import { SignalKConnectionService } from '../signalk-connection.service';


interface dataSets {
  uuid: string;
  name: string;
}


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  formSignalKURL: string;

  endpointAPIStatus: boolean;
  endpointAPIStatusMessage: string;
  endpointWSStatus: boolean;
  endpointWSMessage: string;
  endpointRESTStatus: boolean;
  endpointRESTMessage: string;

  endpointAPIStatusSub: Subscription;
  endpointAPIStatusMessageSub: Subscription;
  endpointWSStatusSub: Subscription;
  endpointWSMessageSub: Subscription;
  endpointRESTStatusSub: Subscription;
  endpointRESTMessageSub: Subscription;


  dataSets: dataSets[] = [];
  selectedDataSet: string;

  constructor(
    private AppSettingsService: AppSettingsService, 
    private SignalKConnectionService: SignalKConnectionService) { }

  ngOnInit() {
    // get SignalKurl Status
    this.formSignalKURL = this.AppSettingsService.getSignalKURL();

    // sub for signalk status stuff
    this.endpointAPIStatusSub = this.SignalKConnectionService.getEndpointAPIStatus().subscribe(status => { this.endpointAPIStatus = status; });
    this.endpointAPIStatusMessageSub = this.SignalKConnectionService.getEndpointAPIStatusMessage().subscribe(message => { this.endpointAPIStatusMessage = message; });
    this.endpointWSStatusSub = this.SignalKConnectionService.getEndpointWSStatus().subscribe(status => { this.endpointWSStatus = status; });
    this.endpointWSMessageSub = this.SignalKConnectionService.getEndpointWSMessage().subscribe(message => { this.endpointWSMessage = message; });
    this.endpointRESTStatusSub = this.SignalKConnectionService.getEndpointRESTStatus().subscribe(status => { this.endpointRESTStatus = status; });
    this.endpointRESTMessageSub = this.SignalKConnectionService.getEndpointRESTMessage().subscribe(message => { this.endpointRESTMessage = message; });
  }


  ngOnDestroy() {
    this.endpointAPIStatusSub.unsubscribe();
    this.endpointAPIStatusMessageSub.unsubscribe();
    this.endpointWSStatusSub.unsubscribe();
    this.endpointWSMessageSub.unsubscribe();
    this.endpointRESTStatusSub.unsubscribe();
    this.endpointRESTMessageSub.unsubscribe();
  }

  updateSignalKURL() {
    this.AppSettingsService.setSignalKURL(this.formSignalKURL);
  }

  resetSettings() {
    this.AppSettingsService.deleteSettings();
  }





}
