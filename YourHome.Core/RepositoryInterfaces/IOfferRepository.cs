using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.RepositoryInterfaces
{
    public interface IOfferRepository
    {
        Offer Get(int id);
        void Add(Offer offer);
    }
}
