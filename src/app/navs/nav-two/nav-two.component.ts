import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.css']
})
export class NavTwoComponent {
  photos = [
    {title: 'Совсем маленькие', description: '2016 год', avatarSize: 50, path: '1.jpg'},
    {title: 'Совсем маленькие', description: '2016 год', avatarSize: 50, path: '2.jpg'},
    {title: 'На прогулке', description: '2017 год', avatarSize: 50, path: '3.jpg'},
    {title: 'На прогулке', description: '2017 год', avatarSize: 50, path: '3.jpg'},
  ];

  onAvatarIncrease = () => this.photos.forEach(item => item.avatarSize = item.avatarSize + 1);

  onAvatarDecrease() {
    this.photos.forEach(item => item.avatarSize = item.avatarSize - 1);
  }
}
