namespace moviefinder.dto;

public class IdiomaFaladoDto
{
    public string Iso_639_1 { get; set; }
    
    public string Name { get; set; }

    public IdiomaFaladoDto(string iso6391, string name)
    {
        Iso_639_1 = iso6391;
        Name = name;
    }
}