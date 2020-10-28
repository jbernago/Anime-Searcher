import { DbService, User } from './../../core/api/db.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { MessageService } from 'primeng/api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  providers: [MessageService]
})
export class UserRegisterComponent implements OnInit {
  
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', Validators.required),
  });

  birthDate: Date;
  es: any;
  maxDate: any;

  actualDate = new Date();


  formSended = false;

  constructor(private messageService:MessageService, private dbService: DbService) { }

  ngOnInit(): void {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }

    this.maxDate = this.actualDate;

  }

  nameError = '';
  emailError = '';
  birthDateError = '';


  onSubmit(){
    // console.log(this.user);
    // console.log(this.user.controls['name'].value);
    console.log(this.user.get('birthDate'));
    console.log(this.user.value);
    // this.formatDate(this.user.get('birthDate').value);
    this.dbService.insertUser(this.user.value).subscribe(() =>{
      this.messageService.add({severity:'success', summary:'Usuario registrado', detail:'Podrá visualizarlo en Lista Usuarios'});
    });
    this.user.reset();
  }

  // formatDate(date){
  //   let day = date.getDate();
  //   if(day<10){
  //     day = '0' + day;
  //   }
  //   let month = date.getMonth() + 1;
  //   if(month<10){
  //     month = '0' + month;
  //   }
  //   let year = date.getFullYear();
  //   let formatDate = `${day}/${month}/${year}`;
  //   this.user.get('birthDate').setValue(formatDate);
  // }

  reset(){
    this.formSended = true;
  }

}
