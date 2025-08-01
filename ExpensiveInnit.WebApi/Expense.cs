using System.ComponentModel.DataAnnotations;

namespace EfCore;

public class Expense
{
    [Key] //moet je instellen voor EF
    public int Id { get; set; }

    [Required] //mag niet null of leeg zijn
    [MinLength(1)] //moet minstens 1 character hebben
    public string Description { get; set; }

    [Required]
    [Range(1, int.MaxValue)] //amount ligt tss 1 en max
    public double Amount { get; set; }

    [Required]
    [DataType(DataType.Date)] //enkel datum uit DateTime
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime Date { get; set; }

    public string Category { get; set; }

    public Expense() { } //EF heeft deze nodig voor migrations uit te voeren

    public Expense(int id, string description, double amount, DateTime date, string category)
    {
        Id = id;
        Description = description;
        Amount = amount;
        Date = date;
        Category = category;
    }
}
