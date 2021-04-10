using BaseDI.Professional.Script.Programming_1;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptNicheMaster_12_2_1_0<StoryRequest>
    {
        public IConfiguration AppSettings { get; set; }

        public string APILocationLocalDotNetCore { get; set; }
        public string APILocationLocalDotNetCore_SSL { get; set; }

        public string APILocationLocalNodeJS { get; set; }
        public string APILocationLocalNodeJS_SSL { get; set; }

        public string APILocationRemote { get; set; }

        public Func<Object, Object> CallBack { get; set; }

        public abstract StoryRequest Action(Dictionary<string, object> client, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, StoryRequest requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "");
    }
}
