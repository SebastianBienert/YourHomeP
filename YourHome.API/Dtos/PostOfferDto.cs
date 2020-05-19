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

        [FromForm(Name = "city")]
        public string City { get; set; }
        [FromForm(Name = "street")]
        public string Street { get; set; }

        [FromForm(Name = "district")]
        public string District { get; set; }

        [FromForm(Name = "voivodeship")]
        public string Voivodeship { get; set; }

        [FromForm(Name = "houseNumber")]
        public string HouseNumber { get; set; }

        [FromForm(Name = "apartmentNumber")]
        public string ApartmentNumber { get; set; }

        [FromForm(Name = "files")]
        public IFormFileCollection Files { get; set; }

        [FromForm(Name = "area")]
        public int Area { get; set; }

        [FromForm(Name = "state")]
        public int State { get; set; }
    }



}
