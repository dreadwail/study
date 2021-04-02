using System;
using System.Security.Cryptography;
using System.Text;

namespace Algorithms.Crypto
{
    public class PasswordHasher
    {
        private const int MinSaltSize = 4;
        private const int MaxSaltSize = 10;

        private readonly HashAlgorithm hashAlgorithm;

        public PasswordHasher(HashAlgorithm hashAlgorithm)
        {
            this.hashAlgorithm = hashAlgorithm;
        }

        public string ComputeHash(string input, byte[] salt)
        {
            if (salt.Length == 0)
            {
                throw new ArgumentException("Salt cannot be empty.");
            }

            var inputBytes = Encoding.UTF8.GetBytes(input);

            var saltedInputBytes = new byte[salt.Length + inputBytes.Length];

            salt.CopyTo(saltedInputBytes, 0);
            inputBytes.CopyTo(saltedInputBytes, salt.Length);

            var hashedBytes = this.hashAlgorithm.ComputeHash(saltedInputBytes);

            return BitConverter.ToString(hashedBytes);
        }

        public static byte[] GenerateSalt()
        {
            var random = new Random();
            int saltSize = random.Next(MinSaltSize, MaxSaltSize);

            var saltBytes = new byte[saltSize];

            using (var randomCryptoByteGenerator = new RNGCryptoServiceProvider())
            {
                randomCryptoByteGenerator.GetNonZeroBytes(saltBytes);
            }

            return saltBytes;
        }
    }
}
