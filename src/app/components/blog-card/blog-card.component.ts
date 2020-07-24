import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() title:string;
  @Input() content:string;
  @Input() imagePath:string;
  @Input() authorImage:string;
  @Input() authorName:string;

  constructor() { }

  ngOnInit(): void {
  }

}
