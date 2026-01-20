module.exports = {
  // 关键配置：仓库名要和你 Fork 后的仓库名完全一致
  publicPath: process.env.NODE_ENV === 'production'
    ? '/homework/'  // 生产环境路径，必须以 / 开头和结尾
    : '/'  // 开发环境路径
}