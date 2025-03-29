const paging = (totalpage, currentPage) => {
    return (totalpage>currentPage)? true : false;
};

export default paging;