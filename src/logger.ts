export const logger = (functionName:string,content:string) => {



    console.log('\n--------------------');
    console.log(`${functionName} print log`);
    console.log(content)
    console.log('--------------------\n');
}