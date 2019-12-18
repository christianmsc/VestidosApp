import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterContentChecked {
  
  isLogado: boolean = false;
  
  constructor(private authService: AuthenticationService){ }

  ngOnInit() {
    
    
  }

  ngAfterContentChecked(){
    this.isLogado = this.authService.isAuthenticated();
  }

}
