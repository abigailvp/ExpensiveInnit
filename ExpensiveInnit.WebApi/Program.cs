using EfCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Swagger en endpoints
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// EF Core met SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));

//CORS = nodig om 2 servers te verbinden (js en api)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500") // of je frontend host/poort
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Zorg dat database gemaakt wordt bij start (mAAR IS EIGENLIJK niet nodig)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}



app.UseCors();

// Swagger alleen in Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.Run();