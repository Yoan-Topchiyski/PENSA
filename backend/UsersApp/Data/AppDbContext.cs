using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UsersApp.Models;

namespace UsersApp.Data
{
    public class AppDbContext : IdentityDbContext<Users>
    {
        public DbSet<Event> Events { get; set; }
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}
