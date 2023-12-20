import { Component ,OnInit, Input } from '@angular/core';
import { Usercard } from '../models/usercard.models';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})
export class UsercardComponent implements OnInit {
@Input() usercard!:Usercard;

ngOnInit(){
  
}

}
