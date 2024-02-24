import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllCetinelProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/cetinel-endustri`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getCetinelById = async(id)=>{
    let CETINEL;
    await axios.get(`${BASE_URL}/cetinel-endustri/${id}`)
    .then(res =>{
         CETINEL = res.data;
    })
    return CETINEL
}

// DELETE
export const deleteCetinelById = (id)=>{
    axios.delete(`${BASE_URL}/cetinel-endustri/${id}`)
}

// POST
export const postCetinel = async(payload)=>{
    axios.post(`${BASE_URL}/cetinel-endustri`,payload)
}

// EDIT
export const editCetinelById = (id,payload)=>{
     axios.put(`${BASE_URL}/cetinel-endustri/${id}`,payload)
}


// turvar requests


// GET ALL
export const getAllTurVarProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/turvar-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getTurVarById = async(id)=>{
    let TurVar;
    await axios.get(`${BASE_URL}/turvar-makina/${id}`)
    .then(res =>{
         TurVar = res.data;
    })
    return TurVar
}

// DELETE
export const deleteTurVarById = (id)=>{
    axios.delete(`${BASE_URL}/turvar-makina/${id}`)
}

// POST
export const postTurVar = async(payload)=>{
    axios.post(`${BASE_URL}/turvar-makina`,payload)
}

// EDIT
export const editTurVarById = (id,payload)=>{
     axios.put(`${BASE_URL}/turvar-makina/${id}`,payload)
}



// haknersan
// GET ALL
export const getAllHaknersanProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/haknersan`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getHaknersanById = async(id)=>{
    let HAKNERSAN;
    await axios.get(`${BASE_URL}/haknersan/${id}`)
    .then(res =>{
         HAKNERSAN = res.data;
    })
    return HAKNERSAN
}

// DELETE
export const deleteHaknersanById = (id)=>{
    axios.delete(`${BASE_URL}/haknersan/${id}`)
}



// POST
export const postHaknersan = async(payload)=>{
    axios.post(`${BASE_URL}/haknersan`,payload)
}

// EDIT
export const editHaknersanById = (id,payload)=>{
     axios.put(`${BASE_URL}/haknersan/${id}`,payload)
}


// KARADUMAN KALIP

// GET ALL
export const getAllKaradumanProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/karaduman-kalip`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getKaradumanById = async(id)=>{
    let KARADUMAN;
    await axios.get(`${BASE_URL}/karaduman-kalip/${id}`)
    .then(res =>{
         KARADUMAN = res.data;
    })
    return KARADUMAN
}

// DELETE
export const deleteKaradumanById = (id)=>{
    axios.delete(`${BASE_URL}/karaduman-kalip/${id}`)
}

// POST
export const postKaraduman = async(payload)=>{
    axios.post(`${BASE_URL}/karaduman-kalip`,payload)
}

// EDIT
export const editKaradumanById = (id,payload)=>{
     axios.put(`${BASE_URL}/karaduman-kalip/${id}`,payload)
}



// UZAY BASKUL

// GET ALL
export const getAllUzayProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/uzay-baskul`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getUzayById = async(id)=>{
    let UZAY;
    await axios.get(`${BASE_URL}/uzay-baskul/${id}`)
    .then(res =>{
         UZAY = res.data;
    })
    return UZAY
}

// DELETE
export const deleteUzayById = (id)=>{
    axios.delete(`${BASE_URL}/uzay-baskul/${id}`)
}

// POST
export const postUzay = async(payload)=>{
    axios.post(`${BASE_URL}/uzay-baskul`,payload)
}

// EDIT
export const editUzayById = (id,payload)=>{
     axios.put(`${BASE_URL}/uzay-baskul/${id}`,payload)
}




// OSMAN CUBUK

// GET ALL
export const getAllOsmanCubukProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/osman-cubuk`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getOsmanCubukById = async(id)=>{
    let OSMAN;
    await axios.get(`${BASE_URL}/osman-cubuk/${id}`)
    .then(res =>{
         OSMAN = res.data;
    })
    return OSMAN
}

// DELETE
export const deleteOsmanCubukById = (id)=>{
    axios.delete(`${BASE_URL}/osman-cubuk/${id}`)
}

// POST
export const postOsmanCubuk = async(payload)=>{
    axios.post(`${BASE_URL}/osman-cubuk`,payload)
}

// EDIT
export const editOsmanCubukById = (id,payload)=>{
     axios.put(`${BASE_URL}/osman-cubuk/${id}`,payload)
}




// OTHER PRODUCTS

// GET ALL
export const getAllOtherProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/elave-mehsullar`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getOtherById = async(id)=>{
    let OTHER;
    await axios.get(`${BASE_URL}/elave-mehsullar/${id}`)
    .then(res =>{
         OTHER = res.data;
    })
    return OTHER
}

// DELETE
export const deleteOtherById = (id)=>{
    axios.delete(`${BASE_URL}/elave-mehsullar/${id}`)
}

// POST
export const postOther = async(payload)=>{
    axios.post(`${BASE_URL}/elave-mehsullar`,payload)
}

// EDIT
export const editOtherById = (id,payload)=>{
     axios.put(`${BASE_URL}/elave-mehsullar/${id}`,payload)
}