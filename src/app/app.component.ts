import { Component, Renderer2 } from '@angular/core';
import { faGithub, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rubén Hernández Salinero';
  moon = faMoon
  sun = faSun
  isNightMode = false
  rrss = [{ nombre: "GitHub", icon: faGithub, link: "" },
  { nombre: "LinkedIn", icon: faLinkedin, link: "" }]

  constructor(private renderer: Renderer2) { }

  nightMode() {
    this.isNightMode = !this.isNightMode
    if (this.isNightMode) {
      this.renderer.addClass(document.body, 'night');
    } else {
      this.renderer.removeClass(document.body, 'night');
    }
  }
}


