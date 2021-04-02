using System;
using System.Collections.Generic;

namespace CashRegister
{
    /// <summary>
    /// A class to represent making change for a purchase based on amount tendered.
    /// </summary>
    public class ChangeMaker
    {
        public struct Coin : IComparable<Coin>
        {
            public string name;
            public int value;

            public int CompareTo(Coin other)
            {
                return this.value.CompareTo(other.value);
            }

            public override string ToString()
            {
                return name;
            }
        }

        private static List<Coin> denominations;

        static ChangeMaker()
        {
            denominations = new List<Coin>();
            denominations.Add(new Coin { name = "Ten", value = 1000 });
            denominations.Add(new Coin { name = "Five", value = 500 });
            denominations.Add(new Coin { name = "One", value = 100 });
            denominations.Add(new Coin { name = "Quarter", value = 25 });
            denominations.Add(new Coin { name = "Dime", value = 10 });
            denominations.Add(new Coin { name = "Nickel", value = 5 });
            denominations.Add(new Coin { name = "Penny", value = 1 });

            denominations.Sort();
            denominations.Reverse();
        }

        /// <summary>
        /// Calculates the change from the amount tendered against the price.
        /// </summary>
        /// <param name="tendered">The tendered amount.</param>
        /// <param name="price">The price.</param>
        /// <returns></returns>
        public static List<Coin> Calculate(double tendered, double price)
        {
            var found = new List<Coin>();

            int tenderedCents = (int)(tendered * 100);
            int priceCents = (int)(price * 100);

            int change = tenderedCents - priceCents;

            foreach (Coin denom in denominations)
            {
                int numOfTheseFound = 0;

                if (denom.value <= change)
                {
                    numOfTheseFound = change / denom.value;
                }

                for (int i = 0; i < numOfTheseFound; i++)
                {
                    found.Add(denom);
                }

                change = change - (numOfTheseFound * denom.value);
            }

            return found;
        }

        /// <summary>
        /// Denominations to dollar amount.
        /// </summary>
        /// <param name="denominations">The denominations.</param>
        /// <returns></returns>
        public static double DenominationsToDollarAmount(List<Coin> denominations)
        {
            int totalCents = 0;

            foreach (Coin denom in denominations)
            {
                totalCents += denom.value;
            }

            return (double)totalCents / 100;
        }
    }
}
