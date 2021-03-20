import { Component, OnInit} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class GaleriaComponent implements OnInit {
  show:boolean = false;

  galeria=[
    // 'http://localhost:4200/assets/1.jpg', 
    // 'http://localhost:4200/assets/2.jpg',
    // 'http://localhost:4200/assets/3.jpg',
    // 'http://localhost:4200/assets/1.jpg'
    'assets/1.jpg', 
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/1.jpg'
  ];
  okImgGrande: boolean;
  pos: any;
  constructor() { }

  ngOnInit(): void {
  }

  agrandar(pos){
    this.okImgGrande=true;
    this.pos=pos;
   }
}
