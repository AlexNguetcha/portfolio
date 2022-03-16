import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experiences:any;
  public visibleIndex:Number;

  constructor() {
    this.visibleIndex = 0;
    this.experiences = [
      {
        title: "Full Stack Developer : Food delivery app",
        startAt: "June/2020",
        endAt: "November/2020",
        tasks : [
          "Developing front end dashboard architecture",
           "Designing user interactions on dashboard",
           "Creating severs and databases for functionnality",
           "Designing and developing APIs",
           "Designind and developing android mobile application"
          ]
      }, 
      {
        title: "Full Stack Developer : School help application",
        startAt: "August/2019",
        endAt: "December/2019",
        tasks : [
          "Developing front end dashboard and website architecture",
           "Designing user interactions on dashboard",
           "Creating severs and databases for functionnality",
           "Designing and developing APIs",
           "Designind and developing android mobile application"
          ]
      }
    ];
   }

  ngOnInit(): void {
    this.visibleIndex = 0;

    window.onload = ()=>{
      for (let i =1; i<this.experiences.length; i++) {
        document.getElementById(""+i).style.display="none";
      }
    }
    
    
  }

  toggleVisibility(id){
    const element = document.getElementById(""+id);
    const icon = document.getElementById("toggle-"+id);
    const display = element.style.display;
    if (display==="none") {
      element.style.display = "block";
      icon.setAttribute("class", "fa fa-arrow-right toggle");
    }else{
      element.style.display = "none";
      icon.setAttribute("class", "fa fa-arrow-down toggle");
    }

  }

}
