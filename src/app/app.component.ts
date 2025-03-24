import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_App';
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy4k1Dyy4HeB5W8q_0ul3Cgcu0d2OVNvjbQ&s";
  url="https://www.bridgelabz.com";
  userName="Ashish"
  nameError=""
  onClick(event:MouseEvent){

    window.open(this.url,"_blank");
  }
  onInput(): void { // Removed event parameter, not needed
    const namePattern = /^[A-Z][a-zA-Z\s]{2,}$/; // Starts with uppercase, min 3 chars

    if (!this.userName.match(namePattern)) {
      this.nameError = "Name must start with a capital letter and have at least 3 characters.";
    } else {
      this.nameError = ""; // Clear error if valid
    }
  }
 
}
