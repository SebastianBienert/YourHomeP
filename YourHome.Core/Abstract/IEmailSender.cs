using System.Threading.Tasks;

namespace YourHome.Core.Abstract
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string senderAddres, string receiverAddress, string body, string subject);
        Task SendEmailFromAdminAsync(string receiverAddress, string body, string subject);
    }
}
