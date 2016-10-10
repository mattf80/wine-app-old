import { Injectable } from '@angular/core';

import { WINES } from './mock-wines';

@Injectable()
export class WineService {
    getWines() {
        return Promise.resolve(WINES);
    }
}