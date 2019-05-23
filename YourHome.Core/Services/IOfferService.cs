using System.Collections.Generic;
using System.Threading.Tasks;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public interface IOfferService
    {
        Task<Offer> GetOfferAsync(string offerId);
        Offer CreateOffer(Offer offer);
        IEnumerable<Offer> SearchOffers(SearchArguments searchArguments);
        void ActivateOffer(string offerId);
    }
}