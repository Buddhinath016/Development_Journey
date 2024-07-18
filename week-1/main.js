function practiceFunction(){
    let p = new Promise(function(resolve){
        resolve("Practice Function");
    });
    return p;
}

async function main(){
    const value = await practiceFunction();
    console.log(value);
}

main(); 