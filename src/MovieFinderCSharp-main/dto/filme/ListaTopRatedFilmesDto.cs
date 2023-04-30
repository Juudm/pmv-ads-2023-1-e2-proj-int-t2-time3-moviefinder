namespace moviefinder.dto.pessoa;

public class ListaTopRatedFilmesDto
{
    public int Page { get; set; }
    public List<TopRatedFilmesDto> Results { get; set; }
    public int Total_results { get; set; }
    public int Total_pages { get; set; }

}