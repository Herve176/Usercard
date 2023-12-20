import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})
export class UsercardComponent {
title!: string;
image!: string;
description!: string;

}
