import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
`;

const Image = styled.img`
  width: 500px;
  border-radius: 15px;
`;

const BioTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  margin: 0 2rem;
  width: 45%;
`;

const Owner = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Wan - Group F - No.21</Title>
        <Image
          src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/286098434_1973414686200063_9004478242996446436_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEo_0rcMRPBhy3_0rkCYvd1H3YYgcM0fQgfdhiBwzR9CHanKwvnpgJKvMcHHt2CsMnn2XAJGMlwKnyK4wmD900X&_nc_ohc=RJRc1KJenMsAX9geM4A&_nc_ht=scontent.fnak3-1.fna&oh=00_AfCmECyp0T1OIJqr-QE-1-S_flYdj_-2NX_LIN-t9ANHyQ&oe=644396BD"
          alt="Wan"
        />
        <BioTitle>Short Biography:</BioTitle>
        <BioText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          consequuntur reprehenderit. Accusantium dignissimos mollitia alias
          exercitationem sed ex ea rem veniam similique corrupti, nemo
          recusandae qui assumenda voluptatibus vero. Est!
        </BioText>
      </Container>
    </>
  );
};

export default Owner;
