import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [];
  cardsForWeb = [];

  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return true;
        }
        return false;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    this.isHandsetObserver.subscribe((currentObserverValue) => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    });

    this.appService.getDeals().subscribe(
      (response) => {
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb = response.webCards;
        this.loadCards();
        this.notifierService.showNotification('Data load successfully','OK', "success")
      },
      (error) => {
        // alert(
        //   'There was an error in receiving data from server. Please try agian'
        // );
        this.notifierService.showNotification('There was an error in receiving data from server. Please try agian','OK', "error")
      }
    );
  }

  loadCards() {
    this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb;
  }

  getImage(imageName: string) {
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' + ')';
  }
}
