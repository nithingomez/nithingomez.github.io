import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  title = 'angular-poc';
  filetype;
  pdfPageCount;
  videoLength;
  videoUrl;
  videoSizeError;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }


  transform(event) {
    var file = event.target.files[0];
    var fileReader: any = new FileReader();
    this.filetype = file.type;
    if (file.type.match('pdf')) {
      fileReader.readAsBinaryString(event.target.files[0]);
      fileReader.onloadend = () => {
        this.pdfPageCount = fileReader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
      }
    }
    if (file.type.match('video')) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  };


  getDuration(e) {
    const duration = e.target.duration;
    this.videoLength = duration;
  }



}
