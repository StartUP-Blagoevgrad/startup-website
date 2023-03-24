import { Component } from '@angular/core';

interface Testimonial {
    name: string;
    img: string;
    text: string;
    cite: string;
  }

  
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeComponent {
  title = 'startup-site';

  testimonials = [
    {
      photo: 'assets/photo1.jpg',
      quote: 'This is an amazing testimonial quote from a happy user!',
      author: 'John Doe, CEO of HappyUsers'
    },
    {
      photo: 'assets/photo2.jpg',
      quote: 'Another great testimonial from an excited customer!',
      author: 'Jane Smith, Founder of ExcitedCustomers'
    },
    {
      photo: 'assets/photo3.jpg',
      quote: 'This testimonial is proof of our satisfaction!',
      author: 'Michael Johnson, CTO of SatisfiedClients'
    }
  ];
  
}
