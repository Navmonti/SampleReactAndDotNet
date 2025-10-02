using SampleReactAndDotNet.Domains;
using SampleReactAndDotNet.Repositories.Interfaces;
using SampleReactAndDotNet.Services.Interfaces;
using SampleReactAndDotNet.Shared.Dtos;
using SampleReactAndDotNet.Shared.Implements;
using SampleReactAndDotNet.Shared.Interface;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SampleReactAndDotNet.Repositories.Implements
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository) 
            => _userRepository = userRepository;

        public async Task<IResponseModel<List<User>>> GetAllUsers()
        {
            try
            {
                var users = await _userRepository.GetAllUsers();
                return new ResponseModel<List<User>>() { 
                    IsSuccessful = true,
                    Message = "User list fetched successfully",
                    Model = users,
                };
            }
            catch (Exception ex)
            {
                return new ResponseModel<List<User>>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                }; 
            }
        }

        public async Task<IResponseModel<List<User>>> GetAllUsersByFilter(FilterModel model)
        {
            try
            {
                var users = await _userRepository.GetAllUsersByFilter(model);
                return new ResponseModel<List<User>> ()
                {
                    IsSuccessful = true,
                    Message = "User fetched successfully",
                    Model = users,
                };
            }
            catch (Exception ex)
            { 
                return new ResponseModel<List<User>>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                };
            }
        }

        public async Task<IResponseModel<User>> GetUserById(int id)
        {
            try
            {
                var user = await _userRepository.GetUserById(id);
                return new ResponseModel<User>()
                {
                    IsSuccessful = true,
                    Message = "User fetched successfully",
                    Model = user,
                };
            }
            catch (Exception ex)
            {
                return new ResponseModel<User>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                };
            }
        }

        public async Task<IResponseModel<User>> AddUser(User model)
        {
            try
            {
                var date = DateTime.Now;
                model.CreateDate = date;
                model.ModifayDate = date;
                var user = await _userRepository.InsertUser(model);
                return new ResponseModel<User>()
                {
                    IsSuccessful = true,
                    Message = "User added successfully",
                    Model = user,
                };
            }
            catch (Exception ex)
            {
                return new ResponseModel<User>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                };
            }
        }
        public async Task<IResponseModel<User>> UpdateUser(User model)
        {
            try
            {
                var user = await _userRepository.UpdateUser(model);
                model.ModifayDate = DateTime.Now;
                return new ResponseModel<User>()
                {
                    IsSuccessful = true,
                    Message = "User updated successfully",
                    Model = user,
                };
            }
            catch (Exception ex)
            {
                return new ResponseModel<User>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                };
            }
        }

        public async Task<IResponseModel<User>> DeleteUser(int id)
        {
            try
            {
                var user = await _userRepository.DeleteUser(id);
                return new ResponseModel<User>()
                {
                    IsSuccessful = true,
                    Message = "User deleted successfully",
                    Model = user,
                };
            }
            catch (Exception ex)
            {
                return new ResponseModel<User>()
                {
                    IsSuccessful = false,
                    Message = ex.Message,
                    Model = null,
                };
            }

        }

    }
}
