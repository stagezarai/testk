import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { RoutingComponent } from './routing/routing.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path :'features' ,component: FeaturesComponent},
  {path:'user' ,component: UserComponent},
  {path :'routing',component: RoutingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Component=[FeaturesComponent,UserComponent,
  RoutingComponent]

