using SampleReactAndDotNet.Domains;
using SampleReactAndDotNet.Shared.Dtos;
using SampleReactAndDotNet.Shared.Implements;

namespace SampleReactAndDotNet.Services.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUsers(); 
        Task<List<User>> GetAllUsersByFilter(FilterModel model);
        Task<User> GetUserById(int Id);
        Task<User> InsertUser(User user);
        Task<User> UpdateUser(User user);
        Task<User> DeleteUser(int Id);

    }
}
