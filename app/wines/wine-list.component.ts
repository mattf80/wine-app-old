import { Component, OnInit } from '@angular/core';
import { IWine } from '../shared/models/wine';
import { WineService } from '../shared/wine.service';

@Component({
    moduleId: module.id,
    selector: 'wine-list',
    templateUrl: '/app/wines/wine-list.component.html'
})
export class WineListComponent implements OnInit {
    wines: IWine[] = [];

    constructor(private _wineService: WineService) { }

    ngOnInit() {
        this._wineService.getWines()
            .then(wines => this.wines = wines);
     }
}