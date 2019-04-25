using System;
using System.Collections.Generic;
using System.Text;

namespace YourHome.Core.Models.Dtos
{
    public class LocationDto
    {
        public string City { get; set; }
        public string District { get; set; }
        public string Voivodeship { get; set; }
        public string HouseNumber { get; set; }
        public string ApartmentNumber { get; set; }
    }
}
