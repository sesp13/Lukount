import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  public questions; 
  
  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {
        question: "Pregunta número 1 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
      {
        question: "Pregunta número 2 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
      {
        question: "Pregunta número 3 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
      {
        question: "Pregunta número 4 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
      {
        question: "Pregunta número 5 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
      {
        question: "Pregunta número 6 de mi página web ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut voluptates sint et obcaecati voluptate velit, dolor in aspernatur autem repellat omnis deserunt modi quae quaerat tempore mollitia. Exercitationem, soluta?"
      },
    ];
  }

}
