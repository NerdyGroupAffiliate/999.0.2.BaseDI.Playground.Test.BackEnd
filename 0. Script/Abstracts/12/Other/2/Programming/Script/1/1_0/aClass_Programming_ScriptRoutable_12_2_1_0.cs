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
    public abstract class aClass_Programming_ScriptRoutable_12_2_1_0 
    {
        public abstract Task<JObject> Action();

        public Func<Object, Object> CallBack { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> Repository { get; set; }

        public JObject StorylineDetails { get; set; }

        public JObject StorylineDetails_Parameters { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        public aClass_Programming_ScriptRoutable_12_2_1_0 EntryPoint { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterLeader { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterController { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterTransporter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterConverter { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterStorer { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterDisturber { get; set; }

        public aClass_Programming_ScriptAction_12_2_1_0<JObject> MasterSensor { get; set; }

        public Dictionary<string, object> Client { get; set; }

        public string RequestID { get; set; }
}
}
