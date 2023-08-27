import {Suspense} from "react";
import {Outlet} from "react-router-dom"
import {Container,Header,Link} from "./SharedLayout.styled"

export const SharedLayout =()=>{

    return (
        <Container>
          <Header>
            <nav>
              <Link to="https://mateuszbieda.github.io/goit-react-hw-05-movies/">Home</Link>
              <Link to="/movies">Movies</Link>
            </nav>
          </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
        </Container>
      );






};