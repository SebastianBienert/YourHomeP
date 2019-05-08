using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Abstract
{
    public interface IGeoCodeProvider
    {
        Task<Coordinates> GetCoordinatesAsync(string addressQuery);
        Task<Coordinates> GetCoordinatesAsync(string street, string city, string state, string postalCode, string country);
    }
}
