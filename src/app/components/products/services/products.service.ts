import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, share, shareReplay, switchMap, timer } from 'rxjs';
import { Product } from '../models/prod.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$: Observable<Product[]>;

  products: Product [] = [];



  REFRESH_INTERVAL = 50000;



  constructor() {
    // this.products$ = this.loadProducts().pipe(
    //   shareReplay(1));


      /* pooling technique
      - Below we created  timer$ observable that will emit every 50 seconds.
      -For every emission we used switchMap() operator to transform the value into Observable that's
      returned  by "mocked http client" as I have used a static version above.
      This issues an HTTP GET request after 50secs  and conssequently update the cache.
      */
      // this.products$ = timer(0,this.REFRESH_INTERVAL).pipe(
      //   switchMap(_ =>
      //     this.loadProducts(),
      //   ),
      //   shareReplay(1)
      // )

      /* now when adhering to the properties of the ShareReplayConfig type below is final version that is more optimal */
    //  this.products$ = timer(0, this.REFRESH_INTERVAL).pipe(
    //   switchMap(_ => this.loadProducts()),
    //   shareReplay({bufferSize: 1, refCount: true})
    //  )




     /* Improvements on shareReplay operator that has shed light for replacement of it with share operator
     - share is similar to shareReplay with the only difference being that it doesn't have a buffer and it doesn't
     replay that buffer on subscription.
     - With share operator once the subscriber count reaches 0 , the source observable  automatically unsubscribes.
     - On the other hand when the refCount of shareReplay is set to true, it behaves  similarly to the share  operator  in
     terms of reference counting, but it also offers the ability to replay emitted values.
     - shareReplay() is nothing but a share() that uses ReplaySubject as a connector  and a specific reset strategy.
      */


     this.products$ = timer(0,this.REFRESH_INTERVAL).pipe(
      switchMap(_ => this.loadProducts()),
      share({
        connector: () => new ReplaySubject(),
        resetOnRefCountZero:  true,
        resetOnComplete: true,
        resetOnError: true
      })
     )


  }

  /* Boosting performance with Reactive Caching for that matter
  - Am of the idea of simulating caching of data fetched through http but as of now
  will use static data to simulate such a request for my use case
   * - I am digging deep on how the shareReplay() operator works and I want to look into it fully

  - in the above constructor we want to convert the cold unicast stream into a  hot or multicast type of consumption
  to avoid a overhead of http request.Also, we do not want it to work for each and every subscription unicastly.
  so we will use the shareReplay() operator for that as above.

  - By passing 1 in the args, shareReplay(1) cached the last emission from products$ emission.

   - So here the next time data is requested, it will come from the cache bank in-memory and not the server.
   Under the hood, shareReplay() operator creates a ReplaySubject  instance that will replay the emissions of the source observable
   with all future subscribers.
   - After the first subscription, it will connect the subject to the source Observable and broadcast all its values.
   - When the user leaves the page, it unsubscribes  and replays the values from the cache.

   - This works perfectly fine when the data doesn't need to be refreshed at all.
   But as per maybe a requirement, we need to refresh the data every interval, if
   pooling technique is used then we can update as with switchMap and time above.


  */





  loadProducts(): Observable<Product[]> {
    this.products =  [
      {
        name: 'Laptop',
        description: 'Macbook pro, apple gadget',
        quantity:1,
        price: 900.00
      },

      {
        name: 'car',
        description: 'Rav4 toyota model 2012',
        quantity:1,
        price: 3500.00
      },

      {
        name: 'Land',
        description: '2ha Piece of land in Kapsabet',
        quantity:2,
        price: 3500.00
      },

      {
        name: 'Bonds',
        description: 'Investment in different stakes, shares and bitcoin',
        quantity:5,
        price: 10000.00
      },
    ];

    return of(this.products);
  }



}
