import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: any; 
  userDetails: any;

  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Extract user ID from route params

      // Fetch user details based on the ID
      this.dashboardService.getUserDetails(this.userId).subscribe(
        user => {
          this.userDetails = user;
        },
        err => {
          console.error('Error fetching user details:', err);
        }
      );
    });
  }


  updateImage(): void {
    if (this.userId && this.userDetails) {
      this.dashboardService.updateUserImage(this.userId, this.userDetails).subscribe(
        updatedUser => {
          // Assuming the update is successful, you can update the userDetails object
          this.userDetails = updatedUser;
          alert("image updated")
          console.log('Image updated successfully:', updatedUser);
        },
        err => {
          console.error('Error updating image:', err);
        }
      );
    }
  }

}
