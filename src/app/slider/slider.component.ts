import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  L:any;
  A:any;
  @Input() lista:any;
  @Output() evento = new EventEmitter<string>();
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

  f(a:any){
    var img = new Image();
    img.src = this.lista[this.ch];
    if(a){
      var H = img.height;
      var W = img.width;
      var R = H/W;
      if(Math.max(H,W) == H){
        this.A = document.getElementsByClassName('w')[0].clientHeight;
        this.L = this.A/R;
      } else {
        this.L = document.getElementsByClassName('w')[0].clientWidth;
        this.A = this.L*R;
      }
    }
    
  }

  ev(a:string){
    this.evento.emit(a)
  }

}