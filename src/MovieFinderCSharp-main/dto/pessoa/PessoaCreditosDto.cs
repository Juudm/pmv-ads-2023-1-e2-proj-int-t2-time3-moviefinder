namespace moviefinder.dto.pessoa;

public class PessoaCreditosDto
{
    public int Id { get; set; }

    public string Original_language { get; set; }

    public string Original_title { get; set; }

    public string Overview { get; set; }

    public double Popularity { get; set; }

    public string Release_date { get; set; }

    public string Title { get; set; }

    public double Vote_average { get; set; }

    public int Vote_count { get; set; }

    public string Character { get; set; }

    public PessoaCreditosDto(int id, string originalLanguage, string originalTitle, string overview, double popularity, string releaseDate, string title, double voteAverage, int voteCount, string character)
    {
        Id = id;
        Original_language = originalLanguage;
        Original_title = originalTitle;
        Overview = overview;
        Popularity = popularity;
        Release_date = releaseDate;
        Title = title;
        Vote_average = voteAverage;
        Vote_count = voteCount;
        Character = character;
    }
}