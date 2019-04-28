using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YourHome.Core.Models.Dtos;

namespace YourHome.Core.Services
{
    public interface IEmailService
    {
        Task SendMessage(string id, EmailMessageDto emailMessageDto);
    }
}
