//Command line interface 'Grammar'
//command [verb] [object] [options]
// todos list
//todos      create      "buy breads"
//command    verb         object
//todos complete "buy breads"
//todos complete #4
//todos remove 4
//todos reset
// node todos [verb] [object] [options]

//fs module
//read
//write
//delete

//get the verb and object[s] from the command line arguments
// process (it is a kind of an object)
//console.log(process.argv)
//let arguments = process.argv;
let userArguments=process.argv.slice(2);
let verb = userArguments.shift();
console.log(`verb is a "${verb}"`);
console.log(`userArguments is now "${userArguments}"`);
//parse the JSON in argument 3
//console.log(JSON.parse[3]);
switch(verb.toLowerCase()){
    case 'read':
 //open the files
 //console.log the contents       
console.log('I will read the file here');
break;
    case 'write':
 //check if file exists
 //write nonsense to file       
console.log('I will write the file here');
break;
    case 'delete':
 //check for file to delete       
console.log('I will delete the file here');
break;
    default:
//invalid verb was provided.show error message including
//valid verbs        
console.log('Watchu talking about Willis?');
}


//
//
//