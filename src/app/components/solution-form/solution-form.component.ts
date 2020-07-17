import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-form',
  templateUrl: './solution-form.component.html',
  styleUrls: ['./solution-form.component.css']
})

export class SolutionFormComponent implements OnInit {

  @Input() pageTitle:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
