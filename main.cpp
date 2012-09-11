#include <iostream>

#include "LinkedList.h"

int main()
{
	LinkedList list;

	list.append("alpha");
	list.append("beta");
	list.append("charlie");
	list.append("delta");
	list.append("echo");

	std::cout << list.to_string() << std::endl;

	list.reverse();

	std::cout << list.to_string() << std::endl;

	return 0;
}