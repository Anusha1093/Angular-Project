import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas = document.getElementById('performanceChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx) { return; }

    new Chart(ctx, {
      type: 'bar',            
      data: {
        labels: ['HR', 'IT', 'Finance', 'Sales'],
        datasets: [
          {
            label: 'Performance',
            data: [65, 80, 55, 70],
            backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,   
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}
