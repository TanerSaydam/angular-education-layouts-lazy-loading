import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: LayoutsComponent,
        children: [
          {
            path: "",
            component: HomeComponent,
            loadChildren:()=> import("../home/home.module").then(m=> m.HomeModule)
          },      
          {
            path: "about",
            loadChildren: ()=> import("../about/about.module").then(m=> m.AboutModule)
          }    
        ]
      }
    ])
  ]
})
export class LayoutsModule { }
