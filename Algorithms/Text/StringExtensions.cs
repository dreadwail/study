using System;

namespace Algorithms.Text
{
    public static class StringExtensions
    {
        public static string TrimPrefix(
            this string input,
            string prefix,
            StringComparison comparison = StringComparison.OrdinalIgnoreCase)
        {
            if (input.StartsWith(prefix, comparison))
            {
                return input.Substring(prefix.Length);
            }

            return input;
        }

        public static string TrimSuffix(
            this string input,
            string suffix,
            StringComparison comparison = StringComparison.OrdinalIgnoreCase)
        {
            if (input.EndsWith(suffix, comparison))
            {
                return input.Substring(0, input.Length - suffix.Length);
            }

            return input;
        }

        public static string EnsurePrefix(
            this string input,
            string prefix,
            StringComparison comparison = StringComparison.OrdinalIgnoreCase)
        {
            if (input.StartsWith(prefix))
            {
                return input;
            }

            return prefix + input;
        }

        public static string EnsureSuffix(
            this string input,
            string suffix,
            StringComparison comparison = StringComparison.OrdinalIgnoreCase)
        {
            if (input.EndsWith(suffix, comparison))
            {
                return input;
            }

            return input + suffix;
        }

        public static string Truncate(this string input, int maxLength)
        {
            if (input.Length < maxLength)
            {
                maxLength = input.Length;
            }

            return input.Substring(0, maxLength);
        }
    }
}
