import { Component } from '@angular/core';
import { AdConnectorService } from './ad-connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testclient';


  auth_url = "https://ads.tiktok.com/marketing_api/auth?app_id=1663862492277766&state=your_custom_params&scope=%5B2%5D&redirect_uri=https%3A%2F%2Fdev.perfotricks.com%2Fsources%2Ftikok"

  constructor(private router:Router){

  }

  authenticate(){
    window.location.href = this.auth_url;
  }

}
