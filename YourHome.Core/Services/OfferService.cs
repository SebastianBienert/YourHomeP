using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YourHome.Core.Abstract;
using YourHome.Core.Enums;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public class OfferService : IOfferService
    {
        private readonly IOfferRepository _offerRepository;
        private readonly IGeoCodeProvider _geoCodeProvider;

        public OfferService(IOfferRepository offerRepository, IGeoCodeProvider geoCodeProvider)
        {
            _offerRepository = offerRepository;
            _geoCodeProvider = geoCodeProvider;
        }

        public async Task<Offer> GetOfferAsync(string offerId)
        {
            var offer = _offerRepository.Get(offerId);
            var coordinates = await _geoCodeProvider.GetCoordinatesAsync($"{offer.Location.City}, {offer.Location.HouseNumber}");
            offer.Location.Coordinates = coordinates;
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
            offer.State = (int) StateOffer.NotConfirmed;
            _offerRepository.Add(offer);
            return offer;
        }

        public void ActivateOffer(string offerId)
        {
            _offerRepository.Activate(offerId);
        }
    }
}
