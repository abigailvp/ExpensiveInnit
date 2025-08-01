using EfCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("/api/[controller]")]
public class ExpensesController : ControllerBase
{
    private readonly AppDbContext _context;

    public ExpensesController(AppDbContext context) => _context = context;


    [HttpPost]
    public async Task<ActionResult<Expense>> PostExpense([FromBody] Expense expense)
    {
        _context.Expenses.Add(expense);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(PostExpense), new { id = expense.Id }, expense);
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses()
    {
        return await _context.Expenses.ToListAsync();
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> DeleteExpense(int id)
    {
        var expense = await _context.Expenses.Where(e => e.Id == id).FirstOrDefaultAsync();
        await _context.Expenses.ExecuteDeleteAsync();
        return Ok();
    }


}