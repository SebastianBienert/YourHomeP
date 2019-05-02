using System.Threading.Tasks;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public interface IEmailService
    {
        Task SendMessage(string id, EmailMessage emailMessage);
    }
}
