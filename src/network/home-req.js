import {request} from './request.js'

export function getHomeMultidata(){
	return request({
		url: '/home/multidata'
	})
}

export function getHomeGoods(type,page){
	return request({
		url: '/home/data',
		params: {
			type: type,
			page: page
		}
	})
}

export function detailReq(iid){
	return request({
		url: '/detail',
		params: {
			iid: iid
		}
	})
}

export class Goods {
	constructor(itemInfo,columns,services){
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}

export class Shops {
	constructor(shopInfo){
		this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodCount = shopInfo.cGoods
	}
}

export class GoodsParam {
	constructor(info,rule){
		this.image = info.image ? info.image :'',
		this.infos = info.set
		this.sizes = rule.tables
	}
}