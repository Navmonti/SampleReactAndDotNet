using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SampleReactAndDotNet.Domains;
using SampleReactAndDotNet.Repositories.Interfaces;
using SampleReactAndDotNet.Shared.Dtos;

namespace SampleReactAndDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        => _userService = userService;

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                return Ok(await _userService.GetAllUsers());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                return Ok(await _userService.GetUserById(id));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsersByFilter([FromQuery] string? name,
                                                             [FromQuery] string? phoneNumber,
                                                             [FromQuery] string? address,
                                                             [FromQuery] int? fromAge,
                                                             [FromQuery] int? toAge,
                                                             [FromQuery] DateTime? fromCreateDate,
                                                             [FromQuery] DateTime? toCreateDate)
        {
            try
            {
                var model = new FilterModel()
                {
                    Name = name,
                    PhoneNumber = phoneNumber,
                    Address = address,
                    FromAge = fromAge,
                    ToAge = toAge
                };
                return Ok(await _userService.GetAllUsersByFilter(model));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            try
            {
                return Ok(await _userService.AddUser(user));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            try
            {
                return Ok(await _userService.UpdateUser(user));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("id")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                return Ok(await _userService.DeleteUser(id));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
