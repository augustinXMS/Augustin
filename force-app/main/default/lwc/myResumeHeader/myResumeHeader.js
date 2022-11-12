import { LightningElement,api } from 'lwc';

export default class MyResumeHeader extends LightningElement {
    @api userDetails;
    @api profileImage;

    get phoneLink() {
        return `tel:${this.userDetails.PHONE}`;
    }
    get emailLink() {
        return `mailto:${this.userDetails.EMAIL}`;
    }
}