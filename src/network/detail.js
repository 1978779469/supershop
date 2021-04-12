import {request} from "network/request.js"

export function getDetailData(id) {
	return request({
		url:"/detail",
		params:{
			iid:id
		}
	})
}
export function getDatilRecommend() {
	return request({
		url:'/recommend'
	})
}

//相当于export function Goods() {}
//通过 const info = new Goods() 调用
export class Goods {
	constructor(itemInfo,columns,services) {
	    this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.realPice = itemInfo.lowNowPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
	}
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}