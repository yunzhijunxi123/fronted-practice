//配置具体的修改规则
const { override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {//按需引入
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
	}),
	addLessLoader({//自定义主题
		lessOptions:{
			javascriptEnabled: true,
			modifyVars: { '@primary-color': 'green' },
		}
	}),
);