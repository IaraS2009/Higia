using HigiaAPI.Data;
using Microsoft.EntityFrameworkCore;

var construtor = WebApplication.CreateBuilder(args);
construtor.Services.AddControllers();
construtor.Services.AddDbContext<HigiaContext>(opcoes => opcoes.UseMySQL(construtor.Configuration.GetConnectionString("HigiaConnection")!));
construtor.Services.AddCors(opcoes =>
{
    opcoes.AddPolicy("Frontend", politica =>
    {
        politica.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
construtor.Services.AddEndpointsApiExplorer();
construtor.Services.AddSwaggerGen();

var aplicacao = construtor.Build();
if (aplicacao.Environment.IsDevelopment())
{
    aplicacao.UseSwagger();
    aplicacao.UseSwaggerUI();
}
aplicacao.UseCors("Frontend");
aplicacao.UseAuthorization();
aplicacao.MapControllers();
aplicacao.Run();