import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Usercard } from './models/usercard.models';
import { UsercardComponent } from "./usercard/usercard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UsercardComponent]
})
export class AppComponent {
  usercard!:Usercard;
  otherusercard!: Usercard;
  thirdusercard!: Usercard;

  ngOnInit(){
    this.usercard = new Usercard(
      'first',
      'https://www.wikihow.com/images/thumb/6/6d/Get-the-URL-for-Pictures-Step-4-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-4-Version-6.jpg',
      'just a description'
    );
    this.otherusercard = new Usercard(
      'second',
      'https://www.wikihow.com/images/thumb/e/e2/Get-Rid-of-Garden-Slugs-Step-3-Version-4.jpg/v4-728px-Get-Rid-of-Garden-Slugs-Step-3-Version-4.jpg',
      'just a  second description'
    );
    this.thirdusercard = new Usercard(
      'third',
      'https://www.wikihow.com/images/thumb/9/98/Get-Rid-of-Garden-Slugs-Step-1-Version-4.jpg/v4-728px-Get-Rid-of-Garden-Slugs-Step-1-Version-4.jpg',
      'just a third description'
    );
  }
}
