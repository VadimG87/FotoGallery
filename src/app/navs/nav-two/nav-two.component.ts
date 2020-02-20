import { Component} from '@angular/core';

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.css']
})
export class NavTwoComponent  {
  photos = [
    {title: 'Совсем маленькие', description: '2016 год', path: '1.jpg'},
    {title: 'Совсем маленькие', description: '2016 год', path: '2.jpg'},
    {title: 'На прогулке', description: '2017 год', path: '3.jpg'},
  ];
}
