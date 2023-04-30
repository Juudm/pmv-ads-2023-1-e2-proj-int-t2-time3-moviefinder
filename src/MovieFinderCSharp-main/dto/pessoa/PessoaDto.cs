namespace moviefinder.dto.pessoa;

public class PessoaDto
{
    public List<string> Also_known_as { get; set; }

    public string Biography { get; set; }

    public string Birthday { get; set; }

    public string Deathday { get; set; }

    public int Gender { get; set; }

    public int Id { get; set; }

    public string Known_for_department { get; set; }

    public string Name { get; set; }

    public string Place_of_birth { get; set; }

    public double Popularity { get; set; }

    public CreditosFilmeDto Movie_credits { get; set; }

    public PessoaDto(List<string> alsoKnownAs, string biography, string birthday, string deathday, int gender, int id, string knownForDepartment, string name, string placeOfBirth, double popularity, CreditosFilmeDto movieCredits)
    {
        Also_known_as = alsoKnownAs;
        Biography = biography;
        Birthday = birthday;
        Deathday = deathday;
        Gender = gender;
        Id = id;
        Known_for_department = knownForDepartment;
        Name = name;
        Place_of_birth = placeOfBirth;
        Popularity = popularity;
        Movie_credits = movieCredits;
    }
}