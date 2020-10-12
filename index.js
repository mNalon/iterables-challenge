/* 
Returns an iterable to iterate trough an arithmetic progression 
based on the first element `a1` and the diference `d`.
an = a1 + ( n - 1 )*d , where "an" is the value of the nth term of the sequence
*/
const paIterable = (a1, d) => {

}


/* 
Returns an iterable to iterate through all students of all schools.
The schools is an array of school objects. 
School objects have the following structure { students: ['name1', 'name2', ...] } 
*/
const schoolStudentsIterable = (schools) => {

}

/* 
Returns an iterable to iterate through all neighbors on a list.
Each neighbor are composed by: 
the previous element related to the correspondent element on the iteration (if this exists),
the correspondent element on the iteration
and the next element related to the correspondent element on the iteration (if this exists)
*/
const neighborsIterable = (list) => {

}

module.exports = {
  paIterable,
  schoolStudentsIterable,
  neighborsIterable
}