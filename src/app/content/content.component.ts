import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public user: {
    // tslint:disable-next-line: ban-types
    usuario: String,
    // tslint:disable-next-line: ban-types
    password: String
  };


  constructor(public router: Router) {
    this.user = {usuario: '', password: ''};
  }

   public mdlSampleIsOpen = false;

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  login(open: boolean){

    if (this.user.usuario === 'admin' && this.user.password === 'admin'){
      this.router.navigate(['/users']);
    }else if (this.user.usuario === 'elucas' && this.user.password === '753159'){
      this.router.navigate(['/nuLibros']);
    }else {
      console.log('Deberia salir el modal');
      this.mdlSampleIsOpen = open;
    }
  }

}
