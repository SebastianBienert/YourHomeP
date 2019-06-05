using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public interface IOfferService
    {
        Task<Offer> GetOfferAsync(string offerId);
        Task<Offer> CreateOffer(Offer offer, IFormFileCollection file);
        IEnumerable<Offer> SearchOffers(SearchArguments searchArguments);
        void ActivateOffer(string offerId);
        FileStream GetPhoto(string id);
    }
}
