import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-profileviewer',
  templateUrl: './profileviewer.component.html',
  styleUrls: ['./profileviewer.component.css']
})
export class ProfileviewerComponent implements OnInit {

  customerId: string;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');

    this.db.firestore.collection('users').doc(this.customerId).get().then((userRef) => {
      this.seo.generateTags({
        title: "title test",
        description: "description test",
        image: "image test",
      })
    })
  }
}
