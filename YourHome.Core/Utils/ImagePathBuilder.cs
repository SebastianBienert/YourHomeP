using AutoMapper.Configuration;
using System;
using YourHome.Core.Abstract;


namespace YourHome.Core.Utils
{
    public class ImagePathBuilder : IImagePathBuilder
    {
        private readonly string _imagesFolderPath;
        private const string JpgExtension = ".jpg";

        public ImagePathBuilder(string imagesFolderPath)
        {
            _imagesFolderPath = imagesFolderPath;
        }

        public string Build(string imageId)
        {
            return _imagesFolderPath + "\\" + imageId + JpgExtension;
        }
    }
}
