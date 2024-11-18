import React from 'react'
import UrunArama from '../component/molecules/UrunArama'
import UrunListesi from '../component/organisms/UrunListesi'



function Product() {
    return (
        <div className='container'>
            <div className="row mt-4">
                
                    <div className="row">
                        <UrunArama />
                    </div>

                    
                    <div className="row">
                        <UrunListesi />
                    </div>
             
            </div>
        </div>
    )
}

export default Product