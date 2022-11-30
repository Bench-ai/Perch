import styled from "styled-components";
import {Card} from "antd";

export const CardMainFocus = styled(Card)`
    width: 450px;
    margin: auto;
    @media (max-width: 500px) {
      width: 350px;
    }
`;
