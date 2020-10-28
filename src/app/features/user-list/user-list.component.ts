import { DbService } from '../../core/api/db.service';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [MessageService]
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(public dbService:DbService, public confirmationService:ConfirmationService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.dbService.getUsers().subscribe((res) =>{
      this.users = res;
      console.log(this.users);
    });
  }

  confirmDelete(user) {
    this.confirmationService.confirm({
        message: '¿Está segur@ de querer eliminar este usuario?',
        header: 'Eliminar Usuario',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmado', detail:'Ha eliminado el usuario'});
            this.dbService.deleteUser(user).subscribe(() =>{
              this.loadUsers();
            });
        }
    });
  }

  mostrar(user){
    console.log(user);
  }





}
