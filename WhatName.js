async function Program(){
    // Your Code Goes Here...
   let name = await askQuestion("what is your name?");

    console.log(`Hello your name is ${name}`);
}


Program().then(() => {
    process.exit(0);
});