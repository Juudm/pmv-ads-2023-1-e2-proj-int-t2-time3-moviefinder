using Newtonsoft.Json;

namespace moviefinder.dto.recomendado;

public class RecomendacoesFilmeDto
{
    public int Id { get; set; }

    public string Title { get; set; }

    [JsonProperty("original_language")]
    public string OriginalLanguage { get; set; }

    [JsonProperty("original_title")]
    public string OriginalTitle { get; set; }

    public string Overview { get; set; }

    [JsonProperty("release_date")]
    public string ReleaseDate { get; set; }

    [JsonProperty("vote_average")]
    public double VoteAverage { get; set; }

<<<<<<< HEAD
    public int Vote_count { get; set; }
    public string Poster_path { get; set; }
=======
    [JsonProperty("vote_count")]
    public int VoteCount { get; set; }
>>>>>>> 8d1cc6db20a2d0f29e104eb314c4e9991c786174

    public RecomendacoesFilmeDto(int id, string title, string originalLanguage, string originalTitle, string overview, string releaseDate, double voteAverage, int voteCount)
    {
        Id = id;
        Title = title;
        OriginalLanguage = originalLanguage;
        OriginalTitle = originalTitle;
        Overview = overview;
        ReleaseDate = releaseDate;
        VoteAverage = voteAverage;
        VoteCount = voteCount;
    }
}