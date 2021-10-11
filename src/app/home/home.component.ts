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
  
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
     this.loadData();
   }

  loadData() {
    this.isLoading = true;
    this._dataService.GetCities().subscribe(res => {
      console.log('res', res);
      this.citiesList = res;
      this.isLoading = false;
    }, (err) => {
      console.log('err', err);
      this.isLoading = false;
    });
  }


}
