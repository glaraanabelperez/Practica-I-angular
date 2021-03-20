import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    toggler;
    menuPaginaI;
    mostrar=false;
    
    constructor(){
        this.toggler = document.querySelector('.menu__toggler');
        this.menuPaginaI= document.querySelector('.menuPaginaI');
    }
    ngOnInit(): void {
        // this.toggler.addEventListener('click', () => {
        //     this.toggler.classList.toggle('active');
        //   })
    }

    mostrarSubmenuPaginaI(){
        if(this.mostrar==true){
            this.mostrar=false;
            console.log(this.mostrar);

        }else{
            this.mostrar=true;
            console.log(this.mostrar);
        }
    }
  
}

