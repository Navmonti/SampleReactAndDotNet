using Microsoft.EntityFrameworkCore;
using SampleReactAndDotNet.Domains;

namespace SampleReactAndDotNet.Database
{
    public class SampleDatabase : DbContext
    {
        public SampleDatabase(DbContextOptions<SampleDatabase> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
    }
}
