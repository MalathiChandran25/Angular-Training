import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent implements OnInit {

  constructor(private location : Location) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
