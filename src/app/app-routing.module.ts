import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from './common/constants/routing-constants';
import { MyJarComponent } from './my-jar/my-jar.component'; 


const routes: Routes = [
  {path: RoutingConstants.MyJar, component: MyJarComponent },
  //{path: '**', redirectTo: `/${RoutingConstants.MyJar}`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
