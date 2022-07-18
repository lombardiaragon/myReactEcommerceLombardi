import Button from "react-bootstrap/esm/Button"
import { useState } from "react"


const Counter=({product})=>{
    const{stock,quantitySelected}=product
    const [quantity,setQuantity]=useState(quantitySelected || 1)
    console.log(quantitySelected)
    const toAdd=()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }
    const toRest=()=>{
        setQuantity(quantity-1)
    }

    product.quantitySelected=quantity

    return(
        <div className="mt-md-0 d-flex justify-content-center align-items-center">
            <Button type="button" className="btn-dark" onClick={toRest} disabled={quantity===1}>-</Button>
            <span className="mx-3">{quantity}</span>
            <Button type="button" className="btn-dark" onClick={toAdd}>+</Button>
        </div>
    )
}
export default Counter