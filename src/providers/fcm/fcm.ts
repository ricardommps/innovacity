/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

//declare var FCMPlugin;

@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) {}

  async getToken() {
    console.log("-----getToken");
    let token;

   // this.platform.is('android') ? this.initializeFirebaseAndroid() : this.initializeFirebaseIOS();

    /!*if (this.platform.is('android')) {

      token = await this.firebaseNative.getToken()
      console.log("-----android");
      console.log(">>>TOKEN",token)
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      const perm = await this.firebaseNative.grantPermission();
    }

    // Is not cordova == web PWA
    if (!this.platform.is('cordova')) {
      console.log("-----cordova");
      // TODO add PWA support with angularfire2
    }*!/

    return this.saveTokenToFirestore(token)
  }

  private initializeFirebaseAndroid(): void {
    console.log("----initializeFirebaseAndroid")

   /!* FCMPlugin.getToken(
      (token) => {
        console.log(`This Android device's token is ${token}`);
      },
      (err) => {
        console.error(err);
      }
    );
    this.firebaseNative.onTokenRefresh().subscribe((token: string) => {
      // save device token
      this.saveTokenToFirestore(token);
    }, e => {
      console.error(e);
    });*!/
  }

  private initializeFirebaseIOS(): Promise<any> {
    return this.firebaseNative.grantPermission()
      .catch((e) => {
        console.error(e);
      })
      .then(() => {
        this.firebaseNative.getToken()
          .catch((e) => {
            console.error(e);
          })
          .then(token => {
            console.log(`This iOS device's token is ${token}`);
          });

        this.firebaseNative.onTokenRefresh().subscribe((token: string) => {
          // save device token
          this.saveTokenToFirestore(token);
        }, e => {
          console.error(e);
        });
      });
  }


  private saveTokenToFirestore(token) {
    if (!token) return;
    console.log(">>>>",token)
    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'testUser',
    }

    return devicesRef.doc(token).set(docData)
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}
*/
