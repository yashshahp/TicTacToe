import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  player1s: any;
  turn: any;
  count = 0;
  board = new Array(9);
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(data => {
      this.player1s = data.player1;
    })
  }
reset(){
  this.board= new Array(9);
}
back(){
  this.router.navigate([""])
}
  ngOnInit() {
    this.turn = this.player1s;
  }
  check(param) {

    if (!this.board[param]) {
      if (this.turn == "X") {

        this.board[param] = "X"
        this.turn = "O";
        this.count++;

      }
      else {
        this.board[param] = "O"
        this.turn = "X";
        this.count++;
      }
      if (this.board) {
        if (this.EndGame()) {
          setTimeout(() => {
            this.router.navigate([""])
          }, 100);
        }
      }

    }



  }
  EndGame() {

    for (let i = 0; i < this.board.length; i = i + 3) {
      if (this.board[i] == this.board[i + 1] && this.board[i + 1] == this.board[i + 2] && this.board[i]) {
        if (this.board[i] == this.player1s) {
          setTimeout(function () { alert("Player 1 Wins"); }, 100);

        }
        else {
          setTimeout(function () { alert("Player 2 Wins"); }, 100);

        }
        return true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (this.board[i] == this.board[i + 3] && this.board[i + 3] == this.board[i + 6] && this.board[i]) {
        if (this.board[i] == this.player1s) {

          setTimeout(function () { alert("Player 1 Wins"); }, 100);
        }
        else {
          setTimeout(function () { alert("Player 2 Wins"); }, 100);

        }
        return true;
      }
    }
    if (this.board[0] == this.board[4] && this.board[4] == this.board[8] && this.board[0]) {
      if (this.board[0] == this.player1s) {
        setTimeout(function () { alert("Player 1 Wins"); }, 100);


      }
      else {
        setTimeout(function () { alert("Player 2 Wins"); }, 100);

      }
      return true;
    }
    if (this.board[2] == this.board[4] && this.board[4] == this.board[6] && this.board[2]) {

      if (this.board[2] == this.player1s) {
        setTimeout(function () { alert("Player 1 Wins"); }, 100);

      }
      else {
        setTimeout(function () { alert("Player 2 Wins"); }, 100);

      }
      return true;
    }
    if (this.count == 9) {
      setTimeout(function () { alert("Draw"); }, 100);
      return true;
    }
    return false;
  }
}