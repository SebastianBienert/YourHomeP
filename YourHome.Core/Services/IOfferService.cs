using YourHome.Core.Models.Dtos;

namespace YourHome.Core.Services
{
    public interface IOfferService
    {
        OfferDto GetOffer(string offerId);
        OfferDto CreateOffer(OfferDto offerDto);
    }
}