using System;
using System.Collections.Generic;
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
            offerDto.Images = CreateUrlsToPhotos(offer.Images);
            return Ok(offerDto);
        }

        // POST: api/Offer
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] PostOfferDto offerDto)
        {
            var offer = _mapper.Map<Offer>(offerDto);

            var createdOffer = await _offerService.CreateOfferAsync(offer, offerDto.Files);
            var createdOfferDto = _mapper.Map<OfferDto>(createdOffer);
            createdOfferDto.Images = CreateUrlsToPhotos(createdOffer.Images);

            _emailService.SendActivateMessage(HttpContext.Request.GetDisplayUrl() + "activateOffer/" + createdOffer.Id);
            return Ok(createdOfferDto);
        }


        // GET: api/Offer/Search?searchPhrase=phrase
        [HttpGet("[action]", Name = "Search")]
        public IActionResult Search(string searchPhrase, decimal? minPrice, decimal? maxPrice, Market? market, OfferType offerType, int? minRoomCount, int? maxRoomCount, int? minArea, int? maxArea, int page = 1)
        {
            var searchArguments = new SearchArguments()
            {
                MaxPrice = maxPrice,
                MinPrice = minPrice,
                Page = page,
                SearchPhrase = searchPhrase,
                OfferType = offerType,
                MinArea = minArea,
                MaxRoomCount = maxRoomCount,
                MinRoomCount = minRoomCount,
                Market = market,
                MaxArea = maxArea
            };
            var offers = _offerService.SearchOffers(searchArguments);
            var offerDtos = new List<OfferDto>();
            foreach (var offer in offers)
            {
                var offerDto = _mapper.Map<OfferDto>(offer);
                offerDto.Images = CreateUrlsToPhotos(offer.Images);
                offerDtos.Add(offerDto);
            }
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
        public async Task<IActionResult> Activate(string id)
        {
            _offerService.ActivateOffer(id);
            var offer = await _offerService.GetOfferAsync(id);
            var activatedOfferDto = _mapper.Map<OfferDto>(offer);
            activatedOfferDto.Images = CreateUrlsToPhotos(offer.Images);
            return Ok(activatedOfferDto);
        }

        [HttpGet("{id}/photo", Name = "GetUserPhotoById")]
        public IActionResult GetUserPhoto(string id)
        {
            try
            {
                var image = _offerService.GetPhoto(id);
                return File(image, "image/jpeg");
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        private IEnumerable<string> CreateUrlsToPhotos(IEnumerable<string> ids)
        {
            return ids.Select(id => id.Contains("http") ? id : this.Url.Link("GetUserPhotoById", new { id = id }));
        }
    }
}
