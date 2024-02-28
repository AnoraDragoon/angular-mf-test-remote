import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './web/home/home.component';
import { TestRemoteRoutingModule } from './test-remote-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TestRemoteRoutingModule],
  bootstrap: [AppComponent]
})
export class TestRemoteModule { }
