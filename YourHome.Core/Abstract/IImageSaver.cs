using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace YourHome.Core.Abstract
{
    public interface IImageSaver
    {
        Task<IEnumerable<string>> SaveImagesAsync(IFormFileCollection files);
    }
}