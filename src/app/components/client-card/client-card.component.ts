import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() content:string;
  @Input() imgRoute:string;
  @Input() clientName:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
