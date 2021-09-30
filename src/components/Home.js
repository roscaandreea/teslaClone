import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
        </Container>
    )
}

export default Home;

const Container = styled.div `
    height: 100vh;
`
