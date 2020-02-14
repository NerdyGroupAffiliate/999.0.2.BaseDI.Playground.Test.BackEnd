using BaseDI.Playground.Test.Backend.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1
{

    public abstract class aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 : aClass_Programming_ScriptRoutable_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0()
        {
            //SET WHAT is needed to create the storyline.
            StorylineDetails = new JObject();

            HandleChapterDefaults();
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        private void HandleChapterDefaults()
        {
            #region 1. Assign

            #endregion

            #region 2. Action


            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 4. Action

        public abstract override Task<JObject> Action();

        #endregion
    }

    #region 5. Action Script

    //A. Story in motion (DO SOMETHING) SCRIPT

    #endregion

    #region 6. Action Implementation

    //A.Commence Storyline(ACT WHAT HAS HAPPENED)

    #endregion
}
