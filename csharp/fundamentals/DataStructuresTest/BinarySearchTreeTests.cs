using System;
using System.Collections.Generic;
using DataStructures;
using NUnit.Framework;

namespace DataStructuresTest
{
	[TestFixture]
    public class BinarySearchTreeTests
    {
		[Test]
        public void HeightTest()
        {
            var bst = new BinarySearchTree<int, string>();

			Assert.AreEqual(0, bst.Height);
            try
            {
                bst.Remove(92142);
            }
            catch { }
			Assert.AreEqual(0, bst.Height);

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");
			Assert.AreEqual(3, bst.Height);
            bst.Remove(25);
			Assert.AreEqual(3, bst.Height);
            bst.Remove(35);
			Assert.AreEqual(3, bst.Height);
            bst.Remove(65);
			Assert.AreEqual(3, bst.Height);
            bst.Remove(75);
			Assert.AreEqual(2, bst.Height);
            bst.Clear();
			Assert.AreEqual(0, bst.Height);
        }

		[Test]
        public void KeysTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            Assert.AreEqual(7, bst.Keys.Count);
            Assert.AreEqual(true, bst.ContainsKey(50));
            Assert.AreEqual(true, bst.ContainsKey(70));
            Assert.AreEqual(true, bst.ContainsKey(30));
            Assert.AreEqual(true, bst.ContainsKey(35));
            Assert.AreEqual(true, bst.ContainsKey(25));
            Assert.AreEqual(true, bst.ContainsKey(65));
            Assert.AreEqual(true, bst.ContainsKey(75));
            Assert.AreEqual(false, bst.ContainsKey(555));

            bst.Clear();

            Assert.AreEqual(0, bst.Keys.Count);
        }

		[Test]
        public void ValuesTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            Assert.AreEqual(7, bst.Values.Count);
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(50, "Alpha50")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(70, "Alpha70")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(30, "Alpha30")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(35, "Alpha35")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(25, "Alpha25")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(65, "Alpha65")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(75, "Alpha75")));
            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(50, "Blarg")));
            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(5552350, "Alpha50")));

            bst.Clear();

            Assert.AreEqual(0, bst.Values.Count);
        }

        [Test]
        public void CountTest()
        {
            var bst = new BinarySearchTree<int, string>();

            Assert.AreEqual(0, bst.Count);
            try
            {
                bst.Remove(56666);
            }
            catch { }
            Assert.AreEqual(0, bst.Count);
            bst.Add(50, "Alpha50");
            Assert.AreEqual(1, bst.Count);
            bst.Add(70, "Alpha70");
            Assert.AreEqual(2, bst.Count);
            bst.Add(30, "Alpha30");
            Assert.AreEqual(3, bst.Count);
            bst.Add(35, "Alpha35");
            Assert.AreEqual(4, bst.Count);
            bst.Add(25, "Alpha25");
            Assert.AreEqual(5, bst.Count);
            bst.Add(65, "Alpha65");
            Assert.AreEqual(6, bst.Count);
            bst.Add(75, "Alpha75");
            Assert.AreEqual(7, bst.Count);
            bst.Remove(50);
            Assert.AreEqual(6, bst.Count);
            bst.Remove(70);
            bst.Remove(30);
            bst.Remove(35);
            bst.Remove(25);
            bst.Remove(65);
            bst.Remove(75);
            Assert.AreEqual(0, bst.Count);
        }

        [Test]
        public void ByIndexTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            Assert.AreEqual("Alpha50", bst[50]);
            Assert.AreEqual("Alpha70", bst[70]);
            Assert.AreEqual("Alpha30", bst[30]);
            Assert.AreEqual("Alpha35", bst[35]);
            Assert.AreEqual("Alpha25", bst[25]);
            Assert.AreEqual("Alpha65", bst[65]);
            Assert.AreEqual("Alpha75", bst[75]);

            bst.Remove(50);
            bst.Remove(70);
            bst.Remove(30);
            bst.Remove(35);
            bst.Remove(25);
            bst.Remove(65);
            bst.Remove(75);

            Assert.Throws<KeyNotFoundException>(
                () =>
                {
					Assert.AreNotEqual("Alpha50", bst[50]);
                });
        }

        [Test]
        public void TryGetValueTest()
        {
            var bst = new BinarySearchTree<int, string>();

            string output = "";
            Assert.AreEqual(false, bst.TryGetValue(555, out output));
            output = "";
            bst.Add(50, "Alpha50");
            Assert.AreEqual(true, bst.TryGetValue(50, out output));
            Assert.AreEqual("Alpha50", output);
            output = "";
            bst.Add(70, "Alpha70");
            Assert.AreEqual(true, bst.TryGetValue(70, out output));
            Assert.AreEqual("Alpha70", output);
        }

        [Test]
        public void ClearTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Clear();
            Assert.AreEqual(0, bst.Count);
            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");
            Assert.AreEqual(7, bst.Count);
            bst.Clear();
            Assert.AreEqual(0, bst.Count);
        }

        [Test]
        public void AddTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");
            bst.Add(98, "Alpha98");
            bst.Add(1, "Alpha1");
            bst.Add(1, "Alpha1");

            Random rnd = new Random();

            for (int i = 1; i < 10000; i++)
            {
                bst.Add(rnd.Next(0, 1000), "Alpha" + i);
            }

            Assert.AreEqual(true, bst.ContainsKey(98));
            Assert.AreEqual(true, bst.ContainsKey(1));
            Assert.AreEqual(false, bst.ContainsKey(55555123));

        }

        [Test]
        public void ContainsKeyTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");
            bst.Add(98, "Alpha98");
            bst.Add(1, "Alpha1");

            Assert.AreEqual(true, bst.ContainsKey(50));
            Assert.AreEqual(true, bst.ContainsKey(70));
            Assert.AreEqual(true, bst.ContainsKey(30));
            Assert.AreEqual(true, bst.ContainsKey(35));
            Assert.AreEqual(true, bst.ContainsKey(25));
            Assert.AreEqual(true, bst.ContainsKey(65));
            Assert.AreEqual(true, bst.ContainsKey(75));

            Assert.AreEqual(false, bst.ContainsKey(51));
            Assert.AreEqual(false, bst.ContainsKey(43));
            Assert.AreEqual(false, bst.ContainsKey(77));
        }

        [Test]
        public void ContainsTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");
            bst.Add(98, "Alpha98");
            bst.Add(1, "Alpha1");

            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(50, "Alpha50")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(70, "Alpha70")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(30, "Alpha30")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(35, "Alpha35")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(25, "Alpha25")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(65, "Alpha65")));
            Assert.AreEqual(true, bst.Contains(new KeyValuePair<int, string>(75, "Alpha75")));

            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(51, "Alpha51")));
            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(43, "Alpha43")));
            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(77, "Alpha77")));

            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(65, "Alpha777777")));
            Assert.AreEqual(false, bst.Contains(new KeyValuePair<int, string>(75, "Alpha723435")));
        }

        [Test]
        public void RemoveTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            bst.Remove(75);
            bst.Remove(30);

            Assert.AreEqual(true, bst.ContainsKey(50));
            Assert.AreEqual(true, bst.ContainsKey(70));
            Assert.AreEqual(false, bst.ContainsKey(30));
            Assert.AreEqual(true, bst.ContainsKey(35));
            Assert.AreEqual(true, bst.ContainsKey(25));
            Assert.AreEqual(true, bst.ContainsKey(65));
            Assert.AreEqual(false, bst.ContainsKey(75));
        }

        [Test]
        public void CopyToTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            KeyValuePair<int, string>[] arr = new KeyValuePair<int, string>[7];

            bst.TraversalType = TreeTraversalType.LevelOrder;

            bst.CopyTo(arr, 0);

            Assert.AreEqual(50, arr[0].Key);
            Assert.AreEqual("Alpha50", arr[0].Value);

            Assert.AreEqual(30, arr[1].Key);
            Assert.AreEqual("Alpha30", arr[1].Value);

            Assert.AreEqual(70, arr[2].Key);
            Assert.AreEqual("Alpha70", arr[2].Value);

            Assert.AreEqual(25, arr[3].Key);
            Assert.AreEqual("Alpha25", arr[3].Value);

            Assert.AreEqual(35, arr[4].Key);
            Assert.AreEqual("Alpha35", arr[4].Value);

            Assert.AreEqual(65, arr[5].Key);
            Assert.AreEqual("Alpha65", arr[5].Value);

            Assert.AreEqual(75, arr[6].Key);
            Assert.AreEqual("Alpha75", arr[6].Value);
        }

        [Test]
        public void ForEachEnumeratorTest()
        {
            var bst = new BinarySearchTree<int, string>();

            bst.Add(50, "Alpha50");
            bst.Add(70, "Alpha70");
            bst.Add(30, "Alpha30");
            bst.Add(35, "Alpha35");
            bst.Add(25, "Alpha25");
            bst.Add(65, "Alpha65");
            bst.Add(75, "Alpha75");

            bst.TraversalType = TreeTraversalType.PreOrder;

            System.Collections.Generic.List<int> lst = new System.Collections.Generic.List<int>();
            foreach (KeyValuePair<int, string> thisOne in bst)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(50, lst[0]);
            Assert.AreEqual(30, lst[1]);
            Assert.AreEqual(25, lst[2]);
            Assert.AreEqual(35, lst[3]);
            Assert.AreEqual(70, lst[4]);
            Assert.AreEqual(65, lst[5]);
            Assert.AreEqual(75, lst[6]);

            lst.Clear();

            bst.TraversalType = TreeTraversalType.PostOrder;
            foreach (KeyValuePair<int, string> thisOne in bst)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(30, lst[0]);
            Assert.AreEqual(25, lst[1]);
            Assert.AreEqual(35, lst[2]);
            Assert.AreEqual(70, lst[3]);
            Assert.AreEqual(65, lst[4]);
            Assert.AreEqual(75, lst[5]);
            Assert.AreEqual(50, lst[6]);

            lst.Clear();

            bst.TraversalType = TreeTraversalType.InOrder;
            foreach (KeyValuePair<int, string> thisOne in bst)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(30, lst[0]);
            Assert.AreEqual(25, lst[1]);
            Assert.AreEqual(35, lst[2]);
            Assert.AreEqual(50, lst[3]);
            Assert.AreEqual(70, lst[4]);
            Assert.AreEqual(65, lst[5]);
            Assert.AreEqual(75, lst[6]);

            lst.Clear();

            bst.TraversalType = TreeTraversalType.LevelOrder;
            foreach (KeyValuePair<int, string> thisOne in bst)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(50, lst[0]);
            Assert.AreEqual(30, lst[1]);
            Assert.AreEqual(70, lst[2]);
            Assert.AreEqual(25, lst[3]);
            Assert.AreEqual(35, lst[4]);
            Assert.AreEqual(65, lst[5]);
            Assert.AreEqual(75, lst[6]);

        }
    }
}
