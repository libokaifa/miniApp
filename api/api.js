
const baseAPI = require('baseApi.js');

// 首页banner --- https://www.wanandroid.com/banner/json
let banner = () => baseAPI.request("GET", "/banner/json");

// 首页文章列表 --- // 使用 `（1旁边的符号）可以用 ${} 标记出变量 --- https://www.wanandroid.com/article/list/0/json
let articleList = (pageNum) => baseAPI.request("GET", `/article/list/${pageNum}/json`);

// 项目分类 --- https://www.wanandroid.com/project/tree/json
let projectCategory = () => baseAPI.request("GET", '/project/tree/json');

// 最新项目 --- https://www.wanandroid.com/article/listproject/0/json
let newProject = (pageNum) => baseAPI.request("GET", `/article/listproject/${pageNum}/json`);

// 项目列表数据 --- https://www.wanandroid.com/project/list/1/json?cid=294
let projectListData = (pageNum, param) => baseAPI.request("GET", `/project/list/${pageNum}/json`, param);

// 注册 --- https://www.wanandroid.com/user/register 参数：username,password,repassword
let register = (param) => baseAPI.request("POST", '/user/register', param);

// 登录 --- https://www.wanandroid.com/user/login 参数：username，password
let login = (param) => baseAPI.request("POST", '/user/login', param);

// 退出登录 --- https://www.wanandroid.com/user/logout/json
let unlogin = () => baseAPI.request("GET", '/user/logout/json');

// 收藏文章列表 --- https://www.wanandroid.com/lg/collect/list/0/json 参数： 页码：拼接在链接中，从0开始。
let collectList = (pageNum) => baseAPI.request("GET", `/lg/collect/list/${pageNum}/json`);

// 收藏页取消收藏 --- https://www.wanandroid.com/lg/uncollect/2805/json 参数：id: 拼接在链接上 originId: 列表页下发，无则为-1
let uncollect = (id, param) => baseAPI.request("POST", `/lg/uncollect/${id}/json`, param);

// 文章列表取消收藏 --- https://www.wanandroid.com/lg/uncollect_originId/2333/json 参数：id: 拼接在链接上
let articleUncollect = (id) => baseAPI.request("POST", `/lg/uncollect_originId/${id}/json`);

// 收藏文章 --- https://www.wanandroid.com/lg/collect/1165/json 参数：文章id，拼接在链接中。
let collect = (id) => baseAPI.request("POST", `/lg/collect/${id}/json`);

// 导航 --- https://www.wanandroid.com/navi/json
let navi = () => baseAPI.request("GET", '/navi/json');

// 常用网站 --- https://www.wanandroid.com/friend/json
let friend = () => baseAPI.request("GET", '/friend/json');

// 搜索 --- https://www.wanandroid.com/article/query/0/json 参数：页码：拼接在链接上，从0开始。k ： 搜索关键词
let search = (pageNum, param) => baseAPI.request("POST", `/article/query/${pageNum}/json`, param);

// 搜索热词 --- https://www.wanandroid.com/hotkey/json
let hotkey = () => baseAPI.request("GET", '/hotkey/json');

// 体系数据 --- https://www.wanandroid.com/tree/json
let tree = () => baseAPI.request("GET", '/tree/json');

// 知识体系下的文章 --- https://www.wanandroid.com/article/list/0/json?cid=60 参数：cid 分类的id，上述二级目录的id 页码：拼接在链接上，从0开始。
let treeArticle = (pageNum, param) => baseAPI.request("GET", `/article/list/${pageNum}/json`, param);

module.exports = {
  banner,
  articleList,
  projectCategory,
  newProject,
  projectListData,
  register,
  login,
  unlogin,
  collectList,
  uncollect,
  articleUncollect,
  collect,
  navi,
  friend,
  search,
  hotkey,
  tree,
  treeArticle
}

