using System;
using System.Collections.Generic;

namespace YourHome.Core.Models.Domain
{
    public class Offer
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime CreationDate { get; set; }
        public string Email { get; set; }
        public Location Location { get; set; }
        public IEnumerable<string> Images { get; set; }
        public int Area { get; set; }
        public string State { get; set; }
    }
}
