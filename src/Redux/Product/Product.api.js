import axios from "axios"

export const getMensProductsAPI = async (page) => {
    let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}`)
    // console.log(res.data)
    return res
}

export const getSingleProductAPI = async (id) => {
    let res = await axios.get(`https://vastra.onrender.com/MensData/${id}`)
    return res
}

// sorting api calls
let baseURL = `https://vastra.onrender.com/MensData?_limit=12&`

export const getProductsSorting = async (val, page) => {
    if (val === "PriceLTH") {
        let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}&_sort=discounted_price&_order=asc`)
        return res
    }
    if (val === "PriceHTL") {
        let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}&_sort=discounted_price&_order=desc`)
        return res
    }
    if (val === "discount") {
        let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res
    }
    if (val === "rating") {
        let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res
    } else {
        let res = await axios.get(`${baseURL}`)
        return res
    }
}

// filter 
export const getFilterByBrand = async (val, page) => {
    val = (val.toString())
    // console.log(val)
    let res = await axios.get(`https://vastra.onrender.com/MensData?_limit=12&_page=${page}&brand=${val}`)

    return res
    // console.log(res.data)
}

// --Women--Section--

export const getWomensProductsAPI = async (page) => {
    let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}`)
    
    // Adding body type based on sizes
    let dataWithBodyType = res.data.map(product => {
        let bodyType = '';
        if (product.size.includes('XXL')) bodyType = 'Plus Size';
        else if (product.size.includes('XL')) bodyType = 'Curvy';
        else if (product.size.includes('M')) bodyType = 'Average';
        else if (product.size.includes('S')) bodyType = 'Petite';
        return {...product, bodyType};
    });

    return {...res, data: dataWithBodyType};
};

export const getWomensSingleProductAPI = async (id) => {
    let res = await axios.get(`https://vastra.onrender.com/WomensData/${id}`)
    return res
}

// sorting api calls
let WomensbaseURL = `https://vastra.onrender.com/WomensData?_limit=12&`

export const getWomensProductsSorting = async (val, page) => {
    if (val === "PriceLTH") {
        let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}&_sort=discounted_price&_order=asc`)
        return res
    }
    if (val === "PriceHTL") {
        let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}&_sort=discounted_price&_order=desc`)
        return res
    }
    if (val === "discount") {
        let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}&_sort=${val}`)
        return res
    }
    if (val === "rating") {
        let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}&_sort=${val}`)
        return res
    } else {
        let res = await axios.get(`${WomensbaseURL}`)
        return res
    }
}

// filter 
export const getWomensFilterByBrand = async (val, page) => {
    val = (val.toString())
    // console.log(val)
    let res = await axios.get(`https://vastra.onrender.com/WomensData?_limit=12&_page=${page}&brand=${val}`)

    return res
    // console.log(res.data)
}


// --Kids--Section--
export const getKidsProductsAPI = async (page) => {
    let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}`)
    // console.log(res.data)
    return res
}
export const getKidsSingleProductAPI = async (id) => {
    let res = await axios.get(`https://vastra.onrender.com/ChildData/${id}`)
    return res
}

// sorting api calls
let KidsbaseURL = `https://vastra.onrender.com/ChildData?_limit=12&`

export const getKidsProductsSorting = async (val, page) => {
    if (val === "PriceLTH") {
        let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}&_sort=discounted_price&_order=asc`)
        return res
    }
    if (val === "PriceHTL") {
        let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}&_sort=discounted_price&_order=desc`)
        return res
    }
    if (val === "discount") {
        let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res
    }
    if (val === "rating") {
        let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}&_sort=${val}&_order=desc`)
        return res
    } else {
        let res = await axios.get(`${KidsbaseURL}`)
        return res
    }
}

// filter 
export const getKidsFilterByBrand = async (val, page) => {
    val = (val.toString())
    // console.log(val)
    let res = await axios.get(`https://vastra.onrender.com/ChildData?_limit=12&_page=${page}&brand=${val}`)

    return res
    // console.log(res.data)
}


