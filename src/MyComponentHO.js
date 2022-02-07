/*
 * @Author: your name
 * @Date: 2022-02-07 01:54:00
 * @LastEditTime: 2022-02-07 08:22:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cs499\hook-and-api\src\MyComponentHO.js
 */

import React, { useEffect, useState } from 'react';

function MyComponentHO(query){

    const [ repos, setRepos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect( () => {
        async function fetchSearchResults() {
            let responseBody = {};
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await fetch(
                    `https://api.github.com/search/repositories?q=${query}`
                );
                responseBody = await response.json();
            }
            catch(e){
                
            }
            setRepos(responseData.items || []);
            
        }
        
        fetchSearchResults();
    })

    return (
        <ul>
            {repos.map(reop => (
                <li key={reop.id}>
                    <a href={repos.html_url}>{repos.full_name}</a>
                </li>
            ))}
        </ul>
    )
}

export default MyComponentHO;
