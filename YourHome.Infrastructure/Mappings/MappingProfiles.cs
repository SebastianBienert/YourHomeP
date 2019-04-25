using AutoMapper;

namespace YourHome.Infrastructure.Mappings
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Infrastructure.Models.Offer, Core.Models.Domain.Offer>().ReverseMap();
            CreateMap<Infrastructure.Models.Location, Core.Models.Domain.Location>().ReverseMap();
        }
    }
}
