let numbers = [12, 100, 642, 98, 162, 753];

let getEvenNumbers = (obj) => {
  let evenList = [];
  obj.map((o) => {
    if ((o % 2) === 0) {
      evenList.push(o);
    }
  });
  return alert(evenList);
};

getEvenNumbers(numbers);
