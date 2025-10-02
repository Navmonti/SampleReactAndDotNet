using Microsoft.EntityFrameworkCore;
using SampleReactAndDotNet.Database;
using SampleReactAndDotNet.Services.Implements;
using SampleReactAndDotNet.Services.Interfaces;
using SampleReactAndDotNet.Repositories.Implements;
using SampleReactAndDotNet.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SampleDatabase>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Add CORS for localhost:3000
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//app.UseHttpsRedirection();
app.UseCors("AllowReactApp");

//app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
