using System;
using System.Collections;
using System.Collections.Generic;

namespace DataStructures
{
    public class WeightedGraph<T, TWeight> : IEnumerable<T> where TWeight : IComparable
    {
        public class WeightedNode
        {
            public T Item { get; set; }
            public Dictionary<WeightedNode, TWeight> Paths { get; set; }

            public WeightedNode(T item)
            {
                this.Paths = new Dictionary<WeightedNode, TWeight>();
                this.Item = item;
            }
        }

        public WeightedNode StartNode { get; set; }
        public GraphTraversalType TraversalType { get; set; }
        public List<WeightedNode> Nodes { get; private set; }

        public WeightedGraph()
        {
            this.Nodes = new List<WeightedNode>();
            this.TraversalType = GraphTraversalType.Dijkstra;
        }

        public void Connect(WeightedNode endpoint1, WeightedNode endpoint2, TWeight weight)
        {
            endpoint1.Paths.Add(endpoint2, weight);
            endpoint2.Paths.Add(endpoint1, weight);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        public IEnumerator<T> GetEnumerator()
        {
            if (this.StartNode == null)
            {
                throw new InvalidOperationException("No start node specified.");
            }

            if (this.TraversalType == GraphTraversalType.DepthFirst)
            {
                return this.EnumerateDepthFirst();
            }
            else if (this.TraversalType == GraphTraversalType.BreadthFirst)
            {
                return this.EnumerateBreadthFirst();
            }
            else if (this.TraversalType == GraphTraversalType.Dijkstra)
            {
                return this.EnumerateDijkstra();
            }
            else
            {
                throw new NotImplementedException();
            }
        }

        private IEnumerator<T> EnumerateDepthFirst()
        {
            if (this.StartNode.Paths.Count == 0)
            {
                yield break;
            }

            List<WeightedNode> visitedNodes = this.GetDepthFirstVisitation();

            foreach (var visitedNode in visitedNodes)
            {
                yield return visitedNode.Item;
            }
        }

        private List<WeightedNode> GetDepthFirstVisitation()
        {
            var visitedNodes = new List<WeightedNode>();

            var nodes = new Stack<WeightedNode>();
            nodes.Push(this.StartNode);

            while (nodes.Count > 0)
            {
                WeightedNode dequeued = nodes.Pop();
                visitedNodes.Add(dequeued);

                foreach (var path in dequeued.Paths)
                {
                    if (!visitedNodes.Contains(path.Key))
                    {
                        nodes.Push(path.Key);
                    }
                }
            }

            return visitedNodes;
        }

        private IEnumerator<T> EnumerateBreadthFirst()
        {
            if (this.StartNode.Paths.Count == 0)
            {
                yield break;
            }

            List<WeightedNode> visitedNodes = this.GetBreadthFirstVisitation();

            foreach (var visitedNode in visitedNodes)
            {
                yield return visitedNode.Item;
            }
        }

        private List<WeightedNode> GetBreadthFirstVisitation()
        {
            var visitedNodes = new List<WeightedNode>();

            var nodes = new Queue<WeightedNode>();
            nodes.Enqueue(this.StartNode);

            while (nodes.Count > 0)
            {
                WeightedNode dequeued = nodes.Dequeue();
                visitedNodes.Add(dequeued);

                foreach (var path in dequeued.Paths)
                {
                    if (!visitedNodes.Contains(path.Key))
                    {
                        nodes.Enqueue(path.Key);
                    }
                }
            }

            return visitedNodes;
        }

        private IEnumerator<T> EnumerateDijkstra()
        {
            if (this.StartNode.Paths.Count == 0)
            {
                yield break;
            }

            var visitedNodes = new List<WeightedNode>();
            visitedNodes.Add(this.StartNode);
            this.BuildDijkstraVisitation(this.StartNode, visitedNodes);

            foreach (var visitedNode in visitedNodes)
            {
                yield return visitedNode.Item;
            }
        }

        private void BuildDijkstraVisitation(WeightedNode node, List<WeightedNode> visitedNodes)
        {
            WeightedNode shortestPathNode = null;
            TWeight shortestPath = default(TWeight);

            foreach (var path in node.Paths)
            {
                if (!visitedNodes.Contains(path.Key))
                {
                    if (shortestPathNode == null || path.Value.CompareTo(shortestPath) <= 0)
                    {
                        shortestPathNode = path.Key;
                        shortestPath = path.Value;
                    }
                }
            }

            if (shortestPathNode != null)
            {
                visitedNodes.Add(shortestPathNode);
                this.BuildDijkstraVisitation(shortestPathNode, visitedNodes);
            }
        }
    }
}
