function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  let rotationAngle = map(sin(frameCount * 0.05), -1, 1, -PI / 4, PI / 4); // 커비 팔 흔들기 함수 
  background(220);
  
  push();

  stroke(240, 35, 130);
  strokeWeight(4);

  // 왼쪽 팔 그리기 (핑크색)
  translate(150, 200);
  rotate(rotationAngle);
  fill(255, 192, 223);
  ellipse(0, 0, 100, 70);
  
  pop();
 
  
  push();
  
  stroke(240, 35, 130);
  strokeWeight(4);
  // 오른쪽 팔 그리기 (핑크색)
  translate(250, 200);
  rotate(rotationAngle);
  fill(255, 192, 223);
  ellipse(0, 0, 100, 70);
  
  pop();
  
  
  push();
  
  stroke(240, 35, 130);
  strokeWeight(4);
  
  // 왼쪽 발 그리기 (빨간색)
  fill(255, 109, 145);
  ellipse(160, 260, 80, 50);
  
  // 오른쪽 발 그리기 (빨간색)
  fill(255, 109, 145);
  ellipse(240, 260, 80, 50);

  // 몸통 그리기 (핑크색)
  fill(255, 192, 223);
  ellipse(200, 200, 160, 160);
  
    // 왼쪽 눈 그리기
  fill(240,35,130);
  ellipse(180, 180, 20, 50);
  
  // 오른쪽 눈 그리기
  fill(240,35,130);
  ellipse(220, 180, 20, 50);
  
  // 입 그리기
  noFill();
  arc(200, 215, 30, 15, 0, PI);
  
  pop();
  
  
  push();
  
  noStroke();
  
  // 왼쪽 아래 눈동자 그리기
  fill(130,121,240);
  ellipse(180, 190, 13, 18);
  
  // 눈동자 깎아내기
  fill(240,35,130);
  ellipse(180, 180, 13, 18);
  
  // 오른쪽 아래 눈동자 그리기
  fill(130,121,240);
  ellipse(220, 190, 13, 18);
  
  // 눈동자 깎아내기
  fill(240,35,130); 
  ellipse(220, 180, 13, 18);
  
    // 왼쪽 눈동자 그리기
  fill(255);
  ellipse(180, 170, 13, 22);
  
  // 오른쪽 눈동자 그리기
  fill(255);
  ellipse(220, 170, 13, 22);
  
  // 왼쪽 홍조 그리기
  fill(255,134,187);
  ellipse(150, 210, 30, 20);
  
  // 오른쪽 홍조 그리기
  fill(255,134,187);
  ellipse(250, 210, 30, 20);
  
  pop();
}