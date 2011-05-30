using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace CashRegister
{
    public partial class CashRegister : Form
    {
        public CashRegister()
        {
            this.InitializeComponent();
            this.Reset();
        }

        private void Reset()
        {
            this.txtPrice.Text = "";
            this.txtTendered.Text = "";
            this.lblOutput.Text = "";
        }

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Reset();
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("A simple change-making cash register application." +
                Environment.NewLine +
                Environment.NewLine +
                "Written by Ben Lakey.", "About", MessageBoxButtons.OK);
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            this.Reset();
        }

        private void txtPrice_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (this.IsAllowedChar(e.KeyChar) == false || e.KeyChar.ToString() == "." && this.txtPrice.Text.Contains("."))
            {
                e.Handled = true;
            }
        }

        private void txtTendered_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (this.IsAllowedChar(e.KeyChar) == false || e.KeyChar.ToString() == "." && this.txtTendered.Text.Contains("."))
            {
                e.Handled = true;
            }
        }

        private bool IsAllowedChar(char suspect)
        {
            if (char.IsDigit(suspect) || suspect == '.' || Char.IsControl(suspect))
            {
                return true;
            }

            return false;
        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            if (this.txtTendered.Text.Length == 0)
            {
                this.txtTendered.Text = "0.00";
            }

            if (this.txtPrice.Text.Length == 0)
            {
                this.txtPrice.Text = "0.00";
            }

            double tendered = 0.00;
            double price = 0.00;

            double result = 0.0;
            if (double.TryParse(txtTendered.Text, out result) == true)
            {
                tendered = result;
            }
            
            result = 0.0;
            if (double.TryParse(txtPrice.Text, out result) == true)
            {
                price = result;
            }
            
            List<ChangeMaker.Coin> change = ChangeMaker.Calculate(tendered, price);

            var toReturn = new Dictionary<ChangeMaker.Coin, int>();
            foreach (ChangeMaker.Coin thisDenom in change)
            {
                if (toReturn.ContainsKey(thisDenom))
                {
                    toReturn[thisDenom]++;
                }
                else
                {
                    toReturn.Add(thisDenom, 1);
                }
            }

            string total = String.Format("{0:C}", ChangeMaker.DenominationsToDollarAmount(change));

            this.lblOutput.Text = "";
            this.lblOutput.Text += "Total: " + total + Environment.NewLine;
            this.lblOutput.Text += Environment.NewLine;
            this.lblOutput.Text += "Return:" + Environment.NewLine;

            foreach (KeyValuePair<ChangeMaker.Coin, int> keyval in toReturn)
            {
                this.lblOutput.Text += keyval.Value + " of " + keyval.Key.ToString() + Environment.NewLine;
            }

        }
    }
}
