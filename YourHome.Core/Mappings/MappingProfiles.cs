using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using YourHome.Core.Models.Domain;
using YourHome.Core.Models.Dtos;

namespace YourHome.Core.Mappings
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Offer, OfferDto>().ReverseMap();
        }
    }
}
