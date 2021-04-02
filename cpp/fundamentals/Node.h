#ifndef _NODE_H
#define _NODE_H

#include <string>
#include <boost/shared_ptr.hpp>

struct Node
{
	std::string value;
	boost::shared_ptr<Node> next;
};

#endif