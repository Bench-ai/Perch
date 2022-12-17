import styled from "styled-components";
import {Alert} from "antd";

export const AlertSmall = styled(Alert)`
    max-width: 350px;
    text-align: left;
    margin: auto;
    margin-bottom: 10px;
    @media (max-width: 500px) {
      width: 300px;
    }
`;
