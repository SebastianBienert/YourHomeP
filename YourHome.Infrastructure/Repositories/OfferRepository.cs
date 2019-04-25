using AutoMapper;
using Nest;
using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Domain;
using YourHome.Infrastructure.Models;
using YourHome.Core.RepositoryInterfaces;
using Offer = YourHome.Infrastructure.Models.Offer;

namespace YourHome.Infrastructure.Repositories
{
    public class OfferRepository : IOfferRepository
    {
        private readonly IElasticClient _elasticClient;
        private readonly IMapper _mapper;

        public OfferRepository(IElasticClient elasticClient, IMapper mapper)
        {
            _elasticClient = elasticClient;
            _mapper = mapper;
        }

        public Core.Models.Domain.Offer Get(string id)
        {
            var response = _elasticClient.Get<Offer>(id);
            var offer = _mapper.Map<Core.Models.Domain.Offer>(response.Source);
            return offer;
        }

        public void Add(Core.Models.Domain.Offer offer)
        {
            _elasticClient.Index(offer, i => i);
        }
    }
}
