using Microsoft.AspNetCore.Mvc;
using moviefinder.client;
using moviefinder.dto;
using moviefinder.dto.genero;
using moviefinder.dto.pessoa;
using moviefinder.dto.provedor;
using moviefinder.dto.recomendado;
using Newtonsoft.Json;
using System.Text.Json.Nodes;
using moviefinder.dto.filme;
using moviefinder.Entities;
using moviefinder.service;

namespace moviefinder.controller;

[ApiController]
[Route("v1/public/movieFinder")]
public class FilmeController : ControllerBase
{
    private readonly TheMovieDataBaseClient _theMovieDataBaseClient;
    private readonly string _apiKey;
    private readonly string _apiLanguage;
    private readonly FilmeService _filmeService;
    private readonly UsuarioService _usuarioService;
    
    public FilmeController(TheMovieDataBaseClient theMovieDataBaseClient, FilmeService filmeService, UsuarioService usuarioService)
    {
        _theMovieDataBaseClient = theMovieDataBaseClient;
        _apiKey = "a99efb9137ad32d6eb76bc2453ba6c28";
        _apiLanguage = "pt-BR";
        _filmeService = filmeService;
        _usuarioService = usuarioService;
    }

    [HttpGet("movie/popularity")]
    public async Task<IActionResult> ListPopularityMovies()
    {
        var response = await _theMovieDataBaseClient.ListPopularityMovies(_apiKey, _apiLanguage);
        var moviesByPopularity = JsonConvert.DeserializeObject<ListaPopularFilmes>(response); 
        return Ok(moviesByPopularity.Results);
    }

    [HttpGet("movie/top_rated")]
    public async Task<IActionResult> ListTopRatedMovies()
    {
        var response = await _theMovieDataBaseClient.ListTopRatedMovies(_apiKey, _apiLanguage);
        var moviesByTopRated = JsonConvert.DeserializeObject<ListaTopRatedFilmesDto>(response);
        return Ok(moviesByTopRated.Results);
    }

    [HttpGet("movie/{id}")]
    public async Task<IActionResult> FindMovieById(string id)
    {
        var response = await _theMovieDataBaseClient.FindMovieById(id, _apiKey, _apiLanguage);
        var movieById = JsonConvert.DeserializeObject<FilmeDto>(response);
        return Ok(movieById);
    }

    [HttpGet("movie_query/{query}")]
    public async Task<IActionResult> FindMovieByQuery(string query)
    {
        var response = await _theMovieDataBaseClient.FindMovieByQuery(query, _apiKey, _apiLanguage);
        var movieByQuery = JsonConvert.DeserializeObject<ResultadosFilmePesquisaDto>(response);
        return Ok(movieByQuery);
    }

    [HttpGet("person/{id}")]
    public async Task<IActionResult> FindActorById(string id)
    {
        var response = await _theMovieDataBaseClient.FindPersonById(id, _apiKey, _apiLanguage);
        var personById = JsonConvert.DeserializeObject<PessoaDto>(response);
        return Ok(personById);
    }

    [HttpGet("genre/list")]
    public async Task<IActionResult> ListGenres()
    {
        var response = await _theMovieDataBaseClient.ListGenres(_apiKey, _apiLanguage);
        var genres = JsonConvert.DeserializeObject<GenerosDto>(response);
        return Ok(genres);
    }

    [HttpGet("discover/movie")]
        public async Task<IActionResult> DiscoverMovies([FromQuery] string genreId)
    {
        var response = await _theMovieDataBaseClient.DiscoverMovies(_apiKey, _apiLanguage, genreId);
        var discover = JsonConvert.DeserializeObject<ListaDiscoverFilmeDto>(response);
        return Ok(discover);
    }

    [HttpGet("provider/list")]
    public async Task<IActionResult> ListProviders()
    {
        var response = await _theMovieDataBaseClient.ListProviders(_apiKey, _apiLanguage);
        var providers = JsonConvert.DeserializeObject<ProvedoresDto>(response);
        return Ok(providers);
    }

    [HttpGet("languages/list")]
    public async Task<IActionResult> ListLanguages()
    {
        var response = await _theMovieDataBaseClient.ListLanguages(_apiKey);
        var idiomas = JsonConvert.DeserializeObject<List<IdiomaFaladoDto>>(response);
        return Ok(idiomas);
    }

    [HttpGet("recommendation/list/{id}")]
    public async Task<IActionResult> ListRecommendationsByMovie(string id)
    {
        var response = await _theMovieDataBaseClient.ListRecommendationsByMovie(id, _apiKey, _apiLanguage);
        var recommendations = JsonConvert.DeserializeObject<RecomendadoDto>(response);
        return Ok(recommendations);
    }

    [HttpPost("favoritarFilme/{userId}")]
    public async Task<IActionResult> FavoritarFilme(string userId, [FromBody] FilmeDto filmeDto)
    {
        await _filmeService.FavoritarFilme(userId, filmeDto);
        return Ok("Filme favoritado com sucesso!");
    }
    
    [HttpPost("cadastrarUsuario")]
    public async Task<IActionResult> CadastrarUsuario([FromBody] Usuario usuario)
    {
        await _usuarioService.CadastrarUsuario(usuario);
        return Ok("Usuario cadastrado com sucesso!");
    }
    
}