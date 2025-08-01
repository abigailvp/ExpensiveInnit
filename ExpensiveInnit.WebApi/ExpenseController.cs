using EfCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("/[controller]")]
public class ExpenseController : ControllerBase
{
    private readonly AppDbContext _context;

    public ExpenseController(AppDbContext context) => _context = context;


    [HttpPost]
    public async Task<ActionResult<Expense>> PostExpense([FromBody] Expense expense)
    {
        _context.Expenses.Add(expense);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(PostExpense), new { id = expense.id }, expense);
    }


    [HttpGet]
    public async Task<ActionResult<Expense>> GetExpenses(int id)
    {
        var expenses = await _context.Expenses.Where(e => e.id == id).ToListAsync();
        if (expenses == null)
            return NotFound();
        return Ok(expenses);

    }


}