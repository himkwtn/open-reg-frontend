import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/api/services';
import { map, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/core/services/navbar.service';
import { FooterService } from 'src/app/core/services/footer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  isAuthenticated$ = this.authService.isAuthenticated$;
  currentUser$ = this.authService.currentUser$;
  formId$ = (this.apiService.getFormAll() as Observable<any[]>).pipe(
    map((forms: any[]) =>
      forms.find(form => {
        return form.title === 'ลอยกระทง';
      })
    ),
    pluck('_id')
  );

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private navbarService: NavbarService,
    private footerService: FooterService
  ) {
    this.navbarService.show();
    this.footerService.show();
  }

  ngOnInit() {
    this.apiService.getUserForm().subscribe();
  }

  ngOnDestroy() {}
}
