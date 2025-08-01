using Microsoft.EntityFrameworkCore;
namespace EfCore;

public class ExpenseDbContext : DbContext
{
    public DbSet<Expense> Expenses { get; set; }
    // public DbSet<Expense> Expenses => Set<Expense>;

    public ExpenseDbContext(DbContextOptions<ExpenseDbContext> options) : base(options) { }
}