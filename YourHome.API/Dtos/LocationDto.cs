namespace YourHome.API.Dtos
{
    public class LocationDto
    {
        public string City { get; set; }
        public string District { get; set; }
        public string Voivodeship { get; set; }
        public string Street { get; set; }
        public string HouseNumber { get; set; }
        public string ApartmentNumber { get; set; }
        public CoordinatesDto Coordinates { get; set; }
    }

    public class CoordinatesDto
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
