using FluentValidation;
using YourHome.API.Dtos;

namespace YourHome.API.Validators
{
    public class SendEmailMessageValidator : AbstractValidator<SendEmailMessageDto>
    {
        public SendEmailMessageValidator()
        {
            RuleFor(dto => dto.EmailSender)
                .NotEmpty()
                .EmailAddress();
            RuleFor(dto => dto.MessageContent)
                .NotEmpty()
                .WithMessage("The message cannot be empty");
        }
    }
}
