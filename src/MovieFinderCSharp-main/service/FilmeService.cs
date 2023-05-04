using Microsoft.AspNetCore.Mvc;
using moviefinder.dto;
using moviefinder.dto.filme;
using moviefinder.Entities;

namespace moviefinder.service;

public class FilmeService
{
    private readonly ApplicationDbContext _context;

    public FilmeService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task FavoritarFilme(string userId, FilmeDto filmeDto)
    {
        try
        {
            var filmeFavorito = new FilmeFavorito();
            
            var filme = new Filme
            {
                Nome = filmeDto.Title,
                TheMovieDbId = filmeDto.Id
            };

            var usuario = _context.Usuarios.FindAsync(int.Parse(userId));
            var usuarioResult = usuario.Result;

            if (usuarioResult != null)
            {
                filmeFavorito = new FilmeFavorito
                {
                    IdFilme = filme,
                    IdUsuario = usuarioResult
                };
            }
            else
            {
                Console.WriteLine("Usuário não encontrado!");
            }
            
            _context.Add(filmeFavorito);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }
}