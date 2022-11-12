import { LightningElement } from 'lwc';

import { loadScript } from 'lightning/platformResourceLoader';
import chartjs from '@salesforce/resourceUrl/chartJS';

const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
};
export default class MySkillsComponent extends LightningElement {
    error;
    chart;
    chartjsInitialized = false;

    config = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [
                        8,
                        9,
                        8,
                        9,
                        8
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'
                    ],
                    label: 'Dataset 1'
                }
            ],
            labels: ['Apex', 'Declarative tools', 'Aura', 'LWC', 'Integration']
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'black',
                        fontSize:14
                    }
                }
            },
            animation: {
                duration:1,
                animateScale: true,
                animateRotate: true,
                
            }
        }
    };

    renderedCallback() {

        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;

        loadScript(this, chartjs)
            .then(() => {
                const canvas = document.createElement('canvas');
                this.template.querySelector('div.chart').appendChild(canvas);
                const ctx = canvas.getContext('2d');
                this.chart = new window.Chart(ctx, this.config);
            })
            .catch((error) => {
                this.error = error;
            });
    }
}