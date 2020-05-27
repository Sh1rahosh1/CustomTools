var assert = require('assert');
import {testFun} from '../src/index';

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present ! !', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4))
        });

        it('should return test when call testFun',() =>{
            assert.equal(testFun(),"test")
        })
    })
})