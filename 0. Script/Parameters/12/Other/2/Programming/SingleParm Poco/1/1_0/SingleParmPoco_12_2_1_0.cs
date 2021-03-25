using BaseDI.Professional.Script.Programming.Abstract_1;
using System;
using System.Collections.Generic;

namespace BaseDI.Professional.Script.Programming.Poco_1
{
    public class SingleParmPoco_12_2_1_0
    {
        public SingleParmPoco_12_2_1_0()
        {

        }
        public string GenericID { get; set; }

        public string ChapterName { get; set; }

        public string EntryPointName { get; set; }

        public string PageName { get; set; }

        public Dictionary<string, dynamic> Parameters { get; set; }

        public string RequestNameToProcess { get; set; }

        public string RequestNameToProcessParameters { get; set; }

        public dynamic StorylineDetails { get; set; }
    }
}
