import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../_service/auth/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentic:AuthentificationService,private  router:Router) { }

  ngOnInit(): void {
    this.authentic.loggOut();
    this.router.navigate(['home'])
  }

}
