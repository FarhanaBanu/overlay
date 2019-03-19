import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  overlay1 =false;
  title = 'overlay';
selectedFruit : string;
value:boolean;
  fruits=["apple","mango","grapes","pineapple"];
  onSelect(fruit){
    this.selectedFruit=fruit;
    this.value=true;
  }
  overlay(){
    console.log("overelay clikced");
    this.value=false;
  }
}
