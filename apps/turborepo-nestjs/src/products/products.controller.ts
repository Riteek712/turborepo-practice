import { Body, Controller, Post, Get } from '@nestjs/common';
import {CreateProductRequest} from "@repo/types"
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    createProduct(@Body() createProductRequest: CreateProductRequest){
        return this.productService.createProduct(createProductRequest)
    }

    @Get()
    getAllProducts(){
        return this.productService.getAllProducts();
    }
}
