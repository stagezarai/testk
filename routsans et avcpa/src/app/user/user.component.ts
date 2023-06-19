import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name="Rim";
  adress="tunis";
  MEssage="";
  stust="active";
  constructor(private rout:Router){}



  ngOnInit(): void{

  }
  getrim(){
    return this.stust;
  }
  getmessage(){
    console.log('ok' );
  }

ttiittoo(){
  this.rout.navigate(["/routing"])
}

}
