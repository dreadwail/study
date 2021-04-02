using System.Collections.Generic;
using DataStructures;
using NUnit.Framework;

namespace DataStructuresTest
{
    public class WeightedGraphTests
    {
        [Test]
        public void TraverseTest()
        {
            var graph = new WeightedGraph<string, int>();

            var one = new WeightedGraph<string, int>.WeightedNode("one");
            var two = new WeightedGraph<string, int>.WeightedNode("two");
            var three = new WeightedGraph<string, int>.WeightedNode("three");
            var four = new WeightedGraph<string, int>.WeightedNode("four");
            var five = new WeightedGraph<string, int>.WeightedNode("five");

            graph.Nodes.Add(one);
            graph.Nodes.Add(two);
            graph.Nodes.Add(three);
            graph.Nodes.Add(four);
            graph.Nodes.Add(five);

            graph.Connect(one, two, 5);
            graph.Connect(one, five, 2);
            graph.Connect(two, five, 1);
            graph.Connect(two, four, 8);
            graph.Connect(two, three, 1);
            graph.Connect(four, five, 15);
            graph.Connect(four, three, 13);

            graph.StartNode = one;

            var visitedOrder = new List<string>();

            foreach (var node in graph)
            {
                visitedOrder.Add(node);
            }

            Assert.AreEqual("one", visitedOrder[0]);
            Assert.AreEqual("five", visitedOrder[1]);
            Assert.AreEqual("two", visitedOrder[2]);
            Assert.AreEqual("three", visitedOrder[3]);
            Assert.AreEqual("four", visitedOrder[4]);
        }
    }
}
