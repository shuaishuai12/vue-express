module.exports = {
	tupian: {
		name:{ type: String },
		id:{ type: String },
		tel:{ type: String },
		path:{type: String }

	},
	shuju: {
		name:{ type: String },
		id:{ type: String },
		birth:{type: String },
		sex:{type: String },
		address:{type: String },
		age:{type: String },
		tel:{type: String }


	},
	lujing: {


		name:{ type: String },
		id:{ type: String },
		sex:{ type: String },
		age:{type: String },
		brith:{type: String },
		addr:{type: String }

	},
	login:{
		name:{type:String},
		password:{type:String}
	},
	users:{
		name:{type:String},
		password:{type:String}
	},
	shuaishuai: {
		name: String,
		tel: String,
		id:String,
		imgSrc: String,
		uId: { type: String }

	},


	cart:{
		uId: { type: String },
		cId: { type: String },
		cName: { type: String },
		cPrice: { type: String },
		cImgSrc: { type:String } ,
		cQuantity: { type: Number },
		cStatus : { type: Boolean, default: false  }
	}
};