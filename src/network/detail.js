import {request} from "network/request.js"

export function getDetailData(id) {
	return request({
		url:"/detail",
		params:{
			iid:id
		}
	})
}