import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  links = new Map([

    ["about", 
    [
        "About Me",
        `I spent my 20s deciding which of my hobbies to turn into a career.
        I loved philosophy, I loved music, and I loved computers. Given the economics 
        of academia and music, IT was a clear winner. Create software for a living and 
        save the Heidegger essays and Shostakovich records for when I get home. Besides 
        philosophy, software, and music, I have a little hobby where I go find different 
        kinds of fungi and try to identify them. The beautiful specimen to the right there 
        is the amanita muscaria, or fly agaric. It grows under pine trees and attracts flies.

        I am a full stack Java developer with Agile/Scrum and TDD experience. I also have 
        experience with CSS, HTML, and Angular, which I used to make this portfolio :-). I am located in Columbus, Ohio. You can reach me at 
        beerscb@gmail.com and you can find me on Github and LinkedIn.`,
        'assets/amanita.jpg',
        `<A HREF = "https://github.com/ben-beers">My Github Repos</A>
        <A HREF = "https://www.linkedin.com/in/ben-beers-75746829/">My LinkedIn Profile</A>`
      ]
    ],

    ["RAC", ["Random Access Cards",
      `I and my team worked together to produce this using Java for our backend and 
      taking advantage of the Spring framework to createa single-page app. It's a flash 
      card app for self-teaching any subject the user wants. We deployed it to Heroku, so
      just check the link below if you want to see how it looks. The login is a dummy,
      so you can type in whatever username/password you want in order to use the app. 
      I'd say it's not bad for something we pulled together in three weeks, using 
      vanilla JavaScript no less!`,
      "assets/raclogin.PNG",
    `<A HREF = "https://random-access-cards.herokuapp.com/">Random Access Cards"</A>`]
    ],
    
    ["recipes", ["Recipes API",
      `This is a React project that sends requests to an api and retrieves recipes for 
      you. The API is free and only allows a certain number of requests per minute, so 
      it's easy to overload. If it stops working for you, then just wait about ten 
      seconds and try again. Type any keyword (try "beef") and it will return a picture 
      of the dish with a title, list of ingredients, and number of categories. This began 
      as a tutorial project when I was teaching myself React but grew into something more. 
      If you want to check it out, I've deployed it with Netlify.`,
    `assets/morels.jpeg`,
  `<A HREF="https://quizzical-nobel-909685.netlify.app/">Recipes API</A>`]],
    ["tips", ["Columbus Tip Jars",
      `This was a volunteer project that I participated in to help creatives make money
      during the pandemic. I was involved for several weeks during which we worked out
      some bugs, put together a new logo, and got user and URL verification up and
      running. I wrote the regular expressions to verify URLS. This was a fun project
      for me because it's the first things I worked on that was deployed for real-world
      use by actual end-users. Our tech stack was Ruby on Rails with a React frontend.`,
    'assets/looking-good-cbus.png',
    `<A HREF="https://tipcolumbus.com">Columbus Tip Jars</A>`]]
  ]);
  
  contentText = this.links.get("about")[1];
  imagePath = this.links.get("about")[2];
  contentLink = this.links.get("about")[3];

  onClickMenuItem(key){
    this.contentText = this.links.get(key)[1];
    this.imagePath = this.links.get(key)[2];
    this.contentLink = this.links.get(key)[3];
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
