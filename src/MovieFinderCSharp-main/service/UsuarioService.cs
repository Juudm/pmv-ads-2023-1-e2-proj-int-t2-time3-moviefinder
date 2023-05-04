using moviefinder.Entities;

namespace moviefinder.service;

public class UsuarioService
{
    private readonly ApplicationDbContext _context;

    public UsuarioService(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task CadastrarUsuario(Usuario usuario)
    {
        try
        {
            _context.Add(usuario);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }
}