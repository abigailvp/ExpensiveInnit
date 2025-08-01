using EfCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=expensive.db"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.Run();



var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseSqlite("Data Source=app.db") //in webapi map wordt app.db aangemaakt
            .Options;


using var context = new AppDbContext(options);

// // Zorg dat de database en tabellen worden aangemaakt
context.Database.Migrate();


