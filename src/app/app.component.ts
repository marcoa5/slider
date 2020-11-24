import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';
  lista=[
    'https://picsum.photos/id/1003/500/600',
    'https://picsum.photos/id/1021/700/200',
    'https://picsum.photos/id/1022/500/500',
    'https://picsum.photos/id/1024/500/500',
    'https://picsum.photos/id/1025/500/500'
  ];

  vai(a:Event){
    console.log(a)
  }
}
