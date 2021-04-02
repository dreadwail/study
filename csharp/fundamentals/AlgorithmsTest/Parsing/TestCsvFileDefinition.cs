using System.Collections.Generic;
using Algorithms.Parsing;

namespace AlgorithmsTest.Parsing
{
    internal class TestCsvFileDefinition : ICsvFileDefinition<TestColumnType>
    {
        public char Separator { get; set; }
        public bool TrimItems { get; set; }

        public IDictionary<TestColumnType, int> ColumnMap { get; private set; }

        public TestCsvFileDefinition(char separator, bool trimItems = true)
        {
            this.ColumnMap = new Dictionary<TestColumnType, int>();
            this.ColumnMap.Add(TestColumnType.Alpha, 0);
            this.ColumnMap.Add(TestColumnType.Beta, 1);

            this.Separator = separator;
            this.TrimItems = trimItems;
        }
    }
}
