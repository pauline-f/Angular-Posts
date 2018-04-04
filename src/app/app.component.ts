import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: "Bonjour",
      content: "Ca va ?",
      loveIts: 2,
      status: "Positive",
      create_at: new Date()
    },
    {
      title: "Hello",
      content: "How are you?",
      loveIts: 4,
      status: "Positive",
      create_at: new Date()
    },
    {
      title: "Hej",
      content: "Hur mår du?",
      loveIts: 6,
      status: "Positive",
      create_at: new Date()
    }
  ]
  
}
