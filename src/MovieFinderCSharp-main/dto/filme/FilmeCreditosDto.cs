using moviefinder.dto.filme;

namespace moviefinder.dto;

public class FilmeCreditosDto
{
    public List<CreditosAtoresDto> Cast { get; set; }
    
    public List<CreditosEquipeDto> Crew { get; set; }

    public FilmeCreditosDto(List<CreditosAtoresDto> cast, List<CreditosEquipeDto> crew)
    {
        this.Cast = cast;
        this.Crew = crew;
    }
}