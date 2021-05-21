using BaseDI.Professional.Script.Programming.Poco_1;
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

        public bool Finalize { get; set; }

    public Func<SingleParmPoco_12_2_1_0, dynamic> CallBack { get; set; }

        public abstract StoryRequest Action(SingleParmPoco_12_2_1_0 parameterInputs);
    }
}
