import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseCategories=[
    {id:1, name:"Front-end Development"},
    {id:2, name:"Back-end Development"},
    {id:3, name:"Mobile Applications"},
    {id:4, name:"Embedded Systems"}
  ];
  courseLevels=[
    {id:1,name:'Beginner'},
    {id:2,name:'Intermediate'},
    {id:3,name:'Advanced'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(x:any){

  }

}
