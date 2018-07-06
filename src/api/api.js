import wxRequest from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const baseUrlApi = 'https://api.ithome.com'
const baseUrlDyn = 'https://dyn.ithome.com'
const baseUrlQuan = 'https://apiquan.ithome.com'

//轮播图
const getSlides = (params) => wxRequest(params, baseUrlApi + "/xml/slide/slide.xml");

// 新闻列表
const getNewsList = (params) => wxRequest(params, baseUrlApi + "/json/newslist/news");

// 新闻详情
const getNews = (params) => wxRequest(params, baseUrlApi + `/xml/newscontent/${params}.xml`)

// 相关文章
const getRelatedNews = (params) => wxRequest(params, baseUrlApi + `/json/tags/0${(params.id).slice(0, 3)}/${params.id}.json`)

// 评论列表
const getNewsComments = (params) => wxRequest(params, baseUrlDyn + `/json/commentlist/350/87a8e5b144d81938.json`)

export default {
  getSlides,
  getNewsList,
  getNews,
  getRelatedNews,
  getNewsComments
}
