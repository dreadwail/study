using System;
using System.Collections.Generic;
using Algorithms.Parsing;

namespace AlgorithmsTest.Parsing
{
    internal class TestCsvParser : CsvParser<TestColumnType, TestParsedItem>
    {
        private IEnumerable<string> linesInFile;

        public TestCsvParser(ICsvFileDefinition<TestColumnType> definition, string filePath, IEnumerable<string> linesInFile)
            : base(definition, filePath)
        {
            this.linesInFile = linesInFile;
        }

        protected override IEnumerable<string> GetLinesFromFile()
        {
            return this.linesInFile;
        }

        protected override TestParsedItem ParseItemFromLineTokens(string[] lineTokens)
        {
            string alpha = lineTokens[this.Definition.ColumnMap[TestColumnType.Alpha]];
            string beta = lineTokens[this.Definition.ColumnMap[TestColumnType.Beta]];

            return new TestParsedItem()
            {
                Alpha = alpha,
                Beta = beta
            };
        }

        protected override void LogException(Exception ex, string text)
        {
        }
    }
}
