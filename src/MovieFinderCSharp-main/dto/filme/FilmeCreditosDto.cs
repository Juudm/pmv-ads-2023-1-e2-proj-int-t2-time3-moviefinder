namespace moviefinder.dto;

public class FilmeCreditosDto
{
    public List<CreditosDto> Cast { get; set; }
    
    public List<CreditosDto> Crew { get; set; }

    public FilmeCreditosDto(List<CreditosDto> cast, List<CreditosDto> crew)
    {
        this.Cast = cast;
        this.Crew = crew;
    }
}