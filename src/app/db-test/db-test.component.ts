import { Component }           from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { tap }                 from 'rxjs/operators';

interface GoodItem {
  goodContent: {
    description: string,
    date: string
  };
}

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.css']
})
export class DbTestComponent {

  goodItems: Array<GoodItem>;
  goodItems$ = this.db.list('goodActions').valueChanges();

  currentGoodContent: string;
  isLoading = false;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.isLoading = true;
    this.goodItems$
      .pipe(tap(() => this.isLoading = false))
      .subscribe((res: Array<GoodItem>) => this.goodItems = res);
  }

  onAddGoodActions() {
    const newGoodItem: GoodItem = {
      goodContent: {
        description: this.currentGoodContent,
        date: (new Date()).toISOString()
      }
    };
    this.db.list('goodActions').push(newGoodItem);
    this.currentGoodContent = '';
  }

  // items: Array<any>;
  // isLoading = false;
  //
  // constructor(
  //   private http: HttpClient
  // ) {
  // }
  //
  // ngOnInit() {
  //   const address$ = this.http.get('https://jsonplaceholder.typicode.com/todos');
  //
  //
  //   this.isLoading = true;
  //   address
  //     .pipe(finalize(() => this.isLoading = false))
  //     .subscribe((hui: any) => {
  //       this.items = hui;
  //       console.log(this.items);
  //     });
  // }
}
