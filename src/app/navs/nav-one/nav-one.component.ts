import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-one',
  templateUrl: './nav-one.component.html',
  styleUrls: ['./nav-one.component.css']
})
export class NavOneComponent {
  photos = [
    {title: 'ПС 500 кВ Щёлоков', description: '2014 год', path: '1.jpg'},
    {title: 'asd', description: 'qwe', path: '2.jpg'},
    {title: 'asd', description: 'qwe', path: '3.jpg'},
    {title: 'asd', description: 'qwe', path: '4.jpg'},
    {title: 'asd', description: 'qwe', path: '5.jpg'},
  ];
}
