using System;

namespace UsersApp.DTOs
{
    public class EventDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string FeedbackFormUrl { get; set; }
        public bool IsPresent { get; set; }
    }
}
