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

        public OfferDto GetOffer(string offerId)
        {
            var offer = _offerRepository.Get(offerId);
            var offerDto = _mapper.Map<OfferDto>(offer);
            return offerDto;
        }

        public IEnumerable<OfferDto> SearchOffers(SearchArgumentsDto searchArgumentsDto)
        {
            var searchArguments = _mapper.Map<SearchArguments>(searchArgumentsDto);
            var offers = _offerRepository.Search(searchArguments);
            var offerDtos = _mapper.Map<IEnumerable<OfferDto>>(offers);
            return offerDtos;
        }

        public OfferDto CreateOffer(OfferDto offerDto)
        {
            var offer = _mapper.Map<Offer>(offerDto);
            offer.Id = Guid.NewGuid().ToString();
            _offerRepository.Add(offer);

            return _mapper.Map<OfferDto>(offer);
        }
    }
}
