/**
 * @file: api接口
 * @author： im.yang
 */
import Network from '../http/Network';

/**
 * 广告Banner
 */
export const getBanner = Network.get('/banner', {type: 0});

