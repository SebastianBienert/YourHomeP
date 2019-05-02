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
    }
}
