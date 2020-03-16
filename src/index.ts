/**
 * 获取当前页面完整路径
 */
export default function getpath() {
	const origin = window.location.origin;
	const pathname = window.location.pathname;
	if (pathname === '/') {		// https://www.domain.com
		return window.location.href;	// https://www.domain.com/
	}
	// https://www.domain.com//
	// https://www.domain.com///
	// https://www.domain.com/aaa//
	// https://www.domain.com/aaa///
	// https://www.domain.com//aaa/
	// https://www.domain.com/aaa/bbb.html?dd#
	// https://www.domain.com///aaa//
	// https://www.domain.com/aaa
	return origin + pathname.replace(/\/{2,}/, '/').replace(/(.*\/).*/, '$1');
}
