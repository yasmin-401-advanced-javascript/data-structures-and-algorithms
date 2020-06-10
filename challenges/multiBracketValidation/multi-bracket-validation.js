function multiBracketValidation(input){

  let inputSplit = input.split('');
  let bracets = inputSplit.filter(val => {
    return (val === '(' || val === ')' || val === '{' || val === '}' || val === '[' || val === ']')
  });
  bracets = bracets.join('');

}

multiBracketValidation('[][[]]')
