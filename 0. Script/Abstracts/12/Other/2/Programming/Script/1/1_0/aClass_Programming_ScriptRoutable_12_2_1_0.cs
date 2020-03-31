﻿using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1
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

        public Dictionary<string, object> Client { get; set; }
    }
}