import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  ngOnInit() {
  }

  minimizeWindow() {
    this.electron.window.minimize();
  }

  closeWindow() {
    this.electron.window.close();
  }

}
