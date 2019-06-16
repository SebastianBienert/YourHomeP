using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using YourHome.Core.Abstract;

namespace YourHome.Infrastructure
{
    public class GmailEmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public GmailEmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(string senderAddres, string receiverAddress, string body, string subject)
        {
            using (var message = new MailMessage(senderAddres, receiverAddress))
            {
                message.Subject = subject;
                message.Body = body;

                using (var smtpClient = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtpClient.EnableSsl = true;
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.Timeout = 20000;
                    smtpClient.UseDefaultCredentials = false;
                    smtpClient.Credentials = new NetworkCredential(_configuration["Gmail:Email"], _configuration["Gmail:Password"]);
                    await smtpClient.SendMailAsync(message);
                }
            }
        }

        public async Task SendEmailFromAdminAsync(string receiverAddress, string body, string subject)
        {
            await SendEmailAsync(_configuration["Gmail:Email"], receiverAddress, body, subject);
        }
    }
}
