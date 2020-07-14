using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testeKanban1.Models
{
    public class Item
    {
        public Item()
        {
            Status = ItemStatus.todo;
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public ItemStatus Status { get; set; }


    }
}
