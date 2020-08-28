using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockServer.Models
{
    public class Stock
    {
        private decimal _price;

        public string Symbol { get; set; }

        public decimal Price
        {
            get
            {
                return _price;
            }
            set
            {
                if (_price == value)
                {
                    return;
                }

                _price = value;

                if (DayOpen == 0)
                {
                    DayOpen = _price;
                }
            }
        }

        public decimal DayOpen { get; private set; }

        public decimal Change
        {
            get
            {
                return Price - DayOpen;
            }
        }
    }
}
