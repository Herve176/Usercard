import { Component ,OnInit, Input } from '@angular/core';
import { Usercard } from '../models/usercard.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})

export class UsercardComponent implements OnInit {
@Input() usercard!:Usercard;

Showdetails = false;

ngOnInit(){}

tdescription(){
  this.Showdetails = !this.Showdetails;
}

}
