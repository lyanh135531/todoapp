using Microsoft.EntityFrameworkCore;

namespace Todo.DB
{
    public class AppDbContext : DbContext
    {
        
            public DbSet<Todos> Todo { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(
                    @"Server=(localdb)\mssqllocaldb;Database=Todo;Trusted_Connection=True");
           
            }
    }
}
