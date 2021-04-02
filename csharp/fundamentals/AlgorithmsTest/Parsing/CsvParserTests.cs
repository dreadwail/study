using System.Collections.Generic;
using System.Linq;
using Algorithms.Parsing;
using NUnit.Framework;

namespace AlgorithmsTest.Parsing
{
    public class CsvParserTests
    {
        [Test]
        public void Items_are_properly_parsed_from_csv()
        {
            var linesInFile = new List<string>();
            linesInFile.Add("test1a, test1b");
            linesInFile.Add("test2a, test2b");

            var parser = new TestCsvParser(new TestCsvFileDefinition(','), "", linesInFile);

            IEnumerable<TestParsedItem> parsedItems = parser.Parse();

            Assert.True(parsedItems.Any(i => i.Alpha == "test1a" && i.Beta == "test1b"));
            Assert.True(parsedItems.Any(i => i.Alpha == "test2a" && i.Beta == "test2b"));
        }

        [Test]
        public void Non_trimming_definition_produces_non_trimmed_items()
        {
            var linesInFile = new List<string>();
            linesInFile.Add("test1a, test1b");
            linesInFile.Add("test2a, test2b");

            var parser = new TestCsvParser(new TestCsvFileDefinition(',', false), "", linesInFile);

            IEnumerable<TestParsedItem> parsedItems = parser.Parse();

            Assert.True(parsedItems.Any(i => i.Alpha == "test1a" && i.Beta == " test1b"));
            Assert.True(parsedItems.Any(i => i.Alpha == "test2a" && i.Beta == " test2b"));
        }

        [Test]
        public void Separator_in_definition_produces_appropriate_items()
        {
            var linesInFile = new List<string>();
            linesInFile.Add("test1a, test1b; test1c");
            linesInFile.Add("test2a, test2b; test2c");

            var testDefinition = new TestCsvFileDefinition(';');

            var parser = new TestCsvParser(testDefinition, "", linesInFile);

            IEnumerable<TestParsedItem> parsedItems = parser.Parse();

            Assert.True(parsedItems.Any(i => i.Alpha == "test1a, test1b" && i.Beta == "test1c"));
            Assert.True(parsedItems.Any(i => i.Alpha == "test2a, test2b" && i.Beta == "test2c"));
        }

        [Test]
        public void Invalid_csv_line_produces_no_entry()
        {
            var linesInFile = new List<string>();
            linesInFile.Add("test1a, test1b");
            linesInFile.Add("");

            var testDefinition = new TestCsvFileDefinition(',');

            var parser = new TestCsvParser(testDefinition, "", linesInFile);

            IEnumerable<TestParsedItem> parsedItems = parser.Parse();

			Assert. AreEqual (1, parsedItems.Count());
        }

        [Test]
        public void Undefined_csv_information_in_line_is_ignored()
        {
            var linesInFile = new List<string>();
            linesInFile.Add("test1a, test1b, test1c");

            var testDefinition = new TestCsvFileDefinition(',');

            var parser = new TestCsvParser(testDefinition, "", linesInFile);

            IEnumerable<TestParsedItem> parsedItems = parser.Parse();

            Assert.True(parsedItems.Any(i => i.Alpha == "test1a" && i.Beta == "test1b"));
        }
    }
}
