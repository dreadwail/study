#ifndef _LINKEDLIST_H
#define _LINKEDLIST_H

#include "Node.h"
#include <boost/shared_ptr.hpp>

typedef boost::shared_ptr<Node> NodePtr;

class LinkedList
{
private:

	NodePtr _head;
	int _length;

public:

	LinkedList();
	~LinkedList();

	void append(std::string to_add);
	void prepend(std::string to_add);
	bool insert_at(int position, std::string to_add);

	bool remove_front();
	bool remove_back();
	bool remove_at(int position);

	std::string get_front();
	std::string get_back();
	std::string get_at(int position);

	void reverse();
	int length();
	std::string to_string();

};

#endif