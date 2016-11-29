import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.sass']
})
export class ReaderComponent implements OnInit {
  bookTitle: string;
  bookText: string;


  constructor() {
    this.bookTitle = "Ніч проти різдва";
    this.bookText = `Богобоязливим бувши чоловіком, він не раз малював ікони, та й тепер ще можете знайти в Т... церкві його євангеліста Луку. Але все перевершив він, як змалював у церкві на стіні, у правому притворі, святого Петра в день Страшного Суду, з ключами в руках, що виганяє з пекла нечисту силу. Переляканий чорт на тій картині метушився на всі боки, прочуваючи свою загибель, а визволені з неволі грішники лушпенили та ганяли його батогами, поліняччям та чим запопадя. Коли майстер працював над тією картиною і малював її на великій дерев'яній дошці, чорт з усієї сили намагався перебивати йому, штовхав під руку, вихором здіймав із горна в кузні попіл і засипав ним картину; а проте роботу закінчено, дошку внесено до церкви і вправлено у стіну в притворі, і відтоді чорт заприсягся мститися на ковалеві. `;
   }


  ngOnInit() {

  }



}
