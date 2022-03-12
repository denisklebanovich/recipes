import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
    const [searched,setSearched] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearched(recipes.results)
    };
    useEffect(()=>{
      getSearched(params.search);
    },[params.search])
    return (
        <Grid>
            {searched.map((recipe)=>{
                return (
                    <Card key = {recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                            <img src={recipe.image}/>
                            <h4>{recipe.title}</h4>
                        </Link>

                    </Card>
                );
            })}
        </Grid>
    );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }

`;

export default Searched;
