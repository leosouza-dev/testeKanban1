using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testeKanban1.Hubs
{
    public class KanbanHub : Hub
    {
        public async Task CreateItem(string title)
        {
            await Clients.All.SendAsync("UpdateTable", title);
        }
    }
}
