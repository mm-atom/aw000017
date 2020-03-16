import { expect } from 'chai';
import t from '../dist/index';

describe('get path', () => {
	it('获取当前页面完整路径', () => {
		const v = t();
		expect(v).eq('http://localhost:9876/')
	});
});
