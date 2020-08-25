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
        question: "¿Como te llevamos a Bordo?",
        answer: "Cambiar de equipo contable puede ser un paso asustador ya que afecta a operaciones estratégicas de tus negocios. ¡No te preocupes! A partir del momento que te contactas con nosotros, tendrás un asesor financiero dedicado a analizar y diagnosticar el estado financiero de tu empresa. Si decides irte con nosotros, definiremos previamente un plan detallado de empalme con el antiguo equipo y así evitar lo que llamamos un “Black out”. En las primeras semanas dedicaremos un equipo reforzado de contadores y especialistas tecnológico para permitir una integración sin turbulencias y eficiente."
      },
      {
        question: "¡Sin costos adicionales!",
        answer: "El precio que te daremos será un precio fijo mensual determinado gracias al análisis de tu información financiera. No habrá costos adicionales una vez determinamos junto el alcance de los servicios que quieras contratar."
      },
      {
        question: "¿Lukount puede realizar la liquidación de nómina de mi empresa?",
        answer: "Tenemos un equipo de experto dedicado a realizar liquidación de nómina, así que no te preocupes, no hacemos cargo de todo al respecto."
      },
      {
        question: "¿Como accedo a mi información contables e informes?",
        answer: "Toda la información estará disponible en la nube a través de nuestra plataforma, la cual tendrás un acceso permanente con conexión internet. De ahí podrás descargar todos los informes y piezas contables que necesites: declaraciones, facturas, orden de compra, recibos de nómina, balances e informes financieros, etc... También, te aclaramos que se hace de manera periódica una back up de toda la información. Puedes acercarte a nuestra política de manejo y protección de datos. Y si te queda alguna duda, nuestro equipo tecnológico te podrá aclararlas."
      }
    ];
  }

}
