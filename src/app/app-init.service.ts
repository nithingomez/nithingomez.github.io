import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {

    constructor() {
    }

    Init() {
        return new Promise<void>((resolve, reject) => {
            console.log("APP_INITIALIZER service method AppInitService.init() called");
            ////do your initialisation stuff here  
            setTimeout(() => {
                console.log('APP_INITIALIZER service method AppInitService.init() Finished');
                resolve();
            }, 100);

        });
    }
    Init2() {
        return new Promise<void>((resolve, reject) => {
            console.log("APP_INITIALIZER service method AppInitService.init2() called");
            ////do your initialisation stuff here  
            setTimeout(() => {
                console.log('APP_INITIALIZER service method AppInitService.init2() Finished');
                resolve();
            }, 100);

        });
    }
}
