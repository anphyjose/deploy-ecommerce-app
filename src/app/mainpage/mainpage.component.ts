import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from '../college-website.service';
import { registation } from '../custom/registation';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent  implements OnInit{
	examData: Observable<registation[]>;
	exam:any;

	
  constructor( public router: Router, private service:CollegeWebsiteService ){
	this.examData= this.service.getexam();
  this.examData.subscribe(
    data=>
    this.exam=data
  )
  }

  onSubmit() {  
    this.router.navigate(['/ab'])  
} 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  images = ['../../assets/img/banneName.jpg','../../assets/img/bannerEarth.jpg','../../assets/img/bannerPopulation.jpg','../../assets/img/bannerWater.jpg']

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}


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
