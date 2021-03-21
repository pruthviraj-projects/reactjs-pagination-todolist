import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = () => {

    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const usersPerPage=10;
    const pageVisited= pageNumber*usersPerPage;

    const displayUsers=data.slice(pageVisited,pageVisited+usersPerPage)
    .filter((user,index) =>{
        if(searchTerm==""){
            return user;
        }else if(user.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return user;
        }
    }).map((user,index) =>{
        return(
            <div className="Users">
            <li key={index}>{user.title}</li>
        </div> 
        )
    })

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []);

    const pageCount=Math.ceil(data.length/ usersPerPage);

    const changePage=({selected})=>{
        setPageNumber(selected);
    }

    return (
        <div className="App">
            <input 
            type="text"
            placeholder="Search..."
            onChange={(event)=>{
                setSearchTerm(event.target.value);
            }}/>
            {displayUsers}
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBtns"
            previousLinkClassName="previousBtns"
            nextLinkClassName="nextBtns"
            disabledClassName="disabledBtns"
            activeClassName="activeBtns"
            />
        </div>
    )
}
