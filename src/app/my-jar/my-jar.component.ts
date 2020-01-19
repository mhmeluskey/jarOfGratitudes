import { Component, OnInit } from '@angular/core';
import {GratService} from '../common/services/grat.service'; 
import {grat} from '../common/models/grat'; 
import {mockGrats} from '../common/mockdata/mock-grats'; 

@Component({
  selector: 'app-my-jar',
  templateUrl: './my-jar.component.html',
  styleUrls: ['./my-jar.component.scss']
})
export class MyJarComponent implements OnInit {

constructor(private mockGratService: GratService) { }
 mockGrats: grat[]; 
  ngOnInit() { 
    console.log("hello world"); 
    this.getAllGrats(); 
    console.log("mockgrats: ",mockGrats); 
   
  }

  getAllGrats() {
    this.mockGratService.getAllGrats().subscribe(grats => {
      this.mockGrats = grats; 
      console.log("mockgrats: ", mockGrats); 
    }) 
    
  }

}
