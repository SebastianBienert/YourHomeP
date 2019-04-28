using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace YourHome.Core.RepositoryInterfaces
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string senderAddres, string receiverAddress, string body, string subject);
    }
}
