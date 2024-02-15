import { Component } from '@angular/core';

@Component({
  selector: 'app-radial-chart-widget',
  templateUrl: './radial-chart-widget.component.html',
  styleUrls: ['./radial-chart-widget.component.css']
})
export class RadialChartWidgetComponent {
  data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');


        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [200, 100, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options = {
            innerWidth:'30%',
            outerWidth:'50%',
            cutout: '90%',
            subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            },
            layout:{
                padding : '0'
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }
}
