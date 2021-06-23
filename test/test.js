var expect = require('expect.js');

// ts 测试编译后文件
var storage = require('../src/index.ts');
storage.init({
	name: 'simple-local-storage-test',
	version: '1.0.0'
})

describe('simple-local-storage', function () {
	describe('getItem', function () {
		it('should return null when passed key has not been set', function () {
			expect(storage.getItem('abc')).to.equal(null);
		});
		it('should return default value when passed key has not been set and a default value is passed', function () {
			expect(storage.getItem('abc', 123)).to.equal(123);
		});
		it('should return json object', function () {
			let jsonobj = {
				a: {
					b: {
						c: 123,
						d: '123',
					}
				}
			}
			storage.setItem('jsonobj', jsonobj)
			expect(storage.getItem('jsonobj')).to.eql(jsonobj);
		});
		it('should return array', function () {
			let arr = {
				a: 1,
				b: {
					c: '2',
					d: [{
						g: 'c'
					}]
				}
			}
			storage.setItem('arr', arr)
			expect(storage.getItem('arr')).to.eql(arr);
		});
		it('should return string', function () {
			let str = 'test str'
			storage.setItem('str', str)
			expect(storage.getItem('str')).to.equal(str);
		});
		it('should return null', function () {
			let n = null
			storage.setItem('n', n)
			expect(storage.getItem('n')).to.equal(null);
		});
		it('should return undefined', function () {
			let u = undefined
			storage.setItem('u', u)
			expect(storage.getItem('u')).to.equal(undefined);
		});
		it('should return number', function () {
			let n = 1
			storage.setItem('n', n)
			expect(storage.getItem('n')).to.equal(1);
		});
	});
});
