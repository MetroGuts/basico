import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monoarchivo',
  template: `<div class="contenedor">
                <h1>©2.018 {{empresa}}</h1>
             </div>`
})
export class MonoarchivoComponent implements OnInit {
  empresa:string = "ACME, S.A.";
  constructor() { }

  ngOnInit() {
  }

}
