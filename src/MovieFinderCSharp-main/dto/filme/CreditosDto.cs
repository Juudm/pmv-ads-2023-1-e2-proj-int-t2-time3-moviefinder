using System.Text.Json.Serialization;

namespace moviefinder.dto;

public class CreditosDto
{
    public int Id { get; set; }
    
    public string Known_for_department { get; set; }

    public string Name { get; set; }

    public string Original_name { get; set; }

    public double Popularity { get; set; }

    public string Department { get; set; }

    public string Job { get; set; }

    public CreditosDto(int id, string knownForDepartment, string name, string originalName, double popularity, string department, string job)
    {
        Id = id;
        Known_for_department = knownForDepartment;
        Name = name;
        Original_name = originalName;
        Popularity = popularity;
        Department = department;
        Job = job;
    }
}