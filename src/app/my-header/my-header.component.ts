import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  private navbar;
  private sticky;

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.navbar = document.getElementById("navBar");
    this.sticky = this.navbar.offsetTop;
  }
  @HostListener("window:scroll", [])
  scrollFunction(){
    if (document.body.scrollTop>800 || document.documentElement.scrollTop > 800){
      document.getElementById("startBtn").style.display = "block";
    } else {
      document.getElementById("startBtn").style.display = "none";
    }
    this.myScrollingNav();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  
  myScrollingNav() {
    if (window.pageYOffset >= this.sticky) {
      this.navbar.classList.add("sticky");
    } else {
      this.navbar.classList.remove("sticky");
    }
  }

  

}
