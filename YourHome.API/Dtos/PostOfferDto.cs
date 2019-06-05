using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace YourHome.API.Dtos
{
    public class PostOfferDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Email { get; set; }
        public LocationDto Location { get; set; }
        public IList<IFormFile> File { get; set; }
        public int Area { get; set; }
        public int State { get; set; }
    }
}
