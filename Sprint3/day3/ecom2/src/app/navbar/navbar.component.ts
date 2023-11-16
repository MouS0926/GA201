import { Component ,OnInit} from '@angular/core';
import { AuthState } from '../auth/auth.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../auth/auth.selectors';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  authState$!: Observable<AuthState>;

  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.authState$ = this.store.select(selectAuthState);
  }
}
