import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    margin-top: 1.5rem;
    flex-direction: column;
    border-radius: 6px;
    width: 250px;
    
    @media (max-width: 658px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const MovieImage = styled.div`
    img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 15px;
    }

    @media (max-width: 658px) {
        height: 250px;
        width: 230px; 
    }
`;

export const MovieDescription = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    display: block;
    padding: 0;
    margin: 0;

    h1 {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
        color: #F7F7F7;
    }
    span {
        color: #117360;
        font-weight: 500;
    }

    @media (max-width: 658px) {
        padding: 10px 0;
        h1 {
            font-size: 20px;
            font-weight: 400;
        }
        span {
            font-weight: 400;
            
        }
    }
`;
