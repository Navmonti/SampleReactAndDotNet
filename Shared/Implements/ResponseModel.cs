using SampleReactAndDotNet.Shared.Interface;

namespace SampleReactAndDotNet.Shared.Implements
{
    public class ResponseModel<T> : IResponseModel<T>
    {
        public required bool IsSuccessful { get; set; } = false;
        public required string Message { get; set; } = string.Empty;
        public required T Model { get; set; } 
    }
}
