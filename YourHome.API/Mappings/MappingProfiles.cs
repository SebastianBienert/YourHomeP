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

            CreateMap<PostOfferDto, Offer>()
                .ForMember(dest => dest.Location,
                    opts => opts.MapFrom(source => new Location
                    {
                        ApartmentNumber = source.ApartmentNumber,
                        City = source.City,
                        District = source.District,
                        HouseNumber = source.HouseNumber,
                        Voivodeship = source.Voivodeship
                    }));
                
        }
    }
}
