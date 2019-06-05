using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using YourHome.Core.Abstract;

namespace YourHome.Core.Utils
{
    public class ImageSaver : IImageSaver
    {
        private readonly string _imagesFolderPath;
        private const string JpgExtenstion = ".jpg";

        public ImageSaver(string imagesFolderPath)
        {
            _imagesFolderPath = imagesFolderPath;
        }

        public async Task<IEnumerable<string>> SaveImagesAsync(IFormFileCollection files)
        {
            var imagesIds = new List<string>();
            foreach (var file in files)
            {
                var id = Guid.NewGuid().ToString();
                using (var fileStream = new FileStream(Path.Combine(_imagesFolderPath, id + JpgExtenstion), FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                imagesIds.Add(id);
            }
            return imagesIds;
        }
    }
}
