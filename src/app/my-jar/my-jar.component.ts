import { Component, OnInit } from '@angular/core';
import {GratService} from '../common/services/grat.service'; 
import {grat} from '../common/models/grat'; 
import { Router } from '@angular/router';
import { RoutingConstants } from '../common/constants/routing-constants';


@Component({
  selector: 'app-my-jar',
  templateUrl: './my-jar.component.html',
  styleUrls: ['./my-jar.component.scss']
})
export class MyJarComponent implements OnInit {

constructor(private mockGratService: GratService, private router: Router) { }
 mockGrats: grat[]; 
  ngOnInit() { 
    this.getAllGrats(); 
  }

  getAllGrats() {
    this.mockGratService.getAllGrats().subscribe(grats => {
      this.mockGrats = grats; 
    })  
  }

  toIndividualGratitude(id: number) {
      this.router.navigate([`${RoutingConstants.Gratitude}/`+id]);
  }



}
