import { Component ,OnInit,OnDestroy  } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit,OnDestroy {

  private dataSubscription!:Subscription
  constructor(private dataService:DataService){}
  data: number | undefined
  error!: string;
  ngOnInit(): void {
    
  this.fetchdata()



  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();

  }

  fetchdata():void{

      if(this.dataSubscription){
        this.dataSubscription.unsubscribe()
      }

 this.dataSubscription=this.dataService.getDataObservable()
    .subscribe(
      data=>{
        this.data=data
        console.log("Data",data);
        
      },
      error=>{
        console.log(error);
        this.data = undefined; // Clear any previous data
        this.error = error.message;
       
      }
 )



  }

  

}
