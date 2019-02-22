import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.css']
})
export class HtmlViewerComponent implements OnInit {

  html : String = "";
  
  constructor() { }

  ngOnInit() {
  }

}
