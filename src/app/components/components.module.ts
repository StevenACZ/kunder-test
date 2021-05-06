import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [BannerComponent, HomeComponent],
  declarations: [BannerComponent, HomeComponent],
})
export class ComponentsModule {}
