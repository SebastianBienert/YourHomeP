using Nest;
using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Domain;
using YourHome.Core.RepositoryInterfaces;

namespace YourHome.Infrastructure.Repositories
{
    public class OfferRepository : IOfferRepository
    {
        private readonly IElasticClient _elasticClient;

        public OfferRepository(IElasticClient elasticClient)
        {
            _elasticClient = elasticClient;
        }

        public Offer Get(int id)
        {
            var response = _elasticClient.Get<Offer>(id);
            return response.Source;
        }
    }
}
