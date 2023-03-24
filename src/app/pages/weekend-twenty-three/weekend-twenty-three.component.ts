import { Component, Input } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { WeekendService } from 'src/app/shared/services/weekend.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './weekend-twenty-three.component.html',
  styleUrls: ['./weekend-twenty-three.component.scss']
})
export class WeekendTwentyThreeComponent {

    imageSrc1 = ['./assets/weekend-sponsors/augusta.jpg', './assets/weekend-sponsors/balkan.png', './assets/weekend-sponsors/belvedere.jpg', './assets/weekend-sponsors/benjamissimo-logo.png', './assets/weekend-sponsors/boni-holding-logo.png',
    './assets/weekend-sponsors/buzonada.png', './assets/weekend-sponsors/carrusel-club.png', './assets/weekend-sponsors/catalyst.png', './assets/weekend-sponsors/chocolate.png', './assets/weekend-sponsors/cocacolapng.png', './assets/weekend-sponsors/coldbrew.png',
    './assets/weekend-sponsors/divopivo.png', './assets/weekend-sponsors/fastbooks.png', './assets/weekend-sponsors/florina-logo.png', './assets/weekend-sponsors/franklin.JPG', './assets/weekend-sponsors/gelato.png', './assets/weekend-sponsors/gifto.png',
    './assets/weekend-sponsors/glarus.png' ]
      imageSrc2 = [ './assets/weekend-sponsors/grizetti.png', './assets/weekend-sponsors/groshe.png', './assets/weekend-sponsors/hotelBansko.png', './assets/weekend-sponsors/karting-logo.png', './assets/weekend-sponsors/limechain.jpg', './assets/weekend-sponsors/persenk.jpg',
    './assets/weekend-sponsors/pulna_kupa.jpg', './assets/weekend-sponsors/Red-Bull-logo.png', './assets/weekend-sponsors/silabg.png', './assets/weekend-sponsors/skyvision.png', './assets/weekend-sponsors/soleti.png', './assets/weekend-sponsors/swburger.jpg',
    './assets/weekend-sponsors/tcherga.png', './assets/weekend-sponsors/tea.png', './assets/weekend-sponsors/theface.jpg', './assets/weekend-sponsors/treehouse.png', './assets/weekend-sponsors/vedra.png', './assets/weekend-sponsors/vidas.jpg',
    './assets/weekend-sponsors/villaVictoria.png', './assets/weekend-sponsors/zaira.png' ]

    departmentData: any; // Placeholder for department data.

    // Social media icons.
    linkedInIcon = faLinkedin;
    emailIcon = faEnvelope;
  
    constructor(private weekendService: WeekendService) {}
  
    ngOnInit(){
      this.weekendService.getDepartments().subscribe((data) => {
        this.departmentData = data;
      });
      console.log(this.departmentData)
    }

    @Input() day: string | undefined;
    @Input() events: Array<{
      time: string;
      description: string;
      location: string;
    }> | undefined;

    fridayEvents = [
      {
        time: '6:30 P.M',
        description: 'Registration begins',
        location: 'Andrey Delchev Auditorium',
      },
    ]

}
