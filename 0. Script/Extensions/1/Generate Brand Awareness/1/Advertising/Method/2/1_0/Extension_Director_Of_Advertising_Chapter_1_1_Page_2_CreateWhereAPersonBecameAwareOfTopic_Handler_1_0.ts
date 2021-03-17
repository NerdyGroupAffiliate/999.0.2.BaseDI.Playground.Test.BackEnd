//const facebook = require('fb');
//const googleapis = require('googleapis');
// const Instagram = require('instagram-web-api');

if (process.env.APP_ENV == "SERVER") {
    var { IgApiClient, IgCheckpointError } = require("instagram-private-api");
    var { get } = require("request-promise");
    var { inquirer } = require("inquirer");
    var fs = require("fs");
}

export namespace BaseDI.Advertising.Extensions_2 {
    export class Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0 {
        constructor() { }

        //#region CREATE

        //#region Instagram

        public static async Step_1_0_Custom_Transport_ContentToInstagram_1_0(
            contentMetaData: any
        ) {

            if (process.env.APP_ENV == "SERVER") {
                return new Promise(async (resolve, reject) => {
                    console.log("instagram task started!");

                    //const account = {
                    //    username: "basedi.instagram.generatebrandawareness.1@basedi.io",
                    //    password: "TestTech99!@",
                    //};

                    const account = {
                        username: "thephantom1979@gmail.com",
                        password: "RichTech99!@",
                    };

                    // const account ={ username: "kishorgujar95@gmail.com", password: "iCAuP7RXeyUPV9p" }
                    const ig = new IgApiClient();

                    ig.state.generateDevice(account.username);
                    ig.state.proxyUrl = "";

                    const imageBuffer = await get({
                        url: "https://picsum.photos/800/800",
                        encoding: null,
                    });
                    ig.account
                        .login(account.username, account.password)
                        .then(async (auth) => {
                            const publishResult = await ig.publish.photo({
                                file: imageBuffer,
                                caption: "Really nice photo from the internet! 💖",
                            });
                            resolve(publishResult);
                        })
                        .catch(async (err) => {
                            console.log("Login Error: ", ig.state.checkpoint);

                            await ig.challenge.auto(true);

                            const { code } = await inquirer.prompt([
                                {
                                    type: "input",
                                    name: "code",
                                    message: "Enter code: ",
                                },
                            ]);
                            await ig.challenge
                                .sendSecurityCode(code)
                                .then(async () => {
                                    const publishResult = await ig.publish.photo({
                                        file: imageBuffer,
                                        caption: "Really nice photo from the internet! 💖",
                                    });
                                    resolve(publishResult);
                                })
                                .catch((e) => {
                                    reject(e)
                                });
                        });
                }) 
            }

            //#region DESCRIBE the memories
           

            //#endregion

            //#region DESCRIBE the memories

            //#endregion

            //#region PROCESS the memories

            //#endregion

            //#region TELL the story

            //#endregion
        }

        //#endregion

        //#region Facebook

        public static Step_1_0_Custom_Transport_ContentToFacebook_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE the memories
            //#endregion
            //#region DESCRIBE the memories
            //#endregion
            //#region PROCESS the memories
            //#endregion
            //#region TELL the story
            //#endregion
        }

        //#endregion

        //#region YouTube

        public static Step_1_0_Custom_Transport_ContentToYouTube_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE the memories
            //#endregion
            //#region DESCRIBE the memories
            //#endregion
            //#region PROCESS the memories
            //#endregion
            //#region TELL the story
            //#endregion
        }

        //#endregion

        //#region LinkedIn

        public static Step_1_0_Custom_Transport_ContentToLinkedIn_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE the memories
            //#endregion
            //#region DESCRIBE the memories
            //#endregion
            //#region PROCESS the memories
            //#endregion
            //#region TELL the story
            //#endregion
        }

        //#endregion

        //#endregion

        //#region READ

        //#endregion

        //#region UPDATE
        //#endregion

        //#region DELETE
        //#endregion
    }
}
