import * as Collections from 'typescript-collections';

export namespace BaseDI.Programming.Interfaces_1
{

}

declare global {
    interface IContract_Programming_Storyline_12_2_1_0<T> {
        SetupStoryline(client: any, storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any, requestName: string, requestToProcess: string, requestToProcessParameters: string): T;
    }


    interface Parms {
    }

    interface Variable {
    }

    interface Resource {
    }

    interface Output {
        baseDIMistakes: any[];
        baseDIObservations: any[];
    }

    interface IStorylineDetails {
        $schema: string;
        contentVersion: string;
        parameters: Parms;
        variables: Variable[];
        resources: Resource[];
        outputs: Output[];
    }
}






