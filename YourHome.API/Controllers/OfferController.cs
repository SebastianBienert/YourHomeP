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

        // GET: api/Offer
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Offer/5
        [HttpGet("{id}", Name = "Get")]
        public OfferDto Get(int id)
        {
            return _offerService.GetOffer(id);
        }

        // POST: api/Offer
        [HttpPost]
        public void Post([FromBody] OfferDto offerDto)
        {
            _offerService.SaveOffer(offerDto);
        }

        // PUT: api/Offer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
