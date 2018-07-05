import wxRequest from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const baseUrlApi = 'https://api.ithome.com'
const baseUrlDyn = 'https://dyn.ithome.com'
const baseUrlQuan = 'https://apiquan.ithome.com'

//轮播图
const getSlides = (params) => wxRequest(params, baseUrlApi + "/xml/slide/slide.xml");

// 新闻列表
const getNewsList = (params) => wxRequest(params, baseUrlApi + "/json/newslist/news");


export default {
  getSlides,
  getNewsList
}
