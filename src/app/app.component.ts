import { Component } from '@angular/core';
import { isInViewport } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alex Nguetcha';

  constructor() { 
    window.onscroll = ()=>{
      this.checkScroll();
    }
  } 

  checkScroll():void{
    const elementId = ["home", "about", "skills", "experience", "projects", "contact"];
    for (const id of elementId) {
      const element = document.getElementById(id);
      if (isInViewport(element)) {
        //desactivate other elements
        for (const id of elementId) {
          document.getElementById("nav-"+id).removeAttribute("class");
        }
        document.getElementById("nav-"+id).setAttribute("class", "active");
      }
    }

}

}


