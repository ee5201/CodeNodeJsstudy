import express from "express";
import { CashService } from "./MVC/controllers/services/cash.service.js";
import { ProductController} from './MVC/controllers/product.controller.js'
import { CuponController } from "./MVC/controllers/coupon.controller.js";

const app = express()


//상품 API
const productcontroller = new ProductController()
app.post("/products/buy", productcontroller.Buyproduct ) // 상품 구매하기 
app.post("/products/refund", productcontroller.Refundproduct) // 상품 환불하기

//cupon 구매하기
const cuponcontroller = new CuponController()
app.post("/cupons/buy", cuponcontroller.buyCoupone ) // 쿠폰(상품권) 구매하기

app.listen(3000)