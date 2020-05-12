import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const About = () => {
  const [url, setUrl] = useState({
    url: ""
  });

  const [url2, setUrl2] = useState({
    url: ""
  });

  const [author, setAuthor] = useState("");
  const [author2, setAuthor2] = useState("");

  useEffect(() => {
    getUrl().then(res => {
      const rdIndex = Math.floor(Math.random() * res.data.length);
      setUrl(res.data[rdIndex].download_url);
      setAuthor(res.data[rdIndex].author);
    });
  }, []);

  useEffect(() => {
    asyncFunc();
  }, []);

  const getUrl = async () => {
    try {
      return await axios.get("https://picsum.photos/v2/list");
    } catch (error) {
      console.log(error);
    }
  };

  const asyncFunc = async () => {
    try {
      const result = await axios.get("https://picsum.photos/v2/list");
      const rdIndex = Math.floor(Math.random() * result.data.length);
      setUrl2(result.data[rdIndex].download_url);
      setAuthor2(result.data[rdIndex].author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDiv>
      <p>{author}</p>
      <img src={url} alt="computer" />
      <p>{author2}</p>
      <img src={url2} alt="computer" />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: inherit;

  p {
    font-size: 30px;
    margin-bottom: 15px;
  }

  img {
    height: 350px;
    width: 350px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 15px;
  }
`;

export default About;
