import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css']
})
export class FaqContainerComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string

  constructor() { }

  ngOnInit(): void {

  }

}
