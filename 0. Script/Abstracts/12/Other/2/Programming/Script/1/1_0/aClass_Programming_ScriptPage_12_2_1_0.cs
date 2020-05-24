using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration       

        public aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> Repository { get; set; }

        public JObject StorylineDetails { get; set; }

        public JObject StorylineDetails_Parameters { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        public aClass_Programming_ScriptRoutable_12_2_1_0 EntryPoint { get; set; }

        public object MasterLeader { get; set; }

        public object MasterController { get; set; }

        public object MasterTransporter { get; set; }

        public object MasterConverter { get; set; }

        public object MasterStorer { get; set; }

        public object MasterDisturber { get; set; }

        public object MasterSensor { get; set; }

        public Dictionary<string, object> Client  { get; set; }

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
