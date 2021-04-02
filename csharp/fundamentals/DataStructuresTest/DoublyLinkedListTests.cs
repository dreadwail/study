using System;
using DataStructures;
using NUnit.Framework;

namespace DataStructuresTest
{
    public class DoublyLinkedListTests
    {
        [Test]
        public void CountTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.AreEqual(0, list.Count);
            list.AddBack("Alpha");
            Assert.AreEqual(1, list.Count);
            list.AddBack("Beta");
            Assert.AreEqual(2, list.Count);
        }

        [Test]
        public void NewLinkedListTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.NotNull(list);
			Assert.IsInstanceOf(typeof(DoublyLinkedList<string>), list);
            Assert.AreEqual(0, list.Count);
        }

        [Test]
        public void AddFrontTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddFront("Charlie");
            list.AddFront("Beta");
            list.AddFront("Alpha");

            Assert.AreEqual(3, list.Count);
            Assert.AreEqual("Alpha", list.GetAt(0));
            Assert.AreEqual("Beta", list.GetAt(1));
            Assert.AreEqual("Charlie", list.GetAt(2));
        }

        [Test]
        public void AddMiddleTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Delta");
            list.AddBack("Echo");
            list.AddAt(2, "Charlie");

            Assert.AreEqual(5, list.Count);
            Assert.AreEqual("Alpha", list.GetAt(0));
            Assert.AreEqual("Beta", list.GetAt(1));
            Assert.AreEqual("Charlie", list.GetAt(2));
            Assert.AreEqual("Delta", list.GetAt(3));
            Assert.AreEqual("Echo", list.GetAt(4));
        }

        [Test]
        public void AddMiddleException1Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.AddAt(5, "Alpha");
                });
        }

        [Test]
        public void AddMiddleException2Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.AddAt(-1, "Alpha");
                });
        }

        [Test]
        public void AddBackTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(3, list.Count);
            Assert.AreEqual("Alpha", list.GetAt(0));
            Assert.AreEqual("Beta", list.GetAt(1));
            Assert.AreEqual("Charlie", list.GetAt(2));
        }

        [Test]
        public void RemoveFrontTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");
            list.RemoveFront();

            Assert.AreEqual(2, list.Count);
            Assert.AreEqual("Beta", list.GetAt(0));
            Assert.AreEqual("Charlie", list.GetAt(1));
            string shouldBeBeta = list.RemoveFront();
            Assert.AreEqual("Beta", shouldBeBeta);
            string shouldBeCharlie = list.RemoveFront();
            Assert.AreEqual("Charlie", shouldBeCharlie);
            Assert.AreEqual(0, list.Count);
        }

        [Test]
        public void RemoveFrontExceptionTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    list.RemoveFront();
                });
        }

        [Test]
        public void RemoveMiddleTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            list.RemoveAt(1);
            Assert.AreEqual(2, list.Count);
            Assert.AreEqual("Alpha", list.GetAt(0));
            Assert.AreEqual("Charlie", list.GetAt(1));
        }

        [Test]
        public void RemoveMiddleException1Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.RemoveAt(5);
                });
        }

        [Test]
        public void RemoveMiddleException2Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.RemoveAt(-1);
                });
        }

        [Test]
        public void RemoveBackTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            string shouldBeCharlie = list.RemoveBack();
            Assert.AreEqual(2, list.Count);
            Assert.AreEqual("Charlie", shouldBeCharlie);

            string shouldBeBeta = list.RemoveBack();
            Assert.AreEqual(1, list.Count);
            Assert.AreEqual("Beta", shouldBeBeta);
        }

        [Test]
        public void RemoveBackExceptionTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    list.RemoveBack();
                });
        }

        [Test]
        public void ClearTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(3, list.Count);

            list.Clear();
            Assert.AreEqual(0, list.Count);
        }

        [Test]
        public void ContainsTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(3, list.Count);
            Assert.AreEqual(true, list.Contains("Alpha"));
            Assert.AreEqual(true, list.Contains("Beta"));
            Assert.AreEqual(true, list.Contains("Charlie"));
            Assert.AreEqual(false, list.Contains("Delta"));
        }

        [Test]
        public void IndexOfTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(0, list.IndexOf("Alpha"));
            Assert.AreEqual(1, list.IndexOf("Beta"));
            Assert.AreEqual(2, list.IndexOf("Charlie"));
            Assert.AreEqual(-1, list.IndexOf("Delta"));
        }

        [Test]
        public void GetFrontTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(3, list.Count);
            Assert.AreEqual("Alpha", list.GetFront());
            list.RemoveFront();
            Assert.AreEqual("Beta", list.GetFront());
            list.RemoveFront();
            Assert.AreEqual("Charlie", list.GetFront());
            list.RemoveFront();
            Assert.AreEqual(0, list.Count);
        }

        [Test]
        public void GetFrontExceptionTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    list.GetFront();
                });
        }

        [Test]
        public void GetAtTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual(3, list.Count);
            Assert.AreEqual("Alpha", list.GetAt(0));
            Assert.AreEqual("Beta", list.GetAt(1));
            Assert.AreEqual("Charlie", list.GetAt(2));

        }

        [Test]
        public void GetAtException1Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.GetAt(1);
                });
        }

        [Test]
        public void GetAtException2Test()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<ArgumentOutOfRangeException>(
                () =>
                {
                    list.GetAt(-1);
                });
        }

        [Test]
        public void GetBackTest()
        {
            var list = new DoublyLinkedList<string>();

            list.AddBack("Alpha");
            list.AddBack("Beta");
            list.AddBack("Charlie");

            Assert.AreEqual("Charlie", list.GetBack());
            list.RemoveBack();
            Assert.AreEqual("Beta", list.GetBack());
            list.RemoveBack();
            Assert.AreEqual("Alpha", list.GetBack());
            list.RemoveBack();
            Assert.AreEqual(0, list.Count);
        }

        [Test]
        public void GetBackExceptionTest()
        {
            var list = new DoublyLinkedList<string>();

            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    list.GetBack();
                });
        }
    }
}
