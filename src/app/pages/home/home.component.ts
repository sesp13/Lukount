import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clientCardArray;
  public pageTitle: string;

  constructor() { 
    this.pageTitle = "home";
  }



  ngOnInit(): void {
    // this.clientCardArray = [
    //   {
    //     content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo voluptatum dolorum
    //     numquam veniam quidem totam nisi vero consectetur porro facilis sunt labore, libero
    //     recusandae esse cupiditate quibusdam! Consequatur, iure `,
    //     imgRoute: `https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg`,
    //     clientName: "Emiliano López"
    //   },
    //   {
    //     content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo voluptatum dolorum
    //     numquam veniam quidem totam nisi vero consectetur porro facilis sunt labore, libero
    //     recusandae esse cupiditate quibusdam! Consequatur, iure `,
    //     imgRoute: `https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg`,
    //     clientName: "Emiliano López"
    //   },
    //   {
    //     content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo voluptatum dolorum
    //     numquam veniam quidem totam nisi vero consectetur porro facilis sunt labore, libero
    //     recusandae esse cupiditate quibusdam! Consequatur, iure `,
    //     imgRoute: `https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg`,
    //     clientName: "Emiliano López"
    //   }
    // ];
    this.scroll();
  }

  //Animación del boton de conocenos
  public scroll(){
    $('#btn-conocenos').click(function(){
      var destino = $(this.hash);
      var v = destino[0].id;
      if (v != "myCarousel") {
          if (destino.length == 0) {
              destino = $('a[name="' + this.hash.substr(1) + '"]');
          }
          if (destino.length == 0) {
              destino = $('html');
          }
          $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
          return false;
      }
    });
  }

}
