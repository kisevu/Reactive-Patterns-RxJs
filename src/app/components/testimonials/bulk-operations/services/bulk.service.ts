import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { UploadStatus } from '../models/upload.model';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class BulkService {

  images: Array<Image> = [];
  images$: Observable<Image []> ;

  constructor() {
    this.images$ =this.uploadMedia();
  }

  uploadMedia() : Observable<Image []>{
    this.images = [
    {url: '/assets/images/products/chess2.png',alt: 'one',title: 'one',id:1},
    { url: '/assets/images/products/chess3.png',alt:'two',title: 'two',id:2},
    {url:'/assets/images/products/chess4.png', alt:'three',title: 'three',id:3}
  ]
    return of(this.images);
  }



  upload(recipeId: number |undefined|null, fileToUpload: File){
    const formData = new FormData()
    formData.append('fileToUpload', fileToUpload)
    this.images.push({id:recipeId,url:fileToUpload.name,alt:fileToUpload.name,title:fileToUpload.name});
  }


  /* the upload functionality and this service is being used in the recipe creation under boostrap menu functionality
  it makes sense to have it there
  */



}


/* Working with bulk operations Reactively
- These are tasks performed on a large-scale  i.e uploading, deleting or inserting many items in one shot.
- This can also include applying a transformation or computation to multiple elements of a list simultaneously.
- These operations are designed to handle multiple updates in a single operation, often resulting in improved
  efficiency and performance compared to when each item is processed separately.
  - Tracking progress of bulk operations is crucial to provide feedback to users, monitor health og operations and identify issues.

  * - Bulk operation is represented by one action / event , however, in the background there are two possible behaviors:
    - 1: Running one network request for all the tasks.
    - 2: Running parallel network requests for every task.( go-to)

      * - Sample use cases
    ------------------------
     - Allow user to upload many files after clicking only once on the upload button.
     - Display the progress of this particular bulk application.

     - Since mostly the backend API  supports only one file at a time, we will be running N network requests in parallel
     to upload N files ( i.e if we upload two files, two requests will be sent )

     - forkjoin() operator handles this scenario and understand that it falls under combination operators.
     - forkjoin accepts an Array of ObservableInput or a dictionary Object of ObservableInput and returns an Observable that
      emits either an array of values in the exact same order as the passed array, or a dictionary of values in the same shape
      as the passed dictionary.
    - in other words, forkjoin operator takes a list of Observables as input, waits for the observables to complete,
    and then combines the last values they emitted in one array and returns it. The order of the resulting array is the same
    as the order of the input observables.
*/

