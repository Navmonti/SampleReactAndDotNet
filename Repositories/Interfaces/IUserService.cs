using SampleReactAndDotNet.Domains;
using SampleReactAndDotNet.Shared.Dtos;
using SampleReactAndDotNet.Shared.Interface;

namespace SampleReactAndDotNet.Repositories.Interfaces
{
    public interface IUserService
    {
        Task<IResponseModel<List<User>>> GetAllUsers();
        Task<IResponseModel<User>> GetUserById(int id);
        Task<IResponseModel<List<User>>> GetAllUsersByFilter(FilterModel model);
        Task<IResponseModel<User>> AddUser(User model);
        Task<IResponseModel<User>> UpdateUser(User model);
        Task<IResponseModel<User>> DeleteUser(int id);
    }
}
