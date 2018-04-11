import { Component, OnInit } from '@angular/core';
import { IWineType } from '../models/wine.type.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-types-of-wine',
  templateUrl: './types-of-wine.component.html',
  styleUrls: ['./types-of-wine.component.css']
})

export class TypesOfWineComponent implements OnInit {

  public isBigScrean: boolean = false;
  public bigScreanPicture: any;

  constructor() { 
  }

  ngOnInit() {
  }


  wineTypesOneRow:IWineType[] = [
    {
      name: 'Dry wine',
      imgUrl: '../assets/images/glassOfRed.jpg',
      bigObj: false,
    },
    {
      name: 'Sweet wine',
      imgUrl: '../assets/images/glassOfRed.jpg',
      bigObj: false,
    }
  ];

  wineTypesSecondRow:IWineType[] = [
    {
      name: 'half Dry',
      imgUrl: '../assets/images/glassOfWhite.jpg',
      bigObj: false,
    },
    {
      name: 'half sweet',
      imgUrl: '../assets/images/glassOfWhite.jpg',
      bigObj: false,
    }
  ];

  // isBigObjTrue(elem:IWineType):boolean {
  //   if (elem.bigObj === true ){
  //     return true;
  //   }
  // }

  // bigScrean(){
  //   let one = _.find(this.wineTypesOneRow, item => item.bigObj === true);
  //   let two = _.find(this.wineTypesSecondRow, item => item.bigObj === true);
  //   // var one = this.wineTypesOneRow.find(this.isBigObjTrue);
  //   // var two = this.wineTypesSecondRow.find(this.isBigObjTrue);
  //   if (one){
  //     return one;
  //   }
  //   else if (two){
  //     return two;
  //   }
  // }

  public onComponentClick(value: any){
    this.isBigScrean = !this.isBigScrean;
    this.bigScreanPicture = value;
  }


}
