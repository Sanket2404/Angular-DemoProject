import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarCollection } from 'src/Pro';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent {

  @Input() car!: CarCollection;
  @Input() isUnchanged:any;
  @Output() notify=new EventEmitter<CarCollection>();

  clickChildMe(){
    this.notify.emit(this.car);
  }
}
