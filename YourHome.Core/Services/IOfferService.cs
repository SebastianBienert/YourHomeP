using System.Collections.Generic;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public interface IOfferService
    {
        Offer GetOffer(string offerId);
        Offer CreateOffer(Offer offer);
        IEnumerable<Offer> SearchOffers(SearchArguments searchArguments);
    }
}