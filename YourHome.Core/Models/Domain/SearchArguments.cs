namespace YourHome.Core.Models.Domain
{
    public class SearchArguments
    {
        public string SearchPhrase { get; set; }
        public decimal? MinPrice { get; set; }
        public decimal? MaxPrice { get; set; }
        public int Page { get; set; }
    }
}
