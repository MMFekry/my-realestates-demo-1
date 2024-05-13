import { Component, OnInit } from '@angular/core';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';

import { FavoriteRealestateResult } from 'src/app/models/realestates/favorite-realestate-result';
import { RegisteredRealestateResult } from 'src/app/models/realestates/registered-realestate-result';
import { RealestateFavoriteService } from '../../service/realestates/realestate-favorite.service';
import { RegisteredRealestatesService } from '../../service/realestates/registered-realestates.service';

@Component({
  selector: 'app-eservices',
  templateUrl: './eservices.page.html',
  styleUrls: ['./eservices.page.scss'],
})
export class EservicesPage implements OnInit {

  selectedSegment : string ='registedUnits';
  favoriteResult!: FavoriteRealestateResult;
  registredResult!: RegisteredRealestateResult;
  current = 1;

  constructor(private favService: RealestateFavoriteService,
    private regService: RegisteredRealestatesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getRegisterd();
    this.getfavorite();

  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegment= ev.target.value;
  }

  async getfavorite(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
  
    this.favService.getdata().subscribe((res) => {
      loading.dismiss();
      //this.favoriteResult.data.push(...res.data);
      
     
     this.favoriteResult = res;
     console.log(res);
    },
    (err) => {
      console.log(err);
      loading.dismiss();
    })
  }

  getRegisterd(){
    this.regService.getdata().subscribe(res => {
     this.registredResult = res;
     console.log(res);
    })
  }
}
