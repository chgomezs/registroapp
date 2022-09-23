import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getName } from 'ionicons/dist/types/components/icon/utils';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string;
  password: string;
  mensaje: string;
  mensaje2: string;
  constructor() { }

  ngOnInit() {
  }
//   grabar(nom: HTMLInputElement, pass:HTMLInputElement)
//   {
//     if(nom.value == "")
//    {
//       this.mensaje = "Ingrese el nombre de usuario";
// }
//     if(pass.value==""){
//       this.mensaje2="Ingrese la contraseña";
// }
//   }

}