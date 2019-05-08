using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Geocoding.Microsoft;
using Microsoft.Extensions.Configuration;
using YourHome.Core.Abstract;
using YourHome.Core.Models.Domain;

namespace YourHome.Infrastructure
{
    public class BingGeoCodeProvider : IGeoCodeProvider
    {
        private readonly BingMapsGeocoder _bingMapsGeocoder;

        public BingGeoCodeProvider(IConfiguration configuration)
        {
            _bingMapsGeocoder = new BingMapsGeocoder(configuration["BingKey"]);
        }
        public async Task<Coordinates> GetCoordinatesAsync(string addressQuery)
        {
            var result = await _bingMapsGeocoder.GeocodeAsync(addressQuery);
            var bestMatch = result.FirstOrDefault();
            return MapResultToCoordinates(bestMatch);
        }

        public async Task<Coordinates> GetCoordinatesAsync(string street, string city, string state, string postalCode, string country)
        {
            var result = await _bingMapsGeocoder.GeocodeAsync(street, city, state, postalCode, country);
            var bestMatch = result.FirstOrDefault();
            return MapResultToCoordinates(bestMatch);
        }

        private Coordinates MapResultToCoordinates(BingAddress address)
        {
            if (address != null)
            {
                return new Coordinates
                {
                    Latitude = address.Coordinates.Latitude,
                    Longitude = address.Coordinates.Longitude
                };
            }
            return null;
        }
    }
}
