interface Square {
    shape: 'square';
    sideLength: number;
  }
  
  interface Circle {
    shape: 'circle';
    radius: number;
  }
  function calculateArea(shape: Square | Circle): number {
    if (shape.shape === 'square') {
      return shape.sideLength ** 2;
    } else if (shape.shape === 'circle') {
      return Math.PI * shape.radius ** 2; 
    } else {
      throw new Error('Invalid shape'); 
    }
  }
  const square: Square = {
    shape: 'square',
    sideLength: 5
  };
    
  const circle: Circle = {
    shape: 'circle',
    radius: 3
  };
  
  console.log(calculateArea(square)); // Output: 25 (diện tích hình vuông)
  console.log(calculateArea(circle)); // Output: 28.274333882308138 (diện tích hình tròn)