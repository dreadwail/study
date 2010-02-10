using System.Text.RegularExpressions;

namespace Algorithms.Text
{
    public class SlugMaker
    {
        private const int DefaultMaxLength = 75;

        private static readonly Regex Blacklist =
            new Regex(@"[^a-z0-9\s-]", RegexOptions.Compiled);

        private static readonly Regex SingleWhitespace =
            new Regex(@"\s", RegexOptions.Compiled);

        private static readonly Regex MultipleWhitespace =
            new Regex(@"[\s-]+", RegexOptions.Compiled);

        private readonly int maxLength;

        public SlugMaker(int maxLength = DefaultMaxLength)
        {
            this.maxLength = maxLength;
        }

        public string CreateSlug(string input)
        {
            input = input.ToLower();
            input = Blacklist.Replace(input, "");
            input = MultipleWhitespace.Replace(input, " ");
            input = input.Truncate(this.maxLength);
            input = input.Trim();
            input = SingleWhitespace.Replace(input, "-");

            return input;
        }
    }
}
