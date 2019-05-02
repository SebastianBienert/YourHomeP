
using System.Threading.Tasks;
using NSubstitute;
using NUnit.Framework;
using YourHome.Core.Abstract;
using YourHome.Core.Models.Domain;
using YourHome.Core.Services;

namespace YourHome.UnitTests
{
    class EmailTests
    {
        [Test]
        public async Task EmailServiceShouldUseProperDataToSendEmail()
        {
            //Arrange
            var emailMassageDto = new EmailMessage(){EmailSender = "sender@gmail.com", MessageContent = "test"};
            var mockedEmailReceiver = new Offer() {Email = "receiver@gmail.com"};
            var offerRepositoryMock = Substitute.For<IOfferRepository>();
            offerRepositoryMock.Get(Arg.Any<string>()).Returns(args => mockedEmailReceiver);
            var emailSenderMock = Substitute.For<IEmailSender>();
            var emailService = new EmailService(offerRepositoryMock, emailSenderMock);

            //Act
            await emailService.SendMessage("123", emailMassageDto);

            //Assert
            await emailSenderMock.Received().SendEmailAsync(emailMassageDto.EmailSender, mockedEmailReceiver.Email,
                emailMassageDto.MessageContent, Arg.Any<string>());
        }
    }
}
