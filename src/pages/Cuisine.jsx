import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results)
    };
    useEffect(() => {

        getCuisine(params.type);
    }, [params.type]);
    return (
        <Grid animate={{opacity: 1}}
              initial={{opacity: 0}}
        exit={{opacity:0}}
        transition = {{duration:0.5}}>
            {cuisine.map((recipe) => {
                return (
                    <Card key={recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                            <img src={recipe.image} alt={''}/>
                            <h4>{recipe.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};
const Grid = styled(motion.div)`
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

export default Cuisine;
