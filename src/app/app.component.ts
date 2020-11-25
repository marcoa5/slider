import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';
  cover='cover';
  contain='contain';
  transparent='transparent';
  lightgrey='lightgrey';
  white='white';
  grey='grey';
  
  lista=[
    'https://picsum.photos/id/1074/324/467',
    'https://picsum.photos/id/1021/700/200',
    'https://picsum.photos/id/1084/450/400',
    'https://picsum.photos/id/1022/450/200',
    'https://picsum.photos/id/1024/500/500',
    'https://picsum.photos/id/1025/500/500'
  ];

  vai(a:any){
    console.log(a)
  }
}
