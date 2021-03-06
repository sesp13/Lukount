import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public contentPosts;

  constructor() { }

  ngOnInit(): void {
    this.contentPosts = [
      {
        title: "¿Has oído hablar de la planeación financiera? FP&A",
        imagePath: "../../../assets/lukount/HOME/contacta_asesor.png",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium animi modi facilis ea repellat excepturi, quidem cupiditate est veritatis laborum ut repellendus fugit facere quis laboriosam rerum omnis corrupti voluptates.",
        authorImage: "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
        authorName: "Miguel Giner"
      },
      {
        title: "¿Como creo mi empresa en Colombia?",
        imagePath: "../../../assets/lukount/HOME/contacta_asesor.png",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium animi modi facilis ea repellat excepturi, quidem cupiditate est veritatis laborum ut repellendus fugit facere quis laboriosam rerum omnis corrupti voluptates.",
        authorImage: "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
        authorName: "Luisa López"
      },
      {
        title: "Título para entrada de blog 3",
        imagePath: "../../../assets/lukount/HOME/contacta_asesor.png",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium animi modi facilis ea repellat excepturi, quidem cupiditate est veritatis laborum ut repellendus fugit facere quis laboriosam rerum omnis corrupti voluptates.",
        authorImage: "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
        authorName: "Alberto Pérez"
      }
    ];
  }

}
