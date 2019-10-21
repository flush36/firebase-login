import { StartPage } from './../start/start';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public storage: Storage
     ) {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submitLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email,
      this.loginForm.value.password)
      .then((response)=> {
        this.storage.set('user', response.user.uid)
        .then(()=> {
          this.navCtrl.setRoot(StartPage);
        })
      }).catch((error)=> {
        if(error.code == 'auth/wrong-password') {
            this.presentAlert('Erro', 'Senha incorreta digite novamente.');
            this.loginForm.controls['password'].setValue(null);
        }
      })
  }

  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
