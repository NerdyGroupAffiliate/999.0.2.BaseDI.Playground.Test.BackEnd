//const facebook = require('fb');
//const googleapis = require('googleapis');
// const Instagram = require('instagram-web-api');

import { IgApiClient, IgCheckpointError } from "instagram-private-api";

import { get } from "request-promise";

import Bluebird = require("bluebird");

import inquirer = require("inquirer");

const fs = require("fs");

export namespace BaseDI.BackEnd.Advertising.Extensions_1 {
    export class Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0 {
        constructor() { }

        //#region CREATE

        //#region Instagram

        public static Step_1_0_Custom_Transport_ContentToInstagram_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE THE MEMORIES
            console.log("instagram task started!");

            const accout = {
                username: "basedi.instagram.generatebrandawareness.1@basedi.io",
                password: "TestTech99!@",
            };
            // const accout ={ username: "kishorgujar95@gmail.com", password: "iCAuP7RXeyUPV9p" }
            const ig = new IgApiClient();

            ig.state.generateDevice(accout.username);
            ig.state.proxyUrl = "";
            (async () => {
                try {
                    const imageBuffer = await get({
                        url: "https://picsum.photos/800/800",
                        encoding: null,
                    });
                    ig.state.checkpoint = JSON.parse(
                        fs.readFileSync(`./${accout.username}.json`)
                    );

                    ig.account
                        .login(accout.username, accout.password)
                        .then(async (auth) => {
                            console.log(auth);

                            const publishResult = await ig.publish.photo({
                                file: imageBuffer,
                                caption: "Really nice photo from the internet! 💖",
                            });
                            return publishResult;
                        })
                        .catch(async (err) => {
                            console.log("Login Error: ", ig.state.checkpoint);

                            await ig.challenge.auto(true);

                            const { code } = await inquirer.prompt([
                                {
                                    type: "input",
                                    name: "code",
                                    message: "Enter code",
                                },
                            ]);
                            await ig.challenge.sendSecurityCode(code).then(async () => {
                                const publishResult = await ig.publish.photo({
                                    file: imageBuffer,
                                    caption: "Really nice photo from the internet! 💖",
                                });
                                return publishResult;
                                
                            }).catch(() => {
                                return ig.state.checkpoint;
                            });
                        });
                } catch (e) { }
            })();

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#region Facebook

        public static Step_1_0_Custom_Transport_ContentToFacebook_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE THE MEMORIES
            //#endregion
            //#region RECALL THE MEMORIES
            //#endregion
            //#region EXECUTE THE VISION
            //#endregion
            //#region REPORT THE FEEDBACK
            //#endregion
        }

        //#endregion

        //#region YouTube

        public static Step_1_0_Custom_Transport_ContentToYouTube_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE THE MEMORIES
            //#endregion
            //#region RECALL THE MEMORIES
            //#endregion
            //#region EXECUTE THE VISION
            //#endregion
            //#region REPORT THE FEEDBACK
            //#endregion
        }

        //#endregion

        //#region LinkedIn

        public static Step_1_0_Custom_Transport_ContentToLinkedIn_1_0(
            contentMetaData: any
        ): any {
            //#region DESCRIBE THE MEMORIES
            //#endregion
            //#region RECALL THE MEMORIES
            //#endregion
            //#region EXECUTE THE VISION
            //#endregion
            //#region REPORT THE FEEDBACK
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
