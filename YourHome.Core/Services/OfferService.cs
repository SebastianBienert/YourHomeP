using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Dtos;
using YourHome.Core.RepositoryInterfaces;

namespace YourHome.Core.Services
{
    public class OfferService : IOfferService
    {
        private readonly IOfferRepository _offerRepository;

        public OfferService(IOfferRepository offerRepository)
        {
            _offerRepository = offerRepository;
        }

        public OfferDto GetOffer(int offerId)
        {
            return null;
        }
    }
}
