using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.BackEnd
{
    public static class BaseDI_MiddleWare_Extensions_1_0
    {
        public static IApplicationBuilder UseBaseDI(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<BaseDI_MiddleWare_1_0>();
        }
    }

    public class BaseDI_MiddleWare_1_0
    {
        private readonly RequestDelegate _next;

        public BaseDI_MiddleWare_1_0(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            await _next(context);
        }
    }
}
