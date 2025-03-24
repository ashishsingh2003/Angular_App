import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_App';
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy4k1Dyy4HeB5W8q_0ul3Cgcu0d2OVNvjbQ&s";
  url="https://www.bridgelabz.com";

  onClick(event:MouseEvent){
    
    window.open(this.url,"_blank");
  }
}
