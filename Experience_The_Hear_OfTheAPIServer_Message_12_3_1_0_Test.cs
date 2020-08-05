using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Story.Programming_1;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.BackEnd
{
    public static class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_Test
    {
        public static IApplicationBuilder UseBaseDI(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test>();
        }
    }

    public class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test
    {
        #region 1. Assign

        //A. Variable Declaration
        private string _baseDIArmTemplateSchema = "";
        private string _baseDIArmTemplateSchemaEmbeddedResource = "BaseDI.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.json";
        private string _baseDIArmTemplateSchemaParameters = "";
        private string _baseDIArmTemplateSchemaParametersEmbeddedResource = "BaseDI.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0-P.json";

        private Dictionary<string, object> _clientInfo = new Dictionary<string, object>();

        private ExtraData_12_2_1_0 _extraData;

        private readonly RequestDelegate _next;

        private object _presentation;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        public Func<JObject, ExtraData_12_2_1_0, JObject> Update_Client = null;

        #endregion

        #region 2. Ready

        public Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test(RequestDelegate next)
        {
            #region 1. Assign

            //SET WHAT is needed to create the storyline.
            _extraData = new ExtraData_12_2_1_0();

            _presentation = null;

            _storylineDetails = new JObject();
            _storylineDetails_Parameters = new JObject();

            _next = next;

            #endregion

            #region 2. Action

            Setup();

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public void Setup()
        {
            #region 1. Assign

            //SETUP CLIENT INFO
            _clientInfo.Add("presentation_experience", _presentation);
            _clientInfo.Add("presentation_director", this);
            _clientInfo.Add("httpContext", _next);

            #endregion

            #region 2. Action

            //READ OPTIONS TEMPLATE
            //using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaEmbeddedResource))
            //{
            //    using (StreamReader reader = new StreamReader(resourceStream))
            //    {
            //        //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
            //        _baseDIArmTemplateSchema = reader.ReadToEnd();
            //    }
            //}

            //READ USER OPTIONS
            //using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaParametersEmbeddedResource))
            //{
            //    using (StreamReader reader = new StreamReader(resourceStream))
            //    {
            //        //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
            //        _baseDIArmTemplateSchemaParameters = reader.ReadToEnd();
            //    }
            //}

            _storylineDetails = null;
            _storylineDetails_Parameters = null;

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

        public async Task InvokeAsync(HttpContext context)
        {
            #region 1. Assign        

            JObject armTemplateJSONOutput = null;

            JToken outputs = null;
            List<JToken> outputObservations = null;
            StringBuilder outputObservationsPrintOut = new StringBuilder();

            if(!_extraData.KeyValuePairs.ContainsKey("HttpContext"))
            {
                _extraData.KeyValuePairs.TryAdd("HttpContext", context);
            }
            else
            {
                _extraData.KeyValuePairs["HttpContext"] = context;
            }

            #endregion

            #region 2. Action

            try
            {
                #region TEST OUR LOGIC

                #region PROCESS LOGIC UPDATES

                Update_Client = (JObject storylineDetails, ExtraData_12_2_1_0 extraData) =>
                {
                    _extraData = extraData;
                    _storylineDetails = storylineDetails;

                    return _storylineDetails;
                };

                #endregion

                armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                    .SetupStoryline(_clientInfo, _storylineDetails, null, _extraData, "", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0")
                    .Action().Result;

                outputs = armTemplateJSONOutput["outputs"];

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

            await _next(context);

            #endregion
        }

        #endregion
    }
}
