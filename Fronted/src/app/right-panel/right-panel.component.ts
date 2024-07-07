import { Component, Input, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  

  constructor(private parent:ParentService) {}

  ngOnInit(): void {
    
  }



}
