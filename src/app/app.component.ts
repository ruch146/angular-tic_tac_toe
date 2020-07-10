import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac';

  winMessage:string='';
  //based on this we are gonna evaluate whose turn is it
  isCross=false;

  itemArray:string[]=new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}
   
  //everytime a number comes up ehen we hit a button
  handleClick=(itemNumber:number)=>{

    //if winner is already there
    if(this.winMessage){
      return this.toastr.success(this.winMessage)
    }

    //Now we need to check whether clicking is available i.e it is empty on that particular itemnumber
    if(this.itemArray[itemNumber]==='empty'){

      //here we need to fill that place with cross or circle depending on the user
      //so we have used variable isCross to handle that and a ternary operator
      //we need to change turn as well

      this.itemArray[itemNumber]=this.isCross? 'cross':'circle'
      this.isCross=!this.isCross

    }else{
      //if its not empty
      return this.toastr.info('Already Filled')
    }


    //everytime we click we also need to check if winner is there
    this.checkIsWinner()
  }




   
  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
  };





  reload=()=>{
    this.winMessage=''
    this.isCross=false
    this.itemArray=new Array(9).fill('empty');
  }
}
