import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //usersName: string | null

  constructor(private httpClient : HttpClient, private router : Router){

    //this.usersName = backend.getTheUsersNameFromBackend
  }

  AddRecipe() {

    this.httpClient
    .post<Response>('http://localhost:8080/recipeCreate', {
     
      //sends body to backend
      test : 'test string'

    })
    .subscribe((response: Response) => {
      
      //handles what to do with backend response

    }, (err) =>{
      //if response from backend is an error
    })

  }

}
