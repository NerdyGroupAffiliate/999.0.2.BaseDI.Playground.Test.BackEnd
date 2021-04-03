using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration       

        public Func<Object, Object> CallBack { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> Repository { get; set; }

        public JObject StorylineDetails { get; set; }

        public JObject StorylineDetails_Parameters { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        public aClass_Programming_ScriptRoutable_12_2_1_0 DirectorOrExperienceRequestHandler { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterLeader { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterController { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterTransporter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterConverter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterStorer { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterDisturber { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterSensor { get; set; }

        public Dictionary<string, object> ClientOrServerInstance  { get; set; }

        public string RequestID { get; set; }

    #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptPage_12_2_1_0()
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public abstract Task<JObject> Action();
        
        #endregion
    }
}
