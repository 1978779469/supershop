const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
         config.resolve.alias.set('@', resolve('src'))
        .set('components', resolve('@/components'))
		.set('common', resolve('@/common'))
		.set('assets', resolve('@/assets'))
		.set('views', resolve('@/views'))
		.set('network', resolve('@/network'))
        //set第一个参数：设置的别名，第二个参数：设置的路径　　　
    }
}