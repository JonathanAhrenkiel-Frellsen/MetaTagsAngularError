import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
  articleId: string;
  customer: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id');

    this.db.firestore.collection('articles').doc(this.articleId).get().then((articleRef) => {
      this.seo.generateTags({
        title: articleRef.data().title,
        description: articleRef.data().author,
        image: articleRef.data().imagedir,
      })
    })

    // A different method of getting data from firebase (Did not also work)
    // this.customer = this.db
    //   .collection('articles')
    //   .doc<any>(this.customerId)
    //   .valueChanges()
    //   .pipe(
    //     tap(cust =>
    //       this.seo.generateTags({
    //         title: cust.name,
    //         description: cust.bio,
    //         image: cust.image,
    //       })
    //     )
    //   );
  }
}
