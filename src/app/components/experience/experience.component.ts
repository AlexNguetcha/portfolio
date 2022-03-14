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
        title: "Experience number 1",
        startAt: "Jan/2017",
        endAt: "Jan/2018",
        tasks : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam"
          ]
      }, 
      {
        title: "Experience number 2 Responsible for the support of the faculty administrations systems",
        startAt: "Jan/2018",
        endAt: "Jan/2020",
        tasks : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam"
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
