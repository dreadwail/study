using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Zorro
{
    public class Zorro
    {
        private int size;

        public Zorro(int size)
        {
            this.size = size;
        }

        public override string ToString()
        {
            var stringBuilder = new StringBuilder();

            stringBuilder.AppendLine();

            char c = 'z';
            int posX = 0;

            for (posX = 0; posX < this.size; posX++)
            {
                stringBuilder.Append(c = (c == 'z' ? 'a' : ++c));
            }

            stringBuilder.AppendLine();

            for (posX = this.size - 2; posX > 0; posX--)
            {
                for (int i = 0; i < posX; i++)
                {
                    stringBuilder.Append(" ");
                }

                stringBuilder.AppendLine((c = (c == 'z' ? 'a' : ++c)).ToString());
            }

            for (posX = 0; posX < this.size; posX++)
            {
                stringBuilder.Append(c = (c == 'z' ? 'a' : ++c));
            }

            stringBuilder.AppendLine();

            return stringBuilder.ToString();
        }
    }
}
