import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cervezas',
  templateUrl: './lista-cervezas.component.html',
  styleUrls: ['./lista-cervezas.component.scss']
})
export class ListaCervezasComponent implements OnInit {

  beer1 = { 
           "nombre": "Rubia Amarga",
           "tipo": "IPA",
           "precio":145,
           "stock":5,
           "image": "assets/img/ipa.jpeg"
  }
   beer2 = { 
           "nombre": "Negra Fuerte",
           "tipo": "Porter",
           "precio":130,
           "stock":8,
           "image": "assets/img/porter.jpeg"
  
   }
   beer3 = { 
           "nombre": "Rubia Suave",
           "tipo": "Honey",
           "precio":100,
           "stock":10,
           "image": "assets/img/honey.jpeg"
   }
  
  constructor() { }

  ngOnInit(): void {
  }

}
