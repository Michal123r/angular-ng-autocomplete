import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citiesList;
  
  private sities$: Observable<string>;
 
  items;

   public isLoading: boolean;
  sub: any;
  
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    var data  = localStorage.getItem('dataSource').toString();
   // if(data == null){
      this.loadData();
   // }
    // else{
    //   this.citiesList = data.split(',');
      
    // }
    
    
   }

  loadData() {
    this.isLoading = true;
    this.sub =  this._dataService.GetCities().subscribe(res => {
      console.log('res', res);
      this.citiesList = res;
      localStorage.setItem('dataSource', this.citiesList);
      this.isLoading = false;
    }, (err) => {
      console.log('err', err);
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
