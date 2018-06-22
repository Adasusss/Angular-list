import { st } from '@angular/core/src/render3';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(nam: string, desc: string, img: string){
    this.name = nam;
    this.description = desc;
    this.imagePath = img;
  }
}