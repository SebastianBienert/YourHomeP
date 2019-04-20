using System;
using System.Collections.Generic;
using System.Text;

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
    }
}
