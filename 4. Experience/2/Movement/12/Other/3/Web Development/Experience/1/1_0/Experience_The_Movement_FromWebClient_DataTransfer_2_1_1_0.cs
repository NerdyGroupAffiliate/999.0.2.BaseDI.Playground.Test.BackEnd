using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace BaseDI.Playground.Test.Backend.Experience.Web_Development_
{
    public class Experience_The_Movement_FromWebClient_DataTransfer_2_1_1_0 : WebClient
    {
        public int Timeout { get; set; }

        protected override WebRequest GetWebRequest(Uri address)
        {
            var request = base.GetWebRequest(address);
            request.Timeout = Timeout;
            return request;
        }
    }
}
