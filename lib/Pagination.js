const Pagination = {

    pagination(Results, page = 1, perPage = 5){
        
        return {
            DataResult: Results.slice((page - 1) * perPage, page * perPage),
            meta: {
                page,
                perPage,
                totalPages: Math.ceil(Results.length / perPage)
            }
        }
    },

    paginationnotSlice(Results, page = 1,  perPage = 1 ){
        
        return {
            DataResult: Results,
            meta: {
                page,
                perPage,
                totalPages: page
            }
        }
    },

}

export default Pagination