# Linked Lists
Singly linked list implemented with JS for The Odin Project assignment

## Methods
- `append(value)` adds a new node with provided value to the end of a list
- `prepend(value)` adds a new node with provided value to the start of a list
- `size()` returns size of the list
- `head()` returns value of the first node of a list
- `tail()` returns value of the last node of a list
- `at(index)` returns value of the node at specified index
- `pop()` removes last node in a list
- `contains(value)` returns true if a value is in a list, false otherwise
- `find(value)` returns the index of the node containing value if the value is in a list, null if not found
- `toString()` returns LinkedList object as string in the format: `( value ) -> ( value ) -> ( value ) -> null`
- `insertAt(value, index)` inserts a new node with the provided value at the given index, throws error if index is invalid
- `removeAt(index)` removes the node at the given index, throws error if the list is empty or if the index is invalid
