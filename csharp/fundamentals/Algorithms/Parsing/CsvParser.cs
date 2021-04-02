using System;
using System.Collections.Generic;
using System.IO;

namespace Algorithms.Parsing
{
    public abstract class CsvParser<TColumnType, TParsed> where TColumnType : struct
    {
        protected string FilePath
        {
            get;
            private set;
        }

        protected ICsvFileDefinition<TColumnType> Definition
        {
            get;
            private set;
        }

        public CsvParser(ICsvFileDefinition<TColumnType> definition, string filePath)
        {
            this.Definition = definition;
            this.FilePath = filePath;
        }

        public IEnumerable<TParsed> Parse()
        {
            var parsedItems = new List<TParsed>();

            var linesFromFile = new List<string>();

            try
            {
                linesFromFile.AddRange(this.GetLinesFromFile());
            }
            catch (Exception ex)
            {
                this.LogException(ex, string.Format("Unable to read lines from file {0}", this.FilePath));
                return parsedItems;
            }

            foreach (var line in linesFromFile)
            {
                try
                {
                    string[] lineTokens = this.SplitLine(line);
                    TParsed parsed = this.ParseItemFromLineTokens(lineTokens);
                    parsedItems.Add(parsed);
                }
                catch (Exception ex)
                {
                    this.LogException(ex, string.Format("Unable to parse line using the specified definitions: {0}", line));
                    continue;
                }
            }

            return parsedItems;
        }

        protected virtual string[] SplitLine(string line)
        {
            string[] lineParts = line.Split(this.Definition.Separator);

            if (this.Definition.TrimItems)
            {
                for (int i = 0; i < lineParts.Length; i++)
                {
                    lineParts[i] = lineParts[i].Trim();
                }
            }

            return lineParts;
        }

        protected virtual IEnumerable<string> GetLinesFromFile()
        {
            return File.ReadAllLines(this.FilePath);
        }

        protected abstract void LogException(Exception ex, string text);

        protected abstract TParsed ParseItemFromLineTokens(string[] lineTokens);

    }
}
