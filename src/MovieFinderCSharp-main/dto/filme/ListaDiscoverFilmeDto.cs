namespace moviefinder.dto.pessoa;

public class ListaDiscoverFilmeDto
{
    public int Page { get; set; }
    public List<DiscoverFilmeDto> Results { get; set; }
    public int Total_results { get; set; }
    public int Total_pages { get; set; }

}