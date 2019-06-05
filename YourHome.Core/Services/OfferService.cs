using AutoMapper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
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
        private readonly IImageUrlBuilder _imageUrlBuilder;
        private readonly IImageSaver _imageSaver;

        public OfferService(IOfferRepository offerRepository, 
            IGeoCodeProvider geoCodeProvider, 
            IImageUrlBuilder imageUrlBuilder,
            IImageSaver imageSaver)
        {
            _offerRepository = offerRepository;
            _geoCodeProvider = geoCodeProvider;
            _imageUrlBuilder = imageUrlBuilder;
            _imageSaver = imageSaver;
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

        public async Task<Offer> CreateOffer(Offer offer, IFormFileCollection file)
        {
            await _imageSaver.SaveImagesAsync(file);
            offer.Id = Guid.NewGuid().ToString();
            offer.State = (int)StateOffer.NotConfirmed;
            offer.CreationDate = new DateTime();
            _offerRepository.Add(offer);
            return offer;
        }
        
        public void ActivateOffer(string offerId)
        {
            _offerRepository.Activate(offerId);
        }

        public FileStream GetPhoto(string id)
        {
            var path = _imageUrlBuilder.Build(id);
            var image = File.OpenRead(path);
            return image;
        }
    }
}
