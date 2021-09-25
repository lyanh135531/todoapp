using System.ComponentModel.DataAnnotations;

namespace Todo.DB
{
    public class Todos
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }
        public bool Check { get; set; }
        public bool Mark { get; set; }
    }
}
