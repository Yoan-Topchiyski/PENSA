using System;

namespace UsersApp.DTOs
{
    public class EventUploadRequest
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string FeedbackFormUrl { get; set; }
    }
}
