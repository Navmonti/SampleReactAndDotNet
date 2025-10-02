using SampleReactAndDotNet.Domains; 
using SampleReactAndDotNet.Services.Interfaces;
using SampleReactAndDotNet.Database;
using Microsoft.EntityFrameworkCore;
using SampleReactAndDotNet.Shared.Dtos;

namespace SampleReactAndDotNet.Services.Implements
{
    public class UserRepository : IUserRepository
    {
        private readonly SampleDatabase _context; 
        public UserRepository(SampleDatabase context)
        =>  _context = context;

        public async Task<List<User>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<List<User>> GetAllUsersByFilter(FilterModel model)
        {
            var query = _context.Users.AsQueryable();

            if(model.Address != null)
            query = query.Where(x => x.Address.Contains(model.Address));

            if(model.Name != null)
                query = query.Where(x => x.Name.Contains(model.Name));

            if(model.PhoneNumber != null)
                query = query.Where(x => x.PhoneNumber.Contains(model.PhoneNumber));
            
            if (model.FromAge != null)
                query = query.Where(x => x.Age >= model.FromAge);

            if (model.ToAge != null)
                query = query.Where(x => x.Age  <= model.ToAge); 

            return await query.ToListAsync<User>();
        }

        public async Task<User> GetUserById(int id)
        {
            var user = await _context.Users.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (user == null) return null;
            return user;
        }

        public async Task<User> InsertUser(User user)
        {
            await _context.Users.AddAsync(user); 
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> UpdateUser(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteUser(int id)
        {
            var user = await _context.Users.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (user == null) return null;
            _context.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }
    }
}
