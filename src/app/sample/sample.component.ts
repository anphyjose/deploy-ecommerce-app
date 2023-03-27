import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {


  name = 'Angular';
  imageObject = [{
      image: 'assets/img/collegeOut.jpg',
      thumbImage: 'assets/img/collegeOut.jpg',
      title: 'College Campus'
  }, {
       image: 'assets/img/collegeLibery.jpg',
      thumbImage: 'assets/img/collegeLibery.jpg',
      title: 'College Library'
  }, {
       image: 'assets/img/collegeClass.jpg',
      thumbImage: 'assets/img/collegeClass.jpg',
      title: 'College Class Room'
  },{
       image: 'assets/img/collegeSports.jpg',
      thumbImage: 'assets/img/collegeSports.jpg',
      title: 'College Sports'
  }, {
    image: 'assets/img/collegeArts.jpg',
    thumbImage: 'assets/img/collegeArts.jpg',
    title: 'College Arts'
  }, {
    image: 'assets/img/collegeCanteen.jpg',
    thumbImage: 'assets/img/collegeCanteen.jpg',
    title: 'College Canteen'
  }];
}
