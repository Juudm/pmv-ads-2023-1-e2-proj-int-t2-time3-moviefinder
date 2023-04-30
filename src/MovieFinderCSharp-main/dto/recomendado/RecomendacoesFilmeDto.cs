namespace moviefinder.dto.recomendado;

public class RecomendacoesFilmeDto
{
    public int Id { get; set; }

    public string Title { get; set; }

    public string Original_language { get; set; }

    public string Original_title { get; set; }

    public string Overview { get; set; }

    public string Release_date { get; set; }

    public double Vote_average { get; set; }

    public int Vote_count { get; set; }

    public RecomendacoesFilmeDto(int id, string title, string originalLanguage, string originalTitle, string overview, string releaseDate, double voteAverage, int voteCount)
    {
        Id = id;
        Title = title;
        Original_language = originalLanguage;
        Original_title = originalTitle;
        Overview = overview;
        Release_date = releaseDate;
        Vote_average = voteAverage;
        Vote_count = voteCount;
    }
}