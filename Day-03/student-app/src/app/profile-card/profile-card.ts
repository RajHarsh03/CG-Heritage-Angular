import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  name = signal('Harsh');
  followers = signal(1000);
  
  followUser() {
    this.followers.update(count => count + 1);
  }
}
