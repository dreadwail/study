using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Zorro
{
    class Program
    {
        public static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                PrintUsage();
            }
            else
            {
                int result = 0;
                if (Int32.TryParse(args[0], out result) == false)
                {
                    Console.WriteLine("Unable to parse input integer.");
                }
                else
                {
                    var zorro = new Zorro(result);
                    Console.WriteLine(zorro);
                }
            }

            Console.ReadKey();
        }

        private static void PrintUsage()
        {
            Console.WriteLine("Zorro! A program to print a Z using the alphabet.");
            Console.WriteLine("Usage: {0} <width of Z as integer>", AppDomain.CurrentDomain.FriendlyName);
        }
    }
}
