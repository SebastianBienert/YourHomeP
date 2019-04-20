using YourHome.Core.Models.Dtos;

namespace YourHome.Core.Services
{
    public interface IOfferService
    {
        OfferDto GetOffer(int offerId);
        void SaveOffer(OfferDto offerDto);
    }
}