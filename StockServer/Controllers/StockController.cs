using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using StockServer.Hubs;
using StockServer.Utils;

namespace StockServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private IHubContext<StockHub> _stockHub;

        public StockController(IHubContext<StockHub> stockHub)
        {
            _stockHub = stockHub;
        }

        public IActionResult Get()
        {
            var data = new ReadData(() =>
                _stockHub.Clients.All.SendAsync("Stock Data", MockData.GetStockData()));

            return Ok(new { Message = "Request Completed" });
        }
    }
}