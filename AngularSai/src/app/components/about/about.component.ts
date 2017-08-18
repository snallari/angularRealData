import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => {
            const realVal = parseInt(value);
            return ('Year: 2016<br />Price Index:' + realVal);
        }
    }

    values: number[] = [102, 115, 130, 137];


  constructor() { }

  ngOnInit() {
  }

}
