/**
 * @file: api接口
 * @author： im.yang
 */
import Network from '../http/Network';

/**
 * 广告Banner
 */
export const getBanner = () => Network.get('/banner', {type: 0});

/**
 * 获取每日歌单推荐
 */
export const getDayRecommend = () => Network.get('/personalized?limit=6', {});

/**
 * 推荐新音乐
 */
export const getNewSong = () => Network.get('/personalized/newsong', {});

/**
 * 获取歌曲详情
 */
export const getSongDetail = (ids) => Network.get('/song/detail?',{ids : ids});

