import { LightningElement } from 'lwc';
import * as RESUME_DATA from './myResumeContainerData'
import FOOTERMAP from '@salesforce/resourceUrl/footerMap'
import BADGES from '@salesforce/resourceUrl/myResource'
import {NavigationMixin} from 'lightning/navigation'


export default class MyResumeContainer extends NavigationMixin(LightningElement) {
    USER_DETAILS = RESUME_DATA.USER_DETAILS;
    PROFILE_IMAGE = RESUME_DATA.PROFILE_IMAGE;
    
    footerImage=FOOTERMAP;
    badgeAdmin = BADGES +'/myResource/images/admin.png';
    badgePd1 = BADGES +'/myResource/images/pd1.png';
    badgeAppBuilder = BADGES +'/myResource/images/appBuilder.png';
    badgeJavascript1 = BADGES +'/myResource/images/javascript1.png';
    badgeSalesCloud = BADGES +'/myResource/images/salesCloud.png';
    gitHubLogo = BADGES +'/myResource/images/githubLogo.png';
    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Account has been created successfully !",
            message: "Account Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    handleMenuClick(event) {
        let value = event.target.dataset.id;
        let containerChoosen = this.template.querySelector('.container_' + value);
        containerChoosen.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    get backgroundStyle() {
        return `background-repeat:no-repeat;
        background-size:cover;
        background-image:url(${this.footerImage})`;
    }
}