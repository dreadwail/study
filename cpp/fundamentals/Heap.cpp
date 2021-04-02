#include "Heap.h"

#include <string>
#include <sstream>

Heap::Heap()
{
	_heap[0] = 0;
	_size = 0;
}

Heap::~Heap()
{
}

int Heap::min()
{
	return _heap[1];
}

void Heap::insert(int x)
{
	//put at bottom of tree in first open spot (end of array)
	//bubble up (swapping) until heap satisfied
	//parent is i/2 rounded down
}

void Heap::remove_min()
{
	//remove root
	//fill hole with last entry in tree (end of array)
	//bubble down (swapping) using smallest children
	//children are 2i and 2i+1
}

int Heap::size()
{
	return _size;
}

std::string Heap::to_string()
{
	if(size() == 0)
	{
		return "";
	}
	else
	{

		std::stringstream root_ss;
		root_ss << _heap[0];
		std::string to_return = root_ss.str();

		for(int i = 1; i <= size(); i++)
		{
			int child_left_idx = (2 * i);
			int child_right_idx = (2 * i) + 1;
			
			if(child_left_idx <= size())
			{
				int child_left = _heap[child_left_idx];
				std::stringstream child_left_ss;
				child_left_ss << child_left;
				to_return += child_left_ss.str();
				to_return += " ";
			}

			if(child_right_idx <= size())
			{
				int child_right = _heap[child_right_idx];
				std::stringstream child_right_ss;
				child_right_ss << child_right;
				to_return += child_right_ss.str();
				to_return += " ";
			}
		}

		return to_return;

	}
}