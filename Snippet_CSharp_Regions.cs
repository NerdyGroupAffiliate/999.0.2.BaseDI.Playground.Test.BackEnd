#region Imports

#region BaseDI

using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;

using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

using ChapterPage = BaseDI.Professional.Chapter.Page.Programming_1;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

#endregion

#region .Net Core



#endregion 

#region 3rd Party Core



#endregion

#endregion

public class ClassModel
{
    #region 1. Assign

    //SETTINGS
    private IConfiguration _storedProcessRequestSettings;

    //CLIENT/SERVER
    internal Dictionary<string, object> _storedProcessRequestTracker;

    //DATASETS
    internal JObject _storedProcessRequestDataStorylineDetails;
    internal JObject _storedProcessRequestDataStorylineDetails_Parameters;

    internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _stored_Repository;

    //MISC
    internal ExtraData_12_2_1_0 _storedProcessRequestExtraData;

    //PLUMBING
    private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;
    private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
    private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

    internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

    internal string _storedRequestName = "";
    internal string _storedSystemRequestByName;

    #endregion

    #region 2. Ready

    public ClassModel()
    {
        #region 1. INPUTS

        #region MEMORIZE clientOrServer instance

        //_storedProcessRequestTracker = parameterProcessRequestTracker;

        #endregion

        #region MEMORIZE centralized processes 

        //_stored_CentralizedDisturber = parameterProcessRequestCentralizedDisturber;
        //_stored_CentralizedSensor = parameterProcessRequestCentralizedSensor;
        //_storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;

        #endregion

        #region MEMORIZE data stragety

        //_stored_Repository = parameterDataRepository;

        #endregion

        #region MEMORIZE director request handler

        //_stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

        #endregion

        #region MEMORIZE extra data

        //_storedProcessRequestExtraData = parameterExtraData;

        #endregion

        #region MEMORIZE storyline details

        //_storedProcessRequestDataStorylineDetails = parameterProcessRequestDataStorylineDetails;;
        //_storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails;_Parameters;

        #endregion

        #endregion

        #region 2. PROCESS

        #endregion

        #region 3. OUTPUT

        #endregion
    }

    #endregion

    #region 3. Set

    //A. Default state
    public void HandleDefaults()
    {
        #region 1. INPUTS

        #endregion

        #region 2. PROCESS

        #region EXECUTE process defaults

        #region IDEAL CASE - defaults handler


        #endregion

        #endregion

        #endregion

        #region 3. OUTPUT

        #endregion
    }

    #endregion

    #region 4. Action

    //A. Story in motion (DO SOMETHING)
    public async Task<JObject> Action()
    {
        #region 1. INPUTS

        #region DEFINE client response

        //ContentResult storedHttpResult = null;

        #endregion

        #region DEFINE data response

        //JObject storedDataResponse = null;

        #endregion

        #region DEFINE server details

        //dynamic storedDynamicData = null;

        #endregion

        #region DEFINE error response

        //JToken storedErrorResponse = null;

        #endregion

        #region DEFINE event handlers

        //Func<string, string, ExtraData_12_2_1_0, JObject> Action = null;

        #endregion

        #region DEFINE exception handler

        //SingleParmPoco_12_2_1_0 stored_ExceptionDetails;

        #endregion

        #region DEFINE parameter inputs

        //SingleParmPoco_12_2_1_0 storedParameterInputs = null;

        #endregion

        #region DEFINE process checkpoint

        //bool storedCheckPointHit = false;

        #endregion

        #region MEMORIZE request details

        //string storedRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
        //string storedRequestNameParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

        #endregion

        #region DEFINE request handler

        //object stored_ReferenceTo_RequestHandler = null;

        #endregion

        #region DEFINE route details

        #endregion

        #region DEFINE server details


        #endregion

        #region DEFINE server routing

        #endregion

        #region DEFINE storyline details

        //JObject storedProcessRequestDataStorylineDetails = null;
        //JObject storedProcessRequestDataStorylineDetails_Parameters = null;

        #endregion

        #region MEMORIZE action name

        //string storedActionName = parameterProcessRequestTracker["storedActionName"] as string;

        #endregion

        #region MEMORIZE app settings

        //_storedProcessRequestSettings = (IConfiguration)parameterProcessRequestTracker["storedProcessRequestSettings"];

        #endregion

        #region MEMORIZE extra data

        //if (parameterExtraData != null)
        //    _storedProcessRequestExtraData = parameterExtraData;

        #endregion

        #region MEMORIZE developer mode

        bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

        #endregion

        #region MEMORIZE server details

        //JObject storedServerDetails = null;

        #endregion

        #region MEMORIZE request details

        //string storedRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
        //string storedRequestNameParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

        #endregion

        #region MEMORIZE request resolver

        //aClass_Programming_ScriptRoutable_12_2_1_0 stored_DirectorOrExperienceRequestHandler = null;
        //Use_DesignPattern_Builder_Chapter_12_2_1_0 stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterProcessRequestTracker, parameterProcessRequestDataStorylineDetails;, parameterProcessRequestDataStorylineDetails;_Parameters, _storedClientRequestByObject, _storedProcessRequestExtraData, parameterSystemRequestByName, parameterInputRequestName, parameterInputRequestDataCacheKey);

        #endregion

        #endregion

        #region 2. PROCESS

        #region EXECUTE xxx xxx

        #region EDGE CASE - USE developer logger

        if (storedProcessRequestDeveloperMode)
        {
            _storedProcessRequestTracker["processStepNumber"] = (int)_storedProcessRequestTracker["processStepNumber"] + 1;

            Console.WriteLine("STEP " + _storedProcessRequestTracker["processStepNumber"] + " Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_10_End_Process - [END process execution]");
        }

        #endregion

        #region IDEAL CASE - USE xxx xxx


        #endregion

        #endregion

        #endregion

        #region 3. OUTPUT

        #region RETURN xxx xxxx

        #region IDEAL CASE - USE xxx xxx

        return await Task.FromResult<JObject>(new JObject()).ConfigureAwait(true);

        //return null; // await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

        #endregion

        #endregion

        #endregion
    }

    #endregion
}





//BLANK DEFAULT REEGIONS

#region 1. INPUTS


#endregion

#region 2. PROCESS

#endregion

#region 3. OUTPUT

#endregion