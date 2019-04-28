using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using YourHome.Core.Models.Dtos;
using YourHome.Core.RepositoryInterfaces;

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

        public async Task SendMessage(string id, EmailMessageDto emailMessageDto)
        {
            var email = _offerRepository.Get(id).Email;
            var body = emailMessageDto.MessageContent;
            var subject = $"[YOUR HOME] - ${emailMessageDto.EmailSender} have a question for your offer";
            await _emailSender.SendEmailAsync(emailMessageDto.EmailSender, email, body, subject);
        }
    }
}
