class Point {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
}

class Rectangle {
	constructor(_x, _y, _w, _h) {
		this.x = _x;			//center x and y coordinates
		this.y = _y;
		this.width = _w;		//half of the width
		this.height = _h;		//half of the height
	}	

	contains(point) {
		//check bounds of point
		return (
			point.x >= this.x - this.width &&
			point.x <= this.x + this.width &&
			point.y >= this.y - this.height &&
			point.y <= this.y + this.height
		);
	}
}

class QuadTree {
	constructor(_boundary, _capacity) {
		this.boundary = _boundary;
		this.capacity = _capacity;
		this.points = [];
		this.divided = false;				// state variable
	}

	subdivide() {
		let x = this.boundary.x;
		let y = this.boundary.y;
		let w = this.boundary.width / 2;
		let h = this.boundary.height / 2;
		
		//create boundary variables for new nodes
		let tl = new Rectangle(x - w, y + h, w, h);
		let tr = new Rectangle(x + w, y + h, w, h);
		let bl = new Rectangle(x - w, y - h, w, h);
		let br = new Rectangle(x + w, y - h, w, h);
		
		
		//declare new nodes
		this.topLeft = new QuadTree(tl, this.capacity);
		
		this.topRight = new QuadTree(tr, this.capacity);
		
		this.bottomLeft = new QuadTree(bl, this.capacity);
	
		this.bottomRight = new QuadTree(br, this.capacity);

		this.divided = true;		//set state variable to true
	}

	insert(point) {
		//ignore points not in this quadtree boundary
		if (!this.boundary.contains(point)) {
			return false;
		}

		//if there is capacity then add the point
		if (this.points.length < this.capacity) {
			this.points.push(point);
			return true;
		} else {		//if no space in points array then subdivide
			if (!this.divided) {
			this.subdivide();
		}
		//insert point into correct region
		return (
			this.topRight.insert(point) ||
			this.topLeft.insert(point) ||
			this.bottomRight.insert(point) ||
			this.bottomLeft.insert(point)
			);
		}
	}
}