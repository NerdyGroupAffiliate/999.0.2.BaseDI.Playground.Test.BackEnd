using BaseDI.Playground.Test.Backend.Director.Risk_Management_1;
using BaseDI.Playground.Test.Backend.Director.Risk_Management_2;
using BaseDI.Playground.Test.Backend.Script.Programming.Enumeration_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;

namespace BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1
{
    public abstract class aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration     
        public delegate void TriggerAutoBackUpHandler(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData);
        public delegate void TriggerMistakeHandler(JObject storylineDetails, JObject storylineDetails_Parameters, Exception storyLineMistake, ExtraData_12_2_1_0 extraData);

        public TriggerAutoBackUpHandler TriggerAutoBackUp;
        public TriggerMistakeHandler TriggerMistake;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public aClass_Programming_ScriptMasterLeader_12_2_1_0()
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.

            #endregion

            #region 2. Action

            HandleStoryDefaults();

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        private void HandleStoryDefaults()
        {
            TriggerAutoBackUp = Inherited_Create_Experience_Movement_TriggerAutoBackUp;
            TriggerMistake = Inherited_Create_Experience_Movement_TriggerMistake;
        }

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)        
        private void Inherited_Create_Experience_Movement_TriggerAutoBackUp(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            Inherited_Create_Experience_Movement_TriggerMasterController(this, Enumeration_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.RunMistake, storylineDetails, storylineDetails_Parameters, null, extraData);
        }

        private void Inherited_Create_Experience_Movement_TriggerMistake(JObject storylineDetails, JObject storylineDetails_Parameters, Exception storylineMistake, ExtraData_12_2_1_0 extraData)
        {
            Inherited_Create_Experience_Movement_TriggerMasterController(this, Enumeration_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.RunMistake, storylineDetails, storylineDetails_Parameters, storylineMistake, extraData);
        }

        public JObject Inherited_Create_Experience_Movement_TriggerMasterController(aClass_Programming_ScriptMasterLeader_12_2_1_0 masterLeaderReference, Enumeration_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 leaderJobType, JObject storylineDetails, JObject storylineDetails_Parameters, Exception exceptionData = null, ExtraData_12_2_1_0 extraData = null)
        {
            //Instruction 1: 
            //  A. IF something is reported to the controller that a mistake has happened. THEN handle it.

            //Instruction 2: 
            //  A. Run automatic backups.

            //Instruction 3: 
            //  A. Return back director or experience to call it's "Action" method.

            //JObject armTemplateJSONOutput = null;

            //if (extraData == null)
            //    extraData = new ExtraData_12_2_1_0();

            //extraData.MasterLeader = masterLeaderReference;

            //switch (leaderJobType)
            //{
            //    // Instruction 1
            //    case eEnumerations_Programming_MasterLeader_12_2_1_0.RunMistake:

            //        extraData.Mistake = exceptionData;

            //        armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0>()
            //            .SetupStoryline(storylineDetails, storylineDetails_Parameters, extraData)
            //            .Action().Result;

            //        exceptionData.Data.Add("MISTAKES", storylineDetails);

            //        break;
            //    // Instruction 2
            //    case eEnumerations_Programming_MasterLeader_12_2_1_0.RunAutoBackup:
            //        armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0>()
            //            .SetupStoryline(storylineDetails, storylineDetails_Parameters)
            //            .Action().Result;
            //        break;

            //}

            //storylineDetails = armTemplateJSONOutput;

            return null;
        }

        #endregion 
    }
}
