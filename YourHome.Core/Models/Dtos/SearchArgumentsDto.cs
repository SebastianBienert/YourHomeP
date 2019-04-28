using System;
using System.Collections.Generic;
using System.Text;

namespace YourHome.Core.Models.Dtos
{
    public class SearchArgumentsDto
    {
        public string SearchPhrase { get; set; }
        public decimal? MinPrice { get; set; }
        public decimal? MaxPrice { get; set; }
        public int Page { get; set; }
    }
}
