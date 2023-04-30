using moviefinder.dto.genero;
using moviefinder.dto.recomendado;
using Newtonsoft.Json;

namespace moviefinder.dto;

public class FilmeDto
{
    public int Budget { get; set; }

    public List<GeneroDto> Genres { get; set; }

    public int Id { get; set; }

    public string Original_language { get; set; }

    public string Original_title { get; set; }

    public string Overview { get; set; }

    public double Popularity { get; set; }

    public string Release_date { get; set; }

    public int Runtime { get; set; }

    public List<IdiomaFaladoDto> Spoken_languages { get; set; }

    public string Title { get; set; }

    public double Vote_average { get; set; }

    public int Vote_count { get; set; }

    public FilmeCreditosDto Credits { get; set; }

    public RecomendadoDto Recommendations { get; set; }

    [JsonProperty("watch/providers")]
    public ProvedoresFilmeDto Providers { get; set; }

    public FilmeDto(int budget, List<GeneroDto> genres, int id, string originalLanguage, string originalTitle, string overview, double popularity, string releaseDate, int runtime, List<IdiomaFaladoDto> spokenLanguages, string title, double voteAverage, int voteCount, FilmeCreditosDto credits, RecomendadoDto recommendations, ProvedoresFilmeDto providers)
    {
        Budget = budget;
        Genres = genres;
        Id = id;
        Original_language = originalLanguage;
        Original_title = originalTitle;
        Overview = overview;
        Popularity = popularity;
        Release_date = releaseDate;
        Runtime = runtime;
        Spoken_languages = spokenLanguages;
        Title = title;
        Vote_average = voteAverage;
        Vote_count = voteCount;
        Credits = credits;
        Recommendations = recommendations;
        Providers = providers;
    }
}
