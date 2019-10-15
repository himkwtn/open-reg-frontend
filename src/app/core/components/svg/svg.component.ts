import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent {
  @Input() name: string;
  @Input() fill: string;
  constructor() {}

  get absUrl() {
    return window.location.href;
  }
}
