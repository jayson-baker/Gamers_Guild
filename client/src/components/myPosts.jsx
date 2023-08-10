import React, { useEffect }from "react";

function PageNav(props){
    const {
        pages=[],
        setCurrentPage,
        CurrentPage
    } = props;

useEffect(()=>{document.title = CurrentPage.name }, [currentPage])

return(
    <div>
        {/* needs code to will map over the pages array and that has a 
        function while it maps to have an onclick to change the current 
        page to that button */}
    </div>
)
} 

export default PageNav;