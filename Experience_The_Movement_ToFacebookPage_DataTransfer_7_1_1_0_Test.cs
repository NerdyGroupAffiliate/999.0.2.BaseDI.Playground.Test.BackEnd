using BaseDI.Playground.Test.BackEnd.Script.Social_Media.Extensions_1;
using BaseDI.Playground.Test.Backend.Director.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Story.Programming_1;
using Newtonsoft.Json.Linq;
using NUnit.Framework;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Reflection;
using System.Text;

namespace BaseDI.Playground.Test.BackEnd
{
    public class Experience_The_Movement_ToFacebookPage_DataTransfer_7_1_1_0_Test
    {
        #region 1. Assign

        //A. Variable Declaration
        private string _baseDIArmTemplateSchema = "";
        private string _baseDIArmTemplateSchemaEmbeddedResource = "BaseDI.Playground.Test.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.json";
        private string _baseDIArmTemplateSchemaParameters = "";
        private string _baseDIArmTemplateSchemaParametersEmbeddedResource = "BaseDI.Playground.Test.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0-P.json";

        private Dictionary<string, object> _clientInfo = new Dictionary<string, object>();

        private object _presentation;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        public Func<JObject, JObject> Update_Client = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Experience_The_Movement_ToFacebookPage_DataTransfer_7_1_1_0_Test()
        {
            #region 1. Assign

            //SET WHAT is needed to create the storyline.
            _presentation = null;

            _storylineDetails = new JObject();
            _storylineDetails_Parameters = new JObject();

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        [SetUp]
        public void Setup()
        {
            #region 1. Assign

            //SETUP CLIENT INFO
            _clientInfo.Add("presentation_experience", _presentation);
            _clientInfo.Add("presentation_director", this);
  
            #endregion

            #region 2. Action

            //READ OPTIONS TEMPLATE
            using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaEmbeddedResource))
            {
                using (StreamReader reader = new StreamReader(resourceStream))
                {
                    //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
                    _baseDIArmTemplateSchema = reader.ReadToEnd();
                }
            }

            //READ USER OPTIONS
            using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaParametersEmbeddedResource))
            {
                using (StreamReader reader = new StreamReader(resourceStream))
                {
                    //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
                    _baseDIArmTemplateSchemaParameters = reader.ReadToEnd();
                }
            }

            #endregion

            #region 3. Observe

            if (!string.IsNullOrEmpty(_baseDIArmTemplateSchema))
            {
                _storylineDetails = JObject.Parse(_baseDIArmTemplateSchema);
            }

            if (!string.IsNullOrEmpty(_baseDIArmTemplateSchemaParameters))
            {
                _storylineDetails_Parameters = JObject.Parse(_baseDIArmTemplateSchemaParameters);
            }

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)

        [Test]
        public void Did_Experience_The_Movement_ToFacebookPage_DataTransfer_7_1_1_0_Work()
        {
            #region 1. Assign          


            JObject armTemplateJSONOutput = null;

            JToken outputs = null;
            List<JToken> outputObservations = null;
            StringBuilder outputObservationsPrintOut = new StringBuilder();

            #endregion

            #region 2. Action

            try
            {
                #region TEST OUR LOGIC

                #region PROCESS LOGIC UPDATES

                Update_Client = (JObject storylineDetails) =>
                {
                    armTemplateJSONOutput = storylineDetails;

                    return armTemplateJSONOutput;
                };

                #endregion

                armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0>()
                    .SetupStoryline(_clientInfo, _storylineDetails, _storylineDetails_Parameters)
                    .Action().Result;

                outputs = armTemplateJSONOutput["outputs"];

                Assert.Pass(outputs.ToString());

                #endregion
            }
            catch (SuccessException storySuccess)
            {
                #region PRINT OUT SUCCESS

                Console.Write(storySuccess.Message.ToString(CultureInfo.CurrentCulture));

                #endregion
            }
            catch
            {
                #region PRINT OUT MISTAKES

                armTemplateJSONOutput = _storylineDetails;

                outputs = armTemplateJSONOutput.SelectToken("outputs..baseDIMistakes");

                foreach (var programmingMistake in outputs.Children())
                {
                    var mistake = programmingMistake.Value<string>("mistake");

                    outputObservationsPrintOut.Append(mistake + System.Environment.NewLine);
                }

                Console.Write(outputObservationsPrintOut.ToString());

                #endregion
            }

            #endregion

            #region 3. Observe

            //outputObservations = outputs.Step_X_X_Read_And_FindJSONNode("baseDiObservations");            
     
            #endregion
        }

        #endregion
    }
}
