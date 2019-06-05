using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using YourHome.API.Dtos;
using YourHome.Core.Models.Domain;
using YourHome.Core.Services;

namespace YourHome.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private readonly IOfferService _offerService;
        private readonly IEmailService _emailService;
        private readonly IMapper _mapper;

        public OfferController(IOfferService offerService, IEmailService emailService, IMapper mapper)
        {
            _offerService = offerService;
            _emailService = emailService;
            _mapper = mapper;
        }

        // GET: api/Offer/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> Get(string id)
        {
            var offer = await _offerService.GetOfferAsync(id);
            var offerDto = _mapper.Map<OfferDto>(offer);
            return Ok(offerDto);
        }
        
        // POST: api/Offer
        [HttpPost]
        //        /*public IActionResult Post([FromBody] PostOfferDto offerDto)*/
        public IActionResult Post(IFormFile offerDto)
        {
            var offer = _mapper.Map<Offer>(offerDto);
            var createdOffer = _offerService.CreateOffer(offer);
            var createdOfferDto = _mapper.Map<OfferDto>(createdOffer);
            _emailService.SendActivateMessage(HttpContext.Request.GetDisplayUrl() + "activateOffer/" + createdOffer.Id);
            return Ok(createdOfferDto);
        }


        // GET: api/Offer/Search?searchPhrase=phrase
        [HttpGet("[action]", Name = "Search")]
        public IActionResult Search(string searchPhrase, decimal? minPrice, decimal? maxPrice, int page = 1)
        {
            var searchArguments = new SearchArguments()
            {
                MaxPrice = maxPrice,
                MinPrice = minPrice,
                Page = page,
                SearchPhrase = searchPhrase
            };
            var offerDtos = _offerService.SearchOffers(searchArguments);
            return Ok(offerDtos);
        }

        //POST: api/Offer/5/message
        [HttpPost("{id}/message", Name = "PostEmailMessage")]
        public IActionResult SendEmailMessage([FromRoute] string id, [FromBody] SendEmailMessageDto emailMessageDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var emailMessage = _mapper.Map<EmailMessage>(emailMessageDto);
            _emailService.SendMessage(id, emailMessage);
            return Ok();
        }

        // GET: api/Offer/activate/5
        [HttpGet("activate/{id}", Name = "ActivateOffer")]
        public IActionResult Activate(string id)
        {
            _offerService.ActivateOffer(id);
            var offer = _offerService.GetOfferAsync(id);
            return Ok(offer.Result.State > 0);
        }

        // GET: api/Offer/add
        [HttpGet("add", Name = "AddOffer")]
        public IActionResult AddOffer()
        {
            return Ok();
        }
    }
}
