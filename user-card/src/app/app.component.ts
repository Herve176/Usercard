import { Component } from '@angular/core';
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
  usercard!:Usercard[];


  ngOnInit(){
    this.usercard = [{
      title:'first',
      image:'https://www.wikihow.com/images/thumb/6/6d/Get-the-URL-for-Pictures-Step-4-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-4-Version-6.jpg',
      description: 'just a description',
      isvip:true
  },
  {
    
      title:'second',
      image:'https://www.wikihow.com/images/thumb/e/e2/Get-Rid-of-Garden-Slugs-Step-3-Version-4.jpg/v4-728px-Get-Rid-of-Garden-Slugs-Step-3-Version-4.jpg',
      description:'just a  second description',
      isvip:false
    },
    {
    
      title:'third',
      image:'https://www.wikihow.com/images/thumb/9/98/Get-Rid-of-Garden-Slugs-Step-1-Version-4.jpg/v4-728px-Get-Rid-of-Garden-Slugs-Step-1-Version-4.jpg',
      description:'just a third description',
      isvip:true
    }
    ];
  }
}
