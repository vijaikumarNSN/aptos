import { Component , OnInit} from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  dropDownForm : FormGroup;
  dropDown1 = [
    {key:'1',text:'Dropdown 11'},
    {key:'2',text:'Dropdown 12'}
  ];
  dropDown2 = [
    {value:'11',text:'Dropdown 21'},
    {value:'21',text:'Dropdown 22'}
  ];
  dropDown3 = [
    {value:'31',text:'Dropdown 31'},
    {value:'32',text:'Dropdown 32'},
    {value:'33',text:'Dropdown 33'},
    {value:'34',text:'Dropdown 34'},
    {value:'35',text:'Dropdown 35'},
    {value:'36',text:'Dropdown 36'},
    {value:'37',text:'Dropdown 37'},
    {value:'38',text:'Dropdown 38'},
    {value:'39',text:'Dropdown 39'},
    {value:'40',text:'Dropdown 40'}
  ];
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
      this.dropDownForm = this.fb.group({
          dropDown1:[
            {
              value:'',
              disabled:false
            },
            [Validators.required]
          ],
          dropDown2:[
            {
              value:'21',
              disabled:true
            },
            [Validators.required]
          ],
          dropDown3:[
            {
              value:'',
              disabled:false
            },
            [Validators.required]
          ]
      })
  }
}
