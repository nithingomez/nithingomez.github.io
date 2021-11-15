
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {

  // listArray: string[] = [];
  // sum = 20;
  // direction = "";
  posts: {
    userId: number,
    id: number,
    title: string,
    body: string,
  }[] = [];
  originalPosts: any = [];

  constructor(protected commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.getAllPosts().subscribe((response: any) => {
      this.originalPosts = [...response];
      this.posts = response.slice(0, 15);
    });
  }

  // posts = ' '.repeat(100).split('').map((s, i) => i + 1)

  // onScroll() {
  //   const length = this.posts.length
  //   setTimeout(() => {
  //     const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)

  //     // This approach should be used to avoid creating another memory address to the array
  //     while (p.length) this.posts.push(p.shift())
  //   }, 1000)
  // }



  onScrollDown() {
    if (this.posts.length < this.originalPosts.length) {
      let len = this.posts.length;

      for (let i = len; i <= len + 15; i++) {
        this.posts.push(this.originalPosts[i]);
      }
    }
  }



}


