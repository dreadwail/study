using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LetterHistogram
{
    class LetterHistogram
    {
        private string input;
        private int largestCount;
        private Dictionary<char, int> counts;

        public LetterHistogram(string input)
        {
            this.input = input;
            this.counts = new Dictionary<char, int>();
        }

        public void Process()
        {
            foreach (char c in input)
            {
                if (counts.ContainsKey(c))
                {
                    counts[c]++;
                    if (counts[c] > largestCount)
                        largestCount = counts[c];
                }
                else
                {
                    counts.Add(c, 1);
                }
            }
        }

        public override string ToString()
        {
            var stringBuilder = new StringBuilder();

            for (int i = largestCount; i > 0; i--)
            {
                for (char c = 'a'; c <= 'z'; c++)
                {
                    if (counts.ContainsKey(c) && counts[c] >= i)
                    {
                        stringBuilder.Append("*");
                    }
                    else
                    {
                        stringBuilder.Append(" ");
                    }
                }

                stringBuilder.AppendLine();
            }

            for (char c = 'a'; c <= 'z'; c++)
            {
                stringBuilder.Append(c);
            }

            stringBuilder.AppendLine();

            return stringBuilder.ToString();
        }
    }
}
