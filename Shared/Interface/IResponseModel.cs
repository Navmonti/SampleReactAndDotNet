namespace SampleReactAndDotNet.Shared.Interface
{
    public interface IResponseModel<T> 
    {
        bool IsSuccessful { get; }
        string Message { get; }
        T Model { get; }
    }
}
