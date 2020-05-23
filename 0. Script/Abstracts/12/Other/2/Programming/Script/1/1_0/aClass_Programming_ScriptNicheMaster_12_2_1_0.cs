using BaseDI.Playground.Test.Backend.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptNicheMaster_12_2_1_0<StoryRequest>
    {
        public string APILocationLocalDotNetCore { get; set; }

        public string APILocationLocalNodeJS { get; set; }

        public string APILocationRemote { get; set; }

        public abstract StoryRequest Action(Dictionary<string, object> client, object centralizedStorer, StoryRequest requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "");
    }
}
