using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourHome.API.Configuration
{
    public static class ServicesExtensions
    {
        public static void AddElasticsearch(
            this IServiceCollection services, IConfiguration configuration)
        {
            var url = configuration["Elasticsearch:Url"];
            var defaultIndex = configuration["Elasticsearch:Index"];

            var settings = new ConnectionSettings(new Uri(url))
                .DefaultIndex(defaultIndex)
                .ThrowExceptions();
                

            var client = new ElasticClient(settings);
            
            services.AddSingleton<IElasticClient>(client);
        }
    }
}
