import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 types: any =[{
  category: 'Fruit'
 },{
  category:'Vegetable'
 },
{
  category:'Diary'
},
{
  category:'Baked goods'
},
{
  category:'Meat'
},
{
  category:'Herbs'
}]

categories:any =[]
  constructor(private homeService: DataService){
    
  }

  goCategory(category: any){
    this.homeService.getProgrammingLanguages().subscribe(
      (response: any) => {
        console.log(response);
        this.categories = response.data.filter((element: any) => element.category === category);
        console.log('category', this.categories);
      }
    );
  }

  

}
