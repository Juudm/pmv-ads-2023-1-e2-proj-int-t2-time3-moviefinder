using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

    public async Task<bool> FavoritarFilme(string userId, FilmeDto filmeDto)
    {
        try
        {
            var theMovieDbId = filmeDto.Id;
            var filmeDb = await GetFilmeByTheMovieDbId(theMovieDbId);
            var usuario = await _context.Usuarios.FindAsync(int.Parse(userId));

            if (filmeDb != null)
            {
                var filmesFavoritosByUsuarioAndFilme = await GetFilmesFavoritosByUsuarioAndFilme(usuario, filmeDb);

                if (filmesFavoritosByUsuarioAndFilme == null)
                {
                    var filmeFavorito = new FilmeFavorito
                    {
                        IdFilme = filmeDb,
                        IdUsuario = usuario
                    };
                    
                    _context.Add(filmeFavorito);
                    await _context.SaveChangesAsync();

                    return true;
                }

                return false;
            }

            {
                var filme = new Filme
                {
                    Nome = filmeDto.Title,
                    TheMovieDbId = filmeDto.Id
                };

                var filmeFavorito = new FilmeFavorito
                {
                    IdFilme = filme,
                    IdUsuario = usuario
                };
                
                _context.Add(filmeFavorito);
                await _context.SaveChangesAsync();
                return true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }
    
    private async Task<Filme?> GetFilmeByTheMovieDbId(int theMovieDbId)
    {
        var filme = await _context.Filmes.FirstOrDefaultAsync(f => f.TheMovieDbId == theMovieDbId);
        return filme;
    }

    private async Task<FilmeFavorito?> GetFilmesFavoritosByUsuarioAndFilme(Usuario usuario, Filme filme)
    {
        
        var filmeFavorito = await _context.FilmesFavoritos
            .FirstOrDefaultAsync(ff => ff.IdUsuario == usuario && ff.IdFilme == filme);
    
        return filmeFavorito;
    }
    
    public async Task<List<FilmeFavorito>> GetListaFilmesFavoritosByUsuario(int usuarioId)
    {
        var usuarioDb = await _context.Usuarios.FindAsync(usuarioId);
        
        var filmeFavoritoLista = await _context.FilmesFavoritos
            .Where(ff => ff.IdUsuario == usuarioDb).ToListAsync();
    
        return filmeFavoritoLista;
    }
    
}

