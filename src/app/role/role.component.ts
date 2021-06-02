import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/libs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {

  rolesData;
  subs1 : Subscription;
  subs2 : Subscription;
  private subs = new SubSink();

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  ngOnDestroy() {
    this.subs1.unsubscribe();
    this.subs.unsubscribe();

  }

  getRoles(){
    this.subs1 = this.roleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
    });

    this.subs.add(
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      }))
    this.subs.add(
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      }),
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      })
    );
    }




  addNewRole(roleForm: NgForm) {
    this.subs.add(
      this.roleService.addRole(roleForm.value).subscribe(
        data => {
          this.getRoles();
        },
        error => {
          alert("something went wrong!");
        }
      )
    );
    
    
    
    
    this.subs1.add(
      this.roleService.addRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong!");
      }
    ));
  }

  editRole(roleForm: NgForm) {
    this.roleService.addRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong!");
      }
    );
  }

  deleteRole(roleForm: NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong!");
      }
    );
  }

}
