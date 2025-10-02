namespace SampleReactAndDotNet.Shared.Dtos
{
    public class FilterModel
    {
        public string Name { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public int? FromAge { get; set; }
        public int? ToAge { get; set; }  
    }
}
