import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PrincipalPage } from '../principal/principal';
import { ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  tabBarElement: any;
  model: any = {};
  nombre: string;
  contrasena: string;
  loading: any;
  resultado: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private toastCtrl:ToastController, public auth: AuthSevice, public http:Http) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sessión...'
  });
  }
 
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  crearCuenta(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    this.loading.present();
    //console.log(this.nombre);
    //console.log(this.contrasena);
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INgetuser/' + this.nombre +"/"+ this.contrasena).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      //console.log(this.resultado);
      if(data.items.length >= 1){
        //this.presentToast("Acceso correcto.");
        this.auth.idUsuario = this.resultado[0].id_usuarios;
        this.auth.NombreUsuario = this.resultado[0].nombres;
        //console.log( this.auth.idUsuario);
        this.loading.dismiss();
        this.navCtrl.push(PrincipalPage);
      }
      else{
        this.loading.dismiss();
        this.presentToast("Usuario y/o contraseña incorrectos."); 
      }
    });
  }
  

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: ''+message ,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}


