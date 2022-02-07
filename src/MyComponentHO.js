/*
 * @Author: your name
 * @Date: 2022-02-07 01:54:00
 * @LastEditTime: 2022-02-07 07:44:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cs499\hook-and-api\src\MyComponentHO.js
 */

import React, { useEffect, useState } from 'react';

function MyComponentHO(){

    const [ repos, setRepos ] = useState([]);

    async function fetchSearchResults() {
        const response = await fetch(
            'https://api.github.com/search/repositories?q=${query}'
        );
        const responseData = await response.json();
        setRepos(responseData.items || []);
        
    }

    useEffect( () => {
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
