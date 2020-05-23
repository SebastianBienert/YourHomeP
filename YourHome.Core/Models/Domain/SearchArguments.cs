namespace YourHome.Core.Models.Domain
{
    public class SearchArguments
    {
        public string SearchPhrase { get; set; }
        public decimal? MinPrice { get; set; }
        public decimal? MaxPrice { get; set; }
        public int Page { get; set; }
        public Market? Market { get; set; }
        public OfferType OfferType { get; set; }
        public int? MinArea { get; set; }
        public int? MaxArea { get; set; }
        public int? MinRoomCount { get; set; }
        public int? MaxRoomCount { get; set; }
    }
}
