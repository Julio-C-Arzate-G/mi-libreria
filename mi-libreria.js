// My method forEach()
const myMethodForEach = {};
myMethodForEach.myEach = (myArray, myfunction) => {
    for(let i = 0; i < myArray.length; i++) {
        myfunction(myArray[i], i)
    }
}
//myEach test operation 
const numbers = [1, 2, 3,  5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233];
myMethodForEach.myEach(numbers, (num,index) => {
    console.log(num,index);
}) 

// My method filter()
const myMethodFilter = {
    myFilter: function(myArray, myfunction){
        let newArray = [];
        for(let i = 0; i < myArray.length; i++) {
            if(myfunction(myArray[i])) {newArray.push(myArray[i])}
        }
        return newArray;
      }
    }
// myFilter test operation 
console.log(myMethodFilter.myFilter(numbers, (age) => age > 55));

//function declared to test the operation of myMap, myFind, myFindIndex
function myFunction(num) {
    return num >= 21;
}

  // My method map()
const myMethodMap = {
    myMap : function (myArray, myfunction) {
    let newArray = [] ;
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(myfunction(myArray[i]));
    }
    return newArray ;
}
}
// myMap test operation
console.log(myMethodMap.myMap(numbers, myFunction));

// My method find()
const myMethodFind = {
myFind : function (myArray, myfunction) {
    for (let i = 0; i < myArray.length; i++) {
        if (myfunction(myArray[i])) {
            return myArray[i];
        }
    }
}
}
// myFind test operation
console.log(myMethodFind.myFind(numbers,myFunction));

// My method findIndex()
const myMethodFindIndex = {
myFindIndex : function(myArray, myfunction) {
    for (let i = 0; i < myArray.length; i++) {
        if (myfunction(myArray[i])) {
            return i;
        }
    }
}
}
// myFindIndex test operation
console.log(myMethodFindIndex.myFindIndex(numbers,myFunction));

// My method contains()
const myMethodContains = {
 myContains : function(myArray, value) {
    for (let i = 0; i< myArray.length; i++) {
        if (value === myArray[i]) {
            return true;
        } else if (i == (myArray.length - 1))  {
            return false;
        }
    }
}
}
// myContains test operation
console.log(myMethodContains.myContains(numbers, 13));

// declared object to test the operation of myPluck
const users = [
    {
        id: 1,
        name: 'Julio',
        age: 31,
        email: 'julio@test.com',
        social: 'facebook/Julio',
        gender: 'Male'
    },
    {
        id: 2,
        name: 'Diego',
        age: 33,
        email: 'diego@test.com',
        social: 'facebook/Diego',
        gender: 'Male'
    },
];
// My method pluck()
const myMethodPluck = {
myPluck: function(myArray, property) {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].hasOwnProperty(property)) {
            // console.log(property);
            newArray.push(myArray[i][property]);
        } 
    }
    return newArray;
}
}
// myPluck test operation
console.log(myMethodPluck.myPluck(users,'social'));

//my method without()
const myMethodWithout = {    
myWithout: function(myArray, ...values) {
    let newArray = [];		
    for (let i = 0; i < myArray.length; i++) {
			let aux = false;
			for (let j = 0; j < values.length; j++ ) {
				if(myArray[i] == values[j]) {
					break;
				}else {
					aux = true;
				}
				if (aux && j == (values.length-1)) {
					newArray.push(myArray[i]);
				}
			}
    } 
    return newArray;
}
}
// test operation myWithout
console.log(myMethodWithout.myWithout(numbers, 2,8,34,144));