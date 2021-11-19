import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {

      // if (event instanceof NavigationStart) {
      //   // Show Loading Indicator
      //   console.log('event NavigationStart ' + JSON.stringify(event)); //  /route name
      // }

      // if (event instanceof NavigationEnd) {
      //   //Hide Loading Indicator
      //   console.log('event NavigationEnd ' + JSON.stringify(event));
      // }

      // if (event instanceof NavigationError) {
      //   //Hide Loading Indicator
      //   //Show error message (event.error)
      //   console.log('event NavigationError ' + JSON.stringify(event));
      // }

    });

  }

  ngOnInit(): void {
    console.log('Post Data from Resolver' + JSON.stringify(this.activatedRoute.snapshot.data['postData']));
    console.log('Router URL ' + this.router.url); //  /route name
    console.log('Route Param method 1:' + this.activatedRoute.snapshot.paramMap.get('id'))
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('Route Param method 2:' + params.get('id'))
    })
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Params: ' + JSON.stringify(params));
    });

  }

}
