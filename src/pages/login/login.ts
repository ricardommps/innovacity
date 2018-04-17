import {Component} from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import {IonicPage, NavController, NavParams, MenuController, AlertController, Events, ToastController } from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  params: any = {};
  user: any = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController,
              public auth: AuthService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public events: Events) {
    this.params.data = {
      "usuario": "Login",
      "senha": "Senha",
      "register": "Register",
      "login": "Acessar",
      "skip": "Skip",
      "logo": "assets/images/logo/logo-simplificado-rgb.png"
    };

    this.params.events = {
      onLogin: function (params) {
        auth.login(params).then((user) => {
          if (user.json().success) {
            if (user.json().data.length == 0) {
              loginError('Usuário ou senha inválidos.')
            } else {
              if (user.json().data[0].atualizar_senha) {
                presentPrompt(user.json().data[0].usuario);
              } else {
                loginSucess(user.json().data[0]);
              }
            }
          }
        }).catch((err) => {
            loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.')
        });

      },
      onNewPassword: function () {
        StatusBar.styleDefault();
        alertNewPassword();
      },
    };

    function alertNewPassword(){
      let alert = alertCtrl.create({
        title: 'Solicitar uma nova senha de acesso',
        cssClass: 'alert',
        inputs: [
          {
            name: 'userInfo',
            placeholder: 'Usuario ou E-mail',
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
            }
          },
          {
            text: 'Salvar',
            handler: data => {
              if (data.userInfo.length > 0) {
                let userInfo = {
                  "userInfo":data.userInfo
                }
                auth.newPassword(userInfo).then((resulte) => {
                  if (resulte.json().success) {
                    Splashscreen.hide();
                    confirmeSendEmail(resulte.json().data)
                  }else{
                    Splashscreen.hide();
                    loginError(resulte.json().data);
                    return false
                  }
                }).catch((err) => {
                  loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.')
                  return false
                });
              } else {
                presentToastAlert("É obrigatório o preenchimento do usuário ou do e-mail ")
                return false
              }

            }
          }
        ]
      });
      alert.present();
    }


    function presentToastAlert(msg) {
      let toast = toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'middle'
      });

      toast.onDidDismiss(() => {

      });

      toast.present();
    }

    function confirmeSendEmail(msg){
      let alert = alertCtrl.create({
        title: 'Secesso!',
        subTitle: msg,
        buttons: ['Ok']
      });
      alert.present();

    }

    function presentPrompt(usuario){
      let alert = alertCtrl.create({
        title: 'Nova senha',
        inputs: [
          {
            name: 'senhaAntiga',
            placeholder: 'Senha atual',
            type: 'password'
          },
          {
            name: 'novaSenha',
            placeholder: 'Nova Senha',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {

            }
          },
          {
            text: 'Salvar',
            handler: data => {
              if (true) {
                var user = {
                  "usuario":usuario,
                  "senhaAntiga":data.senhaAntiga,
                  "novaSenha":data.novaSenha
                }
                auth.updatePassword(user).then((user) => {
                  if (user.json().success) {
                    loginSucess(user.json().data[0]);
                  }else{
                    loginError(user.json().data);
                    return false
                  }
                }).catch((err) => {
                  loginError('Ocorreu um erro ao processar o seu pedido. Por favor tente novamente.')
                  return false
                });
              } else {
                // invalid login
              }
            }
          }
        ]
      });
      alert.present();
    }

    function loginSucess(user){

      var profile = {
        "id":user.id,
        "nome": user.nome,
        "usuario": user.usuario,
        "email": user.email,
        "tipo_usuario": user.tipo_usuario_nome
      }

      auth.setStorageVariable("id_token", user.token)
      auth.setStorageVariable("profile", profile)
      events.publish("shareObject", profile);
      navCtrl.setRoot("DashboardPage");
    }

    function loginError(err){
      let alert = alertCtrl.create({
        title: 'Atenção!',
        subTitle: err,
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  ionViewDidEnter() {
    this.menu.enable(false, 'side-menu');
  }

  ionViewWillLeave() {
    this.menu.enable(true, 'side-menu');
  }

}
