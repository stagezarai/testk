import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
  userneme="rim";
  active="true";
  datList=[
    {name:"rim",code:124,country:"monastir"},
    {name:"rami",code:524,country:"paris"},
    {name:"marim",code:104,country:"bouzid"}
  ]
  name="nouhe";
constructor(private rot:Router) {}


ngOnInit(): void{

}
redc(){
  this.rot.navigate(["/features"])
}
}
