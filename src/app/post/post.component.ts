import { Component, Input, OnInit } from '@angular/core';
import { containerEnd } from '@angular/core/src/render3/instructions';
import { post } from 'selenium-webdriver/http';
import { create } from 'domain';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() create_at: Date;
  @Input() status: string;

  post: {
    title: string,
    content: string,
    loveIts: number,
    create_at: Date,
    status: string
  }

  getLoveIts() {
    console.log(this.loveIts);
  }

  increaseLoveIts() {
    this.loveIts++;
    if (this.loveIts >= 0) {
      this.status = "Positive";
    } else {
      this.status = "Negative";
    }
    console.log(this.getStatus());
    return this.loveIts;
  }

  decreaseLoveIts() {

    this.loveIts--;
    if (this.loveIts >= 0) {
      this.status = "Positive";
    } else {
      this.status = "Negative";
    }
    console.log(this.getStatus());
    return this.loveIts;
  }

  getStatus() {
    return this.status;
  }
  

  constructor() {}

  ngOnInit() {
  }

}
