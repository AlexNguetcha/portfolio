import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects:any;

  constructor() { 
    this.projects = [
      {
        name: "Angular Portfolio",
        description: "My personal portfolio build with Angular.",
        picture: "./assets/project/portfolio.png",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://alexnguetcha.github.io/portfolio/"
      },
      {
        name: "Food delivery app",
        description: "Development of a food ordering application for an internal university restaurant.",
        picture: "./assets/project/nyaama.png",
        technos : ["php", "java", "javascript", "xml", "html", "css"],
        
      },
      {
        name: "Weekly and Daily Planner",
        description: "Weekly and Daily Planner is an application that allows you to plan your shedule each week in a simple and efficient way.",
        picture: "./assets/project/planner.jpg",
        technos : ["java", "xml"],
        link: "https://play.google.com/store/apps/details?id=com.larvablog.umanager"
      },
      {
        name: "OKAMPUS",
        description: "Development of a school help application for students from different faculties allowing them to have: the latest information, old tests and job offers",
        picture: "./assets/project/okampus.png",
        technos : ["php", "javascript", "html", "css"],
      },
      {
        name: "Quizzle - Jeu de mots",
        description: "Quizzle is a word game of finding the correct word from a shuffled word",
        picture: "./assets/project/quizzle.png",
        technos : ["java", "xml"],
        link: "https://play.google.com/store/apps/details?id=com.larvablog.quizzle"
      },
      
      
    ];
  }

  ngOnInit(): void {
  }

}
