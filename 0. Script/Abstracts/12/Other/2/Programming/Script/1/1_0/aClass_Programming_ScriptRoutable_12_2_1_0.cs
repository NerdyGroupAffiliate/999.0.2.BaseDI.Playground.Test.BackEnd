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

        public IContract_Programming_Repository_12_2_1_0 Repository { get; set; }

        public JObject StorylineDetails { get; set; }

        public JObject StorylineDetails_Parameters { get; set; }

        public ExtraData_12_2_1_0 ExtraData { get; set; }

        public aClass_Programming_ScriptRoutable_12_2_1_0 EntryPoint { get; set; }

        public object MasterLeader { get; set; }

        public object MasterController{ get; set; }

        public object MasterTransporter { get; set; }

        public object MasterConverter { get; set; }

        public object MasterStorer { get; set; }

        public object MasterDisturber { get; set; }

        public object MasterSensor { get; set; }

        public Dictionary<string, object> Client { get; set; }
    }
}
