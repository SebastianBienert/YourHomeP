using System.Collections.Generic;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Abstract
{
    public interface IOfferRepository
    {
        Offer Get(string id);
        void Add(Offer offer);
        IEnumerable<Offer> Search(SearchArguments searchArguments);
    }
}
