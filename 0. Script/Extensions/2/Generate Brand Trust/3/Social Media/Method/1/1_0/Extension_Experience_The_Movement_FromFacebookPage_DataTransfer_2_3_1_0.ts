const objectScan = require('object-scan');

var _ = require('lodash');
var $ = require("jquery");

var axios = require("axios");

declare var window;

export namespace BaseDI.BackEnd.Social_Media.Extensions_1
{
    export class Extension_Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0
    {              
        constructor()
        {
            this.ApplyExtensions = this.ApplyExtensions.bind(this);

            //this.Step_2_0_Access_The_Experience_1_0 = this.Step_2_0_Access_The_Experience_1_0.bind(this);
        }

        public ApplyExtensions()
        {

        }

        public static Step_1_0_Setup_The_Experience_1_0()
        {
            //#region ADD FACEBOOK HANDLERS
            window.fbAsyncInit = function () {
                FB.init({
                    appId: '943493412710623',
                    version: 'v5.0',
                    xfbml: true
                });

                FB.AppEvents.logPageView();
            }
            //#endregion 

            //#region IMPORT FACEBOOK SDK
            const facebookSDK: any = (d: any, s: any, id: any) => {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }

            facebookSDK(document, 'script', 'facebook-jssdk');
            //#endregion 
        }

        public static Step_2_0_LogInto_The_Experience_1_0(): Promise<Object>
        {          
            //#region CREATE AUTHENTICATION PROCEDURE
            const Step_2_1_Request_The_SecurityToken_1_0 : Promise<Object> = new Promise(function (resolve, reject)
            {
                FB.login(function (response) {
                    if (response.authResponse) {
                        console.log('Welcome!  Fetching your information.... ' + console.log(JSON.stringify(response.authResponse)));

                        FB.api('/me', function (response) {
                            console.log('Good to see you, ' + console.log(JSON.stringify(response)) + '.');
                        });

                        axios.post('/api/Account', {
                            UserId: response.authResponse.userID,
                            Provider: 'Facebook',
                            AccessToken: response.authResponse.accessToken
                        })
                        .then(function (response) {
                            return resolve(response);
                        })
                        .catch(function (error) {
                            return reject(error);
                        });
                    }
                    else
                    {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            });        
            //#endregion 

            //#region REQUEST AUTHENTICATION TOKEN
            return Step_2_1_Request_The_SecurityToken_1_0;
            //#endregion 
        }
    }
}
