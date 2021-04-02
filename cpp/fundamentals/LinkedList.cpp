#include "LinkedList.h"
#include "Node.h"

#include <sstream>

#include <boost/shared_ptr.hpp>

typedef boost::shared_ptr<Node> NodePtr;

LinkedList::LinkedList() : _head(NodePtr()), _length(0) {}

LinkedList::~LinkedList() {}

void LinkedList::append(std::string to_add)
{
	NodePtr new_node(new Node);
	new_node->value = to_add;
	new_node->next = NodePtr();

	if(_head == NULL)
	{
		_head = new_node;
	}
	else
	{
		NodePtr current = _head;
		while(current->next)
		{
			current = current->next;
		}
		current->next = new_node;
	}

	_length++;
}

void LinkedList::prepend(std::string to_add)
{
	NodePtr new_node(new Node);
	new_node->value = to_add;
	new_node->next = NodePtr();

	if(_head == NULL)
	{
		_head = new_node;
	}
	else
	{
		new_node->next = _head;
		_head = new_node;
	}

	_length++;
}

bool LinkedList::insert_at(int position, std::string to_add)
{
	if((position > (_length - 1)) || (_head == NULL))
	{
		return false;
	}
	else
	{
		NodePtr new_node(new Node);
		new_node->value = to_add;
		new_node->next = NodePtr();

		NodePtr previous = NodePtr();
		NodePtr current = _head;
		for(int i = 0; i < position; i++)
		{
			previous = current;
			current = current->next;
		}
		new_node->next = current;
		previous->next = new_node;
		_length++;
		return true;
	}
}

bool LinkedList::remove_front()
{
	if(_head == NULL)
	{
		return false;
	}
	else
	{
		_head = _head->next;
		_length--;
		return true;
	}
}

bool LinkedList::remove_back()
{
	if(_head == NULL)
	{
		return false;
	}
	else
	{
		NodePtr previous = NodePtr();
		NodePtr current = _head;

		while(current->next)
		{
			previous = current;
			current = current->next;
		}

		previous->next = NodePtr();
		_length--;
		return true;
	}
}

bool LinkedList::remove_at(int position)
{
	if((position > (_length - 1)) || (_head == NULL))
	{
		return false;
	}
	else
	{
		NodePtr previous = NodePtr();
		NodePtr current = _head;

		for(int i = 0; i < position; i++)
		{
			previous = current;
			current = current->next;
		}
		
		previous->next = current->next;
		_length--;
		return true;
	}
}

std::string LinkedList::get_front()
{
	if(_head == NULL)
		return "";
	else
		return _head->value;
}

std::string LinkedList::get_back()
{
	if(_head == NULL)
	{
		return "";
	}
	else
	{
		NodePtr current = _head;
		while(current->next)
		{
			current = current->next;
		}
		return current->value;
	}
}

std::string LinkedList::get_at(int position)
{
	if((position > (_length - 1)) || (_head == NULL))
	{
		return "";
	}
	else
	{
		NodePtr current = _head;

		for(int i = 0; i < position; i++)
		{
			current = current->next;
		}
		
		return current->value;
	}
}

int LinkedList::length()
{
	return _length;
}

void LinkedList::reverse()
{
	if((_head == NULL) || (_length == 1))
	{
		return;
	}
	else
	{
		NodePtr previous = NodePtr();
		NodePtr current = _head;
		NodePtr next = NodePtr();
		while(current)
		{
			next = current->next;
			current->next = previous;
			previous = current;
			current = next;
		}

		_head = previous;

	}
}

std::string LinkedList::to_string()
{
	std::string to_return = "LinkedList of ";
	std::stringstream length_stringstream;
	length_stringstream << _length;
	to_return += length_stringstream.str();
	to_return += " items.\n";

	if(_head != NULL)
	{
		NodePtr current = _head;
		while(current)
		{
			to_return += current->value;
			to_return += "\n";
			current = current->next;
		}
	}

	return to_return;
}