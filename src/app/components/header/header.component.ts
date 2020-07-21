import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NgbModal, private _router: Router) { }

  ngOnInit(): void {
  }

  openMenuModal(menu) {
    this.modal.open(menu, { size: "xl" });
  }

}
