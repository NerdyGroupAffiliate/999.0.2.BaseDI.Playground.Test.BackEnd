using BaseDI.Professional.Script.Programming.Abstract_1;
using System;
using System.Collections.Generic;

namespace BaseDI.Professional.Script.Programming.Poco_1
{
    public class ExtraData_12_2_1_0
    {
        public ExtraData_12_2_1_0()
        {
            KeyValuePairs = new Dictionary<string, dynamic>();

            Mistake = new Exception();
        }

        public Exception Mistake { get; set; }

        public aClass_Programming_ScriptMasterLeader_12_2_1_0 MasterLeader { get; set; }

        public Dictionary<string, object> KeyValuePairs { get; set; }
    }
}
