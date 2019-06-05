using FluentAssertions;
using Microsoft.AspNetCore.Http;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YourHome.Core.Abstract;
using YourHome.Core.Models.Domain;
using YourHome.Core.Services;

namespace YourHome.UnitTests
{
    [TestFixture]
    class OfferServiceTests
    {
        private IOfferService _offerService;
        private IOfferRepository _offerRepositoryMock;
        private IGeoCodeProvider _geoCodeProviderMock;
        private IImagePathBuilder _imagePathBuilder;
        private IImageSaver _imageSaver;

        [SetUp]
        public void Init()
        {
            _offerRepositoryMock = Substitute.For<IOfferRepository>();
            _geoCodeProviderMock = Substitute.For<IGeoCodeProvider>();
            _imagePathBuilder = Substitute.For<IImagePathBuilder>();
            _imageSaver = Substitute.For<IImageSaver>();

            _offerService = new OfferService(_offerRepositoryMock, _geoCodeProviderMock, _imagePathBuilder, _imageSaver);
        }

        [Test]
        public async Task GetOffer_ShouldReturnOffer()
        {
            // Arrange
            var expected = new Offer()
            {
                Location = new Location()
                {
                    Coordinates = new Coordinates()
                    {
                        Latitude = 1,
                        Longitude = 2
                    },
                    City = "city",
                    HouseNumber = "1"  
                }
            };

            var offerId = "offerId";
            var offer = new Offer()
            {
                Location = new Location()
                {
                    City = "city",
                    HouseNumber = "1"
                }
            };
            _offerRepositoryMock.Get(offerId).Returns(offer);
            _geoCodeProviderMock.GetCoordinatesAsync(Arg.Any<string>()).Returns(new Coordinates() { Latitude = 1, Longitude = 2 });

            // Act
            var result = await _offerService.GetOfferAsync(offerId);

            // Assert
            result.Should().BeEquivalentTo(expected);
        }

        [Test]
        public void SearchOffers_ShouldReturnOffers()
        {
            // Arrange
            var offers = new List<Offer>() { new Offer() };
            _offerRepositoryMock.Search(Arg.Any<SearchArguments>()).Returns(offers);

            // Act
            var result = _offerService.SearchOffers(new SearchArguments()).ToList();

            // Assert
            result.Should().BeEquivalentTo(offers);
        }

        [Test]
        public async Task CreateOffer_ShouldReturnOfferWithOverridenId()
        {
            // Arrange
            var oldId = "oldId";
            var offer = new Offer()
            {
                Id = oldId
            };
            _offerRepositoryMock.Add(Arg.Any<Offer>());

            _imageSaver.SaveImagesAsync(Arg.Any<IFormFileCollection>()).Returns(new List<string>());

            // Act
            var result = await _offerService.CreateOfferAsync(offer, null);

            // Assert
            result.Id.Should().NotBe(oldId);
        }
    }
}
