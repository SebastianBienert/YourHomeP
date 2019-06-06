using System.Linq;
using System.Net;
using System.Threading.Tasks;
using YourHome.Core.Abstract;
using YourHome.Core.Models.Domain;

namespace YourHome.Core.Services
{
    public class EmailService : IEmailService
    {
        private readonly IOfferRepository _offerRepository;
        private readonly IEmailSender _emailSender;

        public EmailService(IOfferRepository offerRepository, IEmailSender emailSender)
        {
            _offerRepository = offerRepository;
            _emailSender = emailSender;
        }

        public async Task SendMessage(string id, EmailMessage sendEmailMessage)
        {
            var email = _offerRepository.Get(id).Email;
            var body = sendEmailMessage.MessageContent;
            var subject = $"[YOUR HOME] - ${sendEmailMessage.EmailSender} have a question for your offer";
            await _emailSender.SendEmailAsync(sendEmailMessage.EmailSender, email, body, subject);
        }

        public async Task SendActivateMessage(string activateLink)
        {
            var email = _offerRepository.Get(activateLink.Split('/').Last()).Email;
            string bodyLink = "We are excited to tell you that your offer is" +
                              " successfully created. Please click on the below link to activate your offer " +
                              activateLink;
            var subject = $"[YOUR HOME] - Activate link";
            await _emailSender.SendEmailFromAdminAsync(email, bodyLink, subject);
        }
    }
}
