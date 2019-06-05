using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace YourHome.API.Dtos
{
    public class PostOfferDto
    {
        [FromForm(Name = "title")]
        public string Title { get; set; }

        [FromForm(Name = "description")]
        public string Description { get; set; }

        [FromForm(Name = "price")]
        public decimal Price { get; set; }

        [FromForm(Name = "email")]
        public string Email { get; set; }

        [FromForm(Name = "location")]
        public LocationDto Location { get; set; }

        [FromForm(Name = "files")]
        public IFormFileCollection Files { get; set; }

        [FromForm(Name = "area")]
        public int Area { get; set; }

        [FromForm(Name = "state")]
        public int State { get; set; }
    }
}
