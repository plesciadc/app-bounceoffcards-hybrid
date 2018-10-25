import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})

export class SettingsPage {

  // Initialize events sender
  constructor(public events: Events) {}
  
  difficultyValue = 5;

  difficultyChanged() {
    this.events.publish('setting:changed', 'Difficulty', this.difficultyValue);
    console.log("Sent the value");
  }

}
