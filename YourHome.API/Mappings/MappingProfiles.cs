using AutoMapper;
using YourHome.API.Dtos;
using YourHome.Core.Models.Domain;

namespace YourHome.API.Mappings
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Offer, OfferDto>().ReverseMap();
            CreateMap<Location, LocationDto>().ReverseMap();
            CreateMap<EmailMessage, SendEmailMessageDto>().ReverseMap();
            CreateMap<Coordinates, CoordinatesDto>().ReverseMap();
        }
    }
}
