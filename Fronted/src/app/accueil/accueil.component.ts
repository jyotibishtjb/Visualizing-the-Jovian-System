import { Component, OnInit } from '@angular/core';
import Typewriter from 'node_modules/t-writer.js';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.description')

  const options = {
    loop: true
  }
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 150,
      deleteSpeed: 500,
      typeColor: '#fff',
    })
    
    writer
      .type('Welcome to JIP app')
      .rest(900)
      .changeOps({ deleteSpeed: 100 })
      .clear()
      .type('Explore Jupiter with us')
      .rest(1000)
      .clear()
      .type('process images')
      .rest(1000)
      .changeOps({ deleteSpeed: 100 })
      .clear()
      .type('image recoginition')
      .rest(1000)
      .clear()
      .start()
          
  }

}
