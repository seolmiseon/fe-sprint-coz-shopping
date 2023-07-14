import './Product.css'; 


export default function Product({title,image_url}) {
    return (

            <div className='product-container'>
                
            <img src={image_url} className='pr-item' alt="product" />
            <h3>{ title}</h3>
                <span className='item-detail'></span>

            </div>
            
    
    )

   
}
