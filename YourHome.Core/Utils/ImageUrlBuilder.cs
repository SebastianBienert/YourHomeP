using AutoMapper.Configuration;
using System;
using YourHome.Core.Abstract;


namespace YourHome.Core.Utils
{
    public class ImageUrlBuilder : IImageUrlBuilder
    {
        private readonly string _imagesFolderPath;
        private const string JpgExtension = ".jpg";

        public ImageUrlBuilder(string imagesFolderPath)
        {
            _imagesFolderPath = imagesFolderPath;
        }

        public string Build(string imageId)
        {
            return _imagesFolderPath + "\\" + imageId + JpgExtension;
        }
    }
}
