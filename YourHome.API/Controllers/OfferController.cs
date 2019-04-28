using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YourHome.Core.Models.Dtos;
using YourHome.Core.Services;

namespace YourHome.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private readonly IOfferService _offerService;

        public OfferController(IOfferService offerService)
        {
            _offerService = offerService;
        }

        // GET: api/Offer/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(string id)
        {
            var offerDto = _offerService.GetOffer(id);
            return Ok(offerDto);
        }
        
        // POST: api/Offer
        [HttpPost]
        public IActionResult Post([FromBody] OfferDto offerDto)
        {
            var createdOfferDto = _offerService.CreateOffer(offerDto);
            return Ok(createdOfferDto);
        }

        // GET: api/Offer/Search?searchPhrase=phrase
        [HttpGet("[action]", Name = "Search")]
        public IActionResult Search(string searchPhrase, decimal? minPrice, decimal? maxPrice, int page = 1)
        {
            var searchArgumentsDto = new SearchArgumentsDto
            {
                MaxPrice = maxPrice,
                MinPrice = minPrice,
                Page = page,
                SearchPhrase = searchPhrase
            };
            var offerDtos = _offerService.SearchOffers(searchArgumentsDto);
            return Ok(offerDtos);
        }
    }
}
