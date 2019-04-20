using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Domain;
using YourHome.Core.Models.Dtos;
using YourHome.Core.RepositoryInterfaces;

namespace YourHome.Core.Services
{
    public class OfferService : IOfferService
    {
        private readonly IOfferRepository _offerRepository;
        private readonly IMapper _mapper;

        public OfferService(IOfferRepository offerRepository, IMapper mapper)
        {
            _offerRepository = offerRepository;
            _mapper = mapper;
        }

        public OfferDto GetOffer(int offerId)
        {
            var offer = _offerRepository.Get(offerId);
            return _mapper.Map<OfferDto>(offer);
        }

        public void SaveOffer(OfferDto offerDto)
        {
            var offer = _mapper.Map<Offer>(offerDto);
            _offerRepository.Add(offer);
        }
    }
}
