using StockServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockServer.Utils
{
    public class MockData
    {
        public static List<Stock> GetStockData()
        {
            var r = new Random();
            var stocks = new List<Stock>
            {
                new Stock { Symbol = "MSFT", Price = r.Next(0, 100)},
                new Stock { Symbol = "APPL", Price = r.Next(0, 100)},
                new Stock { Symbol = "GOOG", Price = r.Next(0, 100)}
            };

            return stocks;
        }
    }
}
