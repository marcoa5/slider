import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-slider',
  template: `
  <div class="container"> 
  <div class="w" [ngStyle]="{'background-image': 'url(' + lista[ch] + ')', 'background-repeat':'no-repeat', 'background-position':'center', 'background-size': size , 'background-color':color }">
      <!--<img 
      src="{{lista[ch]}}" 
      class="backimg" 
      (load)="f($event)"
      height="{{A}}" 
      width="{{L}}">-->
  </div>   
  <div class="side" (click)="ev(lista[ch])">
      <button 
      mat-icon-button
      class="arrb"
      (click)="meno()">
          <mat-icon 
          inline="true" 
          class="icon">
              chevron_left
          </mat-icon>
      </button>
  </div>
  <div class="center" (click)="ev(lista[ch])">
      <div class="centertop">
      </div>
      <div class="centerbottom">
          <div class="bottoni">
              <button 
              mat-icon-button 
              *ngFor="let l of lista; let i= index"
              class="botb">
                  <mat-icon inline="true" *ngIf="i!=ch" (click)="sc($event)" name="{{i}}">radio_button_unchecked</mat-icon>
                  <mat-icon inline="true" *ngIf="i==ch" (click)="sc($event)" name="{{i}}">radio_button_checked</mat-icon>
              </button>
          </div>
      </div>
  </div>
  <div class="side">
      <button 
      mat-icon-button 
      class="arrb" 
      (click)="piu()">
      <mat-icon 
      inline="true" 
      class="icon">
          chevron_right
      </mat-icon>
      </button>
  </div>

</div>
  `,
  styles: [
    `*{
      box-sizing: border-box;
      z-index: 0;
      transition: .5;
  }
  
  .container{
      position: absolute;
      width: 100%; height:100%;
      display:flex;
      flex-direction: row;
  }
  
  .side, .center{
      cursor: pointer;
      display:flex; width: 10%; height: 100%;
      justify-content: center;
      align-items: center;
      overflow: hidden;
  }
  
  .center{
      width:80%;
      display: flex;
      flex-direction: column;
  }
  
  .centertop{
      width: 100%;
      display: flex;
      height: 90%;
  }
  
  .centerbottom{
      width: 100%;
      height: 10%;
      display:flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
  }
  
  .arrb{
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightgray;
      border-radius: 15px;
      opacity: .6;
      width: 100%;
      max-width: 30px;
      z-index: 2;
  }
  
  .backimg{
      z-index: 1;
      //box-shadow: 0 0 10px 0 black;
      display:flex;
      cursor: pointer;
  }
  
  .bottoni{
      background-color: lightgray;
      border-radius: 15px;
      opacity: .6;
      max-height:100%;
      display: flex;
      align-items: center;
      z-index: 2;
      justify-content: space-evenly;
  }
  
  .w{
      position: absolute;
      top:0;
      left:0; 
      width: 100%;
      height: 100%;
      display: flex; 
      justify-content: center; 
      align-items: center;
  }
  
  .botb{
      justify-content: space-evenly;
      font-size: 100%;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;;
  }
  
  .arrb{
      height: 25px; width: 25px;
      max-width: 100%;
  }`
  ]
})
export class SliderComponent implements OnInit {


  L:any;
  A:any;
  @Input() lista:any;
  @Input() size:any;
  @Input() color:any;
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
      var H = img.height;
      var W = img.width;
      var R = H/W;
      if(Math.max(H,W) == H){
        this.A = document.getElementsByClassName('w')[0].clientHeight;
        this.L = document.getElementsByClassName('w')[0].clientHeight/R;
      } else if (Math.max(H,W) == W){
        this.L = document.getElementsByClassName('w')[0].clientWidth;
        this.A = document.getElementsByClassName('w')[0].clientWidth*R;
      }    
  }

  ev(a:string){
    this.evento.emit(a)
  }

}
