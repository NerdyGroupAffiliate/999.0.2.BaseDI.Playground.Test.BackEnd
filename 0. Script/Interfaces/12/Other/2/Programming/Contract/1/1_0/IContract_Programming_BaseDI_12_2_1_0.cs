using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Script.Programming_1
{
    public interface IContract_Programming_Storyline_12_2_1_0<T>
    {
        T SetupStoryline(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData, string requestName);
    }
}
