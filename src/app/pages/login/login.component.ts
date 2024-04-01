import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { LoginService } from './login.service';
import { win32 } from 'path';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
  '../../../../node_modules/primeflex/primeflex.css']
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;
  lat!: string;
  lng!: string;
  data: any;
  address!: string;

  loading: boolean = false;
  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  success(pos: { coords: any; }) {
    var crd = pos.coords;

    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    localStorage.setItem('latitude', crd.latitude);
    // console.log(`Longitude: ${crd.longitude}`);
    localStorage.setItem('longitude', crd.longitude);
    // console.log(`More or less ${crd.accuracy} meters.`);
  };

  error(err: { code: any; message: any; }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  getUserLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);

      this.lat = localStorage.getItem('latitude') || '';
      this.lng = localStorage.getItem('longitude') || '';
      this.loginService.getGeolocation(this.lat, this.lng).subscribe((val: any) => {
        this.data = val;
        this.address = this.data.results[0].formatted;
        localStorage.setItem('currentAddress', this.address);
      });
    } else {
      console.error("User not allow");
    }
  };

  constructor(
    // public layoutService: LayoutService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getUserLocation();
  }
}
