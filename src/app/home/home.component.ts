import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  player1;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  player1selection(arg){
    this.player1=arg;
    
    this.router.navigate(["game",this.player1])
  }
}
