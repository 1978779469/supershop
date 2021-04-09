import {request} from "network/request.js"

export function getDetailData(id) {
	return request({
		url:"/detail",
		params:{
			iid:id
		}
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