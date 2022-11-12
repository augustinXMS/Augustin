import { LightningElement, api, wire, track } from 'lwc';
import getTiles from "@salesforce/apex/TileController.getTiles";

export default class MyProjectsComponent extends LightningElement {
    recordsForCarousel = [];

    @wire(getTiles)
    objList({ data, error }) {
        if (data) {
                this.recordsForCarousel = data;
                if(this.recordsForCarousel.length > 0){
                    this.carouselSet = true;
                }
        }
        else {
            console.error('error objList in recordEventList: ', JSON.stringify(error));
        }
    }
}