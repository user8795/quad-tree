Project name: 
	QuadTree Implementation
	

Description:
	This project is an implementation of a quadtree data structure, 
	a hierarchical tree structure used in computer science for spatial 
	indexing. 
	Quadtree's are particularly useful in partitioning two-dimensional
	space by recursively subdividing it into four quadrants until each 
	partition contains either a predetermined number of points or reaches 
	a specified level of depth. 
	This implementation provides a flexible and efficient solution for 
	spatial queries, collision detection, and other applications in 
	computer graphics, geographic information systems (GIS) and more
	

Credits:
	Credit goes to the content provided on the Wikipedia
	page dedicated to quadtrees


Usage:
	Installation: 
	download the quadtree.js source file containing the quadtree implementation.

	Integration: 
	Include the quadtree module in your project

	Initialization: 
	Create a new instance of a Rectangle (bounding box)
	Create a new instance of the Quadtree class specifying the bound box
	and the capacity you desire

	Insertion:
	Add points to the quadtree using the insert() method, providing the 
	coordinates of each point.
