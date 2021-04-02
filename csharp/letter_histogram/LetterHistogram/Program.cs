using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LetterHistogram
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                PrintUsage();
                return;
            }

            string toParse = string.Concat(args);

            var histogram = new LetterHistogram(toParse);
            histogram.Process();

            Console.WriteLine(histogram);

            Console.ReadKey();
        }

        private static void PrintUsage()
        {
            Console.WriteLine("Letter Histogram! Prints a histogram representing the count of each letter in a string.");
            Console.WriteLine("Usage: " + AppDomain.CurrentDomain.FriendlyName + " <string>");
        }
    }
}
