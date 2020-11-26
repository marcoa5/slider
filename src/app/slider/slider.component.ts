import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  L:any;
  A:any;
  @Input() lista:any;
  @Input() size:any;
  @Input() color:any;
  @Output() indice = new EventEmitter<string>();
  @Output() elemento = new EventEmitter<string>();
  ch=0;
  constructor() { }

  ngOnInit(): void {
  }

  piu(){
    var l = this.lista.length-1;
    if(this.ch==l){this.ch=0} else {this.ch++};
  }

  meno(){
    var l = this.lista.length-1;
    if(this.ch==0){this.ch=l} else {this.ch--};
  }

  sc(a:any){
    this.ch=a.target.name;
  }

  ev(a:number){
    this.indice.emit(a.toString());
    this.elemento.emit(this.lista[a])
  }

}
