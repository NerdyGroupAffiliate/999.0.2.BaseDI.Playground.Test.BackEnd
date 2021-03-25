const objectScan = require('object-scan');

export namespace BaseDI.Professional.Web_Development.Extensions_1 {
    export class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 {
        constructor() {

        }

        //#region CREATE
        public static Step_X_X_Create_A_HTMLHomePageTemplate_1_0(metaData:string, title:string, scripts:string, styles:string, body:string): string
        {
            let htmlHomePageTemplate = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        {metaDataReplace}
                        <title>{titleReplace}</title>  
                        {scriptsReplace}
                        {stylesReplace}
                    </head>
                    <body>
                        {bodyReplace}
                    </body>
                </html>`  

            htmlHomePageTemplate = htmlHomePageTemplate.replace("{metaDataReplace}", metaData);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{titleReplace}", title);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{scriptsReplace}", scripts);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{stylesReplace}", styles);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{bodyReplace}", body);

            return htmlHomePageTemplate;
        }        
        //#endregion

        //#region READ

        //#endregion

        //#region UPDATE
        //#endregion

        //#region DELETE
        //#endregion
    }
}