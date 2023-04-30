namespace moviefinder.dto.provedor;

public class ProvedorDto
{
    public string Provider_name { get; set; }

    public string Provider_id { get; set; }

    public ProvedorDto(string providerName, string providerId)
    {
        Provider_name = providerName;
        Provider_id = providerId;
    }
}