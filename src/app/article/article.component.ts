import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from 'src/app/article/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'row';
  // article: Article[];
  constructor() {
    // this.article = [
    //   new Article('Anuglar', 'http://angular.io', 10),
    //   new Article('Anuglar', 'http://angular.io', 10),
    //   new Article('Anuglar', 'http://angular.io', 10)
    // ];
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit() {
  }

}
