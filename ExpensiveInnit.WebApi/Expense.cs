using System.ComponentModel.DataAnnotations;

namespace EfCore;

public class Expense
{
    [Key] //moet je instellen voor EF
    public int id { get; set; }

    [Required] //mag niet null of leeg zijn
    [MinLength(1)] //moet minstens 1 character hebben
    public string description { get; set; }

    [Required]
    [Range(1, int.MaxValue)] //amount ligt tss 1 en max
    public double amount { get; set; }

    [Required]
    [DataType(DataType.Date)] //enkel datum uit DateTime
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    public DateTime date { get; set; }

    public Expense() { } //EF heeft deze nodig voor migrations uit te voeren

    public Expense(int Id, string Description, double Amount, DateTime Date)
    {
        id = Id;
        description = Description;
        amount = Amount;
        date = Date;
    }
}
