using moviefinder.client;

namespace moviefinder
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
        
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddHttpClient();
            builder.Services.AddScoped<TheMovieDataBaseClient>();
            
            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseCors(builder => builder
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowAnyOrigin()
            );
            app.MapControllers();
            app.Run();
        }
    }
}

