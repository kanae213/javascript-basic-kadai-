const num =15;

//3と５の倍数 
if(( num % 3 && num % 5 ) ==0 ) {
  console.log('３と５の倍数です');
}

//3の倍数
else if(( num % 3 ) == 0 ) {
  console.log('3の倍数です');
}

//5の倍数
else if(( num % 5 ) == 0 ) {
console.log('5の倍数です');
}

//それ以外
else {
  console.log('15');
}
