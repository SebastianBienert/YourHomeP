using AutoMapper;
using System;
using System.Collections.Generic;
using YourHome.Core.Abstract;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public class OfferService : IOfferService
    {
        private readonly IOfferRepository _offerRepository;

        public OfferService(IOfferRepository offerRepository)
        {
            _offerRepository = offerRepository;
        }

        public Offer GetOffer(string offerId)
        {
            var offer = _offerRepository.Get(offerId);
            return offer;
        }

        public IEnumerable<Offer> SearchOffers(SearchArguments searchArguments)
        {
            var offers = _offerRepository.Search(searchArguments);
            return offers;
        }

        public Offer CreateOffer(Offer offer)
        {
            offer.Id = Guid.NewGuid().ToString();
            _offerRepository.Add(offer);
            return offer;
        }
    }
}
