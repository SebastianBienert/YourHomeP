using FluentAssertions;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        [SetUp]
        public void Init()
        {
            _offerRepositoryMock = Substitute.For<IOfferRepository>();
            _offerService = new OfferService(_offerRepositoryMock);
        }

        [Test]
        public void GetOffer_ShouldReturnOffer()
        {
            // Arrange
            var offerId = "offerId";
            var offer = new Offer();
            _offerRepositoryMock.Get(offerId).Returns(offer);

            // Act
            var result = _offerService.GetOffer(offerId);

            // Assert
            result.Should().Be(offer);
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
        public void CreateOffer_ShouldReturnOfferWithOverridenId()
        {
            // Arrange
            var oldId = "oldId";
            var offer = new Offer()
            {
                Id = oldId
            };
            _offerRepositoryMock.Add(Arg.Any<Offer>());

            // Act
            var result = _offerService.CreateOffer(offer);

            // Assert
            result.Id.Should().NotBe(oldId);
        }
    }
}
