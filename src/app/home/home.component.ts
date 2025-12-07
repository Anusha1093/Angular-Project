import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMobile = false;
  sidebarOpen = true; // open by default on desktop

  ngOnInit(): void {
    this.checkScreen(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    this.checkScreen(width);
  }

  private checkScreen(width: number) {
    this.isMobile = width <= 768; // breakpoint for mobile
    // On mobile start with sidebar closed; on desktop always open
    this.sidebarOpen = !this.isMobile;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
