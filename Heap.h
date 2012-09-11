#ifndef _HEAP_H
#define _HEAP_H

#include <string>

#include <boost/shared_ptr.hpp>

class Heap
{
private:
	int _heap[1];
	int _size;
public:
	Heap();
	~Heap();

	int min();
	void insert(int x);
	void remove_min();
	int size();

	std::string to_string();
	
};

#endif