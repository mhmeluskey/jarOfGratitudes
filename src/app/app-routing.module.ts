import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from './common/constants/routing-constants';
import { MyJarComponent } from './my-jar/my-jar.component'; 
import { GratitudeComponent } from './gratitude/gratitude.component';


const routes: Routes = [
  {path: RoutingConstants.MyJar, component: MyJarComponent },
  {path: RoutingConstants.Gratitude + '/:id', component: GratitudeComponent}
  //{path: '**', redirectTo: `/${RoutingConstants.MyJar}`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
