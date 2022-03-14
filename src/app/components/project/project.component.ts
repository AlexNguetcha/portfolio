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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam debitis, laudantium sapiente ipsa a quam, ratione asperiores maxime aspernatur possimus autem itaque eligendi eius explicabo beatae qui!",
        picture: "./assets/project/portfolio.png",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://dashboard.heroku.com/apps"
      },
      {
        name: "Angular Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam debitis, laudantium sapiente ipsa a quam, ratione asperiores maxime aspernatur possimus autem itaque eligendi eius explicabo beatae qui!",
        picture: "./assets/project/portfolio.png",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://dashboard.heroku.com/apps"
      },
      {
        name: "Angular Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam debitis, laudantium sapiente ipsa a quam, ratione asperiores maxime aspernatur possimus autem itaque eligendi eius explicabo beatae qui!",
        picture: "./assets/project/portfolio.png",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://dashboard.heroku.com/apps"
      },
      {
        name: "Angular Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ipsum nam debitis, laudantium sapiente ipsa a quam, ratione asperiores maxime aspernatur possimus autem itaque eligendi eius explicabo beatae qui!",
        picture: "./assets/project/portfolio.png",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://dashboard.heroku.com/apps"
      }
      
    ];
  }

  ngOnInit(): void {
  }

}
