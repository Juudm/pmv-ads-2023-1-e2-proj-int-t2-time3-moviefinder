namespace moviefinder.dto.pessoa;

public class ListaPopularFilmes
{
        public int Page { get; set; }
        public List<PopularFilmeDto> Results { get; set; }
        public int Total_results { get; set; }
        public int Total_pages { get; set; }

}