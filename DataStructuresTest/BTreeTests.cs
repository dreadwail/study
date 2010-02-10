using System.Collections.Generic;
using DataStructures;
using NUnit.Framework;

namespace DataStructuresTest
{
    public class BTreeTests
    {
        [Test]
        public void KeysTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            Assert.AreEqual(7, bt.Keys.Count);
            Assert.AreEqual(true, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(70));
            Assert.AreEqual(true, bt.ContainsKey(30));
            Assert.AreEqual(true, bt.ContainsKey(35));
            Assert.AreEqual(true, bt.ContainsKey(25));
            Assert.AreEqual(true, bt.ContainsKey(65));
            Assert.AreEqual(true, bt.ContainsKey(75));
            Assert.AreEqual(false, bt.ContainsKey(555));

            bt.Clear();

            Assert.AreEqual(0, bt.Keys.Count);
        }

        [Test]
        public void ValuesTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            Assert.AreEqual(7, bt.Values.Count);
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(50, "Alpha50")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(70, "Alpha70")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(30, "Alpha30")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(35, "Alpha35")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(25, "Alpha25")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(65, "Alpha65")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(75, "Alpha75")));
            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(50, "Blarg")));
            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(5552350, "Alpha50")));

            bt.Clear();

            Assert.AreEqual(0, bt.Values.Count);
        }

        [Test]
        public void CountTest()
        {
            var bt = new BTree<int, string>(8);

            Assert.AreEqual(0, bt.Count);
            bt.Add(50, "Alpha50");
            Assert.AreEqual(1, bt.Count);
            bt.Add(70, "Alpha70");
            Assert.AreEqual(2, bt.Count);
            bt.Add(30, "Alpha30");
            Assert.AreEqual(3, bt.Count);
            bt.Add(35, "Alpha35");
            Assert.AreEqual(4, bt.Count);
            bt.Add(25, "Alpha25");
            Assert.AreEqual(5, bt.Count);
            bt.Add(65, "Alpha65");
            Assert.AreEqual(6, bt.Count);
            bt.Add(75, "Alpha75");
            Assert.AreEqual(7, bt.Count);
            bt.Remove(50);
            Assert.AreEqual(6, bt.Count);
            bt.Remove(70);
            bt.Remove(30);
            bt.Remove(35);
            bt.Remove(25);
            bt.Remove(65);
            bt.Remove(75);
            Assert.AreEqual(0, bt.Count);
        }

        [Test]
        public void ByIndexTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            Assert.AreEqual("Alpha50", bt[50]);
            Assert.AreEqual("Alpha70", bt[70]);
            Assert.AreEqual("Alpha30", bt[30]);
            Assert.AreEqual("Alpha35", bt[35]);
            Assert.AreEqual("Alpha25", bt[25]);
            Assert.AreEqual("Alpha65", bt[65]);
            Assert.AreEqual("Alpha75", bt[75]);

            Assert.Throws<KeyNotFoundException>(
                () =>
                {
					Assert.AreNotEqual("Alpha540", bt[540]);
                });
        }

        [Test]
        public void TryGetValueTest()
        {
            var bt = new BTree<int, string>(8);

            string output = "";
            Assert.AreEqual(false, bt.TryGetValue(555, out output));
            output = "";
            bt.Add(50, "Alpha50");
            Assert.AreEqual(true, bt.TryGetValue(50, out output));
            Assert.AreEqual("Alpha50", output);
            output = "";
            bt.Add(70, "Alpha70");
            Assert.AreEqual(true, bt.TryGetValue(70, out output));
            Assert.AreEqual("Alpha70", output);
        }

        [Test]
        public void ClearTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Clear();
            Assert.AreEqual(0, bt.Count);
            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");
            Assert.AreEqual(7, bt.Count);
            bt.Clear();
            Assert.AreEqual(0, bt.Count);
        }

        [Test]
        public void AddTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");
            bt.Add(98, "Alpha98");

            //List<int> addedKeys = new List<int>();

            //Random rnd = new Random();

            //for (int i = 1; i < 1000; i++)
            //{
            //    int key = rnd.Next(200, 2000);
            //    string val = "Alpha" + key;
            //    bt.Add(key, val);
            //    addedKeys.Add(key);
            //    //Console.WriteLine("added " + key);
            //}

            Assert.AreEqual(true, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(70));
            Assert.AreEqual(true, bt.ContainsKey(30));
            Assert.AreEqual(true, bt.ContainsKey(35));
            Assert.AreEqual(true, bt.ContainsKey(25));
            Assert.AreEqual(true, bt.ContainsKey(65));
            Assert.AreEqual(true, bt.ContainsKey(75));
            Assert.AreEqual(true, bt.ContainsKey(98));
            Assert.AreEqual(false, bt.ContainsKey(99999999));

            //foreach (int addedKey in addedKeys)
            //    Assert.AreEqual(true, bt.ContainsKey(addedKey));

            //Assert.AreEqual(false, bt.ContainsKey(110));
            //Assert.AreEqual(false, bt.ContainsKey(150));
            //Assert.AreEqual(false, bt.ContainsKey(180));

        }

        [Test]
        public void ContainsKeyTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");
            bt.Add(98, "Alpha98");
            bt.Add(1, "Alpha1");

            Assert.AreEqual(true, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(70));
            Assert.AreEqual(true, bt.ContainsKey(30));
            Assert.AreEqual(true, bt.ContainsKey(35));
            Assert.AreEqual(true, bt.ContainsKey(25));
            Assert.AreEqual(true, bt.ContainsKey(65));
            Assert.AreEqual(true, bt.ContainsKey(75));

            Assert.AreEqual(false, bt.ContainsKey(51));
            Assert.AreEqual(false, bt.ContainsKey(43));
            Assert.AreEqual(false, bt.ContainsKey(77));
        }

        [Test]
        public void ContainsTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");
            bt.Add(98, "Alpha98");
            bt.Add(1, "Alpha1");

            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(50, "Alpha50")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(70, "Alpha70")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(30, "Alpha30")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(35, "Alpha35")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(25, "Alpha25")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(65, "Alpha65")));
            Assert.AreEqual(true, bt.Contains(new KeyValuePair<int, string>(75, "Alpha75")));

            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(51, "Alpha51")));
            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(43, "Alpha43")));
            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(77, "Alpha77")));

            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(65, "Alpha777777")));
            Assert.AreEqual(false, bt.Contains(new KeyValuePair<int, string>(75, "Alpha723435")));

        }

        [Test]
        public void RemoveInternalTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            bt.Remove(50);

            Assert.AreEqual(false, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(70));
            Assert.AreEqual(true, bt.ContainsKey(30));
            Assert.AreEqual(true, bt.ContainsKey(35));
            Assert.AreEqual(true, bt.ContainsKey(25));
            Assert.AreEqual(true, bt.ContainsKey(65));
            Assert.AreEqual(true, bt.ContainsKey(75));
        }

        [Test]
        public void RemoveLeafStealSiblingTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "50");
            bt.Add(49, "49");
            bt.Add(48, "48");
            bt.Add(47, "47");
            bt.Add(46, "46");
            bt.Add(45, "45");

            bt.Remove(48);

            Assert.AreEqual(true, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(49));
            Assert.AreEqual(false, bt.ContainsKey(48));
            Assert.AreEqual(true, bt.ContainsKey(47));
            Assert.AreEqual(true, bt.ContainsKey(46));
            Assert.AreEqual(true, bt.ContainsKey(45));
        }

        [Test]
        public void RemoveLeafStealParentTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "50");
            bt.Add(49, "49");
            bt.Add(48, "48");
            bt.Add(47, "47");
            bt.Add(46, "46");
            bt.Add(45, "45");

            bt.Remove(50);

            Assert.AreEqual(false, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(49));
            Assert.AreEqual(true, bt.ContainsKey(48));
            Assert.AreEqual(true, bt.ContainsKey(47));
            Assert.AreEqual(true, bt.ContainsKey(46));
            Assert.AreEqual(true, bt.ContainsKey(45));
        }

        [Test]
        public void RemoveLeafFuseRootTest()
        {
            var bt = new BTree<int, string>(8);

            bt.Add(50, "50");
            bt.Add(49, "49");
            bt.Add(48, "48");
            bt.Add(47, "47");
            bt.Add(46, "46");
            bt.Add(45, "45");
            bt.Add(44, "44");
            bt.Add(43, "43");
            bt.Add(42, "42");

            bt.Remove(43);

            Assert.AreEqual(true, bt.ContainsKey(50));
            Assert.AreEqual(true, bt.ContainsKey(49));
            Assert.AreEqual(true, bt.ContainsKey(48));
            Assert.AreEqual(true, bt.ContainsKey(47));
            Assert.AreEqual(true, bt.ContainsKey(46));
            Assert.AreEqual(true, bt.ContainsKey(45));
            Assert.AreEqual(true, bt.ContainsKey(44));
            Assert.AreEqual(false, bt.ContainsKey(43));
            Assert.AreEqual(true, bt.ContainsKey(42));
        }

        [Test]
        public void CopyToTest()
        {
            var bt = new BTree<int, string>(4);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            KeyValuePair<int, string>[] arr = new KeyValuePair<int, string>[7];

            bt.TraversalType = TreeTraversalType.LevelOrder;

            bt.CopyTo(arr, 0);

            Assert.AreEqual(50, arr[0].Key);
            Assert.AreEqual("Alpha50", arr[0].Value);

            Assert.AreEqual(25, arr[1].Key);
            Assert.AreEqual("Alpha25", arr[1].Value);

            Assert.AreEqual(30, arr[2].Key);
            Assert.AreEqual("Alpha30", arr[2].Value);

            Assert.AreEqual(35, arr[3].Key);
            Assert.AreEqual("Alpha35", arr[3].Value);

            Assert.AreEqual(65, arr[4].Key);
            Assert.AreEqual("Alpha65", arr[4].Value);

            Assert.AreEqual(70, arr[5].Key);
            Assert.AreEqual("Alpha70", arr[5].Value);

            Assert.AreEqual(75, arr[6].Key);
            Assert.AreEqual("Alpha75", arr[6].Value);
        }

        [Test]
        public void ForEachEnumeratorTest()
        {
            var bt = new BTree<int, string>(4);

            bt.Add(50, "Alpha50");
            bt.Add(70, "Alpha70");
            bt.Add(30, "Alpha30");
            bt.Add(35, "Alpha35");
            bt.Add(25, "Alpha25");
            bt.Add(65, "Alpha65");
            bt.Add(75, "Alpha75");

            bt.TraversalType = TreeTraversalType.PreOrder;

            System.Collections.Generic.List<int> lst = new System.Collections.Generic.List<int>();
            foreach (KeyValuePair<int, string> thisOne in bt)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(50, lst[0]);
            Assert.AreEqual(25, lst[1]);
            Assert.AreEqual(30, lst[2]);
            Assert.AreEqual(35, lst[3]);
            Assert.AreEqual(65, lst[4]);
            Assert.AreEqual(70, lst[5]);
            Assert.AreEqual(75, lst[6]);

            lst.Clear();

            bt.TraversalType = TreeTraversalType.PostOrder;
            foreach (KeyValuePair<int, string> thisOne in bt)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(25, lst[0]);
            Assert.AreEqual(30, lst[1]);
            Assert.AreEqual(35, lst[2]);
            Assert.AreEqual(65, lst[3]);
            Assert.AreEqual(70, lst[4]);
            Assert.AreEqual(75, lst[5]);
            Assert.AreEqual(50, lst[6]);

            lst.Clear();

            bt.TraversalType = TreeTraversalType.InOrder;
            foreach (KeyValuePair<int, string> thisOne in bt)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(25, lst[0]);
            Assert.AreEqual(30, lst[1]);
            Assert.AreEqual(35, lst[2]);
            Assert.AreEqual(50, lst[3]);
            Assert.AreEqual(65, lst[4]);
            Assert.AreEqual(70, lst[5]);
            Assert.AreEqual(75, lst[6]);

            lst.Clear();

            bt.TraversalType = TreeTraversalType.LevelOrder;
            foreach (KeyValuePair<int, string> thisOne in bt)
            {
                lst.Add(thisOne.Key);
            }

            Assert.AreEqual(50, lst[0]);
            Assert.AreEqual(25, lst[1]);
            Assert.AreEqual(30, lst[2]);
            Assert.AreEqual(35, lst[3]);
            Assert.AreEqual(65, lst[4]);
            Assert.AreEqual(70, lst[5]);
            Assert.AreEqual(75, lst[6]);

        }

    }
}
