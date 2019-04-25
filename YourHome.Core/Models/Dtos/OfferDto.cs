using System;
using System.Collections.Generic;
using System.Text;

namespace YourHome.Core.Models.Dtos
{
    public class OfferDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime CreationDate { get; set; }
        public string Email { get; set; }
        public LocationDto Location { get; set; }
        public IEnumerable<string> Images { get; set; }
        public int Area { get; set; }

    }
}
