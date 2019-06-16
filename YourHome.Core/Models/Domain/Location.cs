namespace YourHome.Core.Models.Domain
{
    public class Location
    {
        public string City { get; set; }
        public string District { get; set; }
        public string Voivodeship { get; set; }
        public string HouseNumber { get; set; }
        public string ApartmentNumber { get; set; }
        public string Street { get; set; }
        public Coordinates Coordinates { get; set; }
    }
}
