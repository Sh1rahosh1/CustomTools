export const logger = (functionName:string,content:string|object) => {



    console.log('\n--------------------');
    console.log(`${functionName} print log`);
    console.log(content)
    console.log('--------------------\n');
}