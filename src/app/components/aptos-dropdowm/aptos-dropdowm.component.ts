import { Component , Input, HostListener , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-aptos-dropdowm',
  templateUrl: './aptos-dropdowm.component.html',
  styleUrls: ['./aptos-dropdowm.component.scss']
})
export class AptosDropdowmComponent implements OnInit {
    @Input() labelKey:string;
    @Input() control: FormControl;
    @Input() controlName: string;
    @Input() values: Array<any>;
    @Input() valueLabelProperty: string;
    @Input() valueIdProperty: string;
    @Input() placeHolderText: string;

    showDropDown:boolean = false;
    selectedValue:any;
    state: boolean = false;

    @HostListener('click') clickedInside() {
      this.state = true; 
    }

    @HostListener('document:click') clickedOutside() {
      if (!this.state) {
        this.showDropDown = false; 
      }
      this.state = false;
    }

    constructor() {}
    ngOnInit(): void {
      if(this.control.value){
          const data = this.values.filter((value) =>{
              return this.control.value === value[this.valueIdProperty]
          })
          this.selectedValue = data[0];
      }
    }
    toggleDropDowm():void{
      this.showDropDown = !this.showDropDown;
    }
    onDropdownChange(value:any){
        this.selectedValue = value;
        this.control.setValue(value[this.valueIdProperty])
        this.showDropDown = false;
    }
}
