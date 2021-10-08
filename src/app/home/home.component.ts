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

  onChangeSearch(term: string) {
    console.log('term', term);
    this.isLoading = true;
    this._dataService.getRepos(term).subscribe(res => {
      console.log('res', res);
      this.items = this.items ? this.items.concat(res['items']) : res['items'];
      this.items = res['items'];
      this.isLoading = false;
    }, (err) => {
      console.log('err', err);
      this.isLoading = false;
    });
  }

 
 
  focusedEventApi(e) {
    console.log('focused');
    // Fetch API data on Load
    this.onChangeSearch(null);
  }


 

  scrollToEndApi() {
    this.onChangeSearch('w');
  }

  customFilter(items: any, query: string) {
    return items.filter((item: any) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  disableFilter = (items: any[]) => items;
}
