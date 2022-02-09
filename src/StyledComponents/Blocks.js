import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap || "0px"};
`;
