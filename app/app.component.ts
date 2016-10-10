import { Component } from '@angular/core';
import { WineService } from '../app/shared/wine.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [WineService ]
})
export class AppComponent { }
