namespace EfCore;

public class Expense
{
    public int id { get; set; }
    public string description { get; set; }
    public int amount { get; set; }
    public DateOnly date { get; set; }
}
