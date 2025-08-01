using Microsoft.EntityFrameworkCore;
namespace EfCore;

public class AppDbContext : DbContext
{
    public DbSet<Expense> Expenses { get; set; }
    // public DbSet<Expense> Expenses => Set<Expense>;

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Enforce unique course titles
        modelBuilder.Entity<Expense>()
            .HasIndex(c => c.id)
            .IsUnique();
    }
}