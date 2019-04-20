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

        public Offer Get(string id)
        {
            var response = _elasticClient.Get<Offer>(id);
            return response.Source;
        }

        public void Add(Offer offer)
        {
            _elasticClient.Index(offer, i => i);
        }
    }
}
