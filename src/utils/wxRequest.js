
import util from './util';
import tip from './tip'

const TIMESTAMP = util.getCurrentTime()

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    data.time = TIMESTAMP;
    let res = await new Promise((resolve) => {
      wx.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': (params.method ? 'application/x-www-form-urlencoded' : 'application/json') },
        success: function(rlt){
          return resolve(rlt)
        }
      });
    }) 
    tip.loaded();
    return res;
};

export default wxRequest
